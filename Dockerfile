FROM oven/bun:1 AS builder
WORKDIR /app/frontend
COPY package*.json ./

RUN bun install

COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# If app uses i18next
#COPY --from=builder /app/frontend/src/assets/locales /usr/share/nginx/html/src/assets/locales

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]