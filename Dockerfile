ARG NODE_VERSION=20.19.0
ARG PNPM_VERSION=8.15.7

################################################################################
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
# Instal pnpm secara global
RUN npm install -g pnpm@${PNPM_VERSION}

################################################################################
FROM base AS deps
# Salin file konfigurasi dependensi
COPY package.json pnpm-lock.yaml ./
# Hapus --frozen-lockfile agar pnpm bisa menyesuaikan lockfile jika perlu
RUN pnpm install --prod

################################################################################
FROM deps AS build
# Instal dependensi dev untuk proses build
RUN pnpm install 
# Salin seluruh source code
COPY . .
# Jalankan perintah build aplikasi
RUN pnpm run build

################################################################################
FROM base AS final
ENV NODE_ENV=production
ENV PORT=5000
USER node

# Salin package.json untuk kebutuhan runtime
COPY package.json .
# Salin node_modules dari tahap deps
COPY --from=deps /usr/src/app/node_modules ./node_modules
# Salin hasil build (biasanya di folder dist)
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5000
CMD ["pnpm", "start:prod"]