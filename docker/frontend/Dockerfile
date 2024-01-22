FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY package.json package-lock.json /app/
RUN npm ci
COPY . /app/
RUN npm run build


FROM builder AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 frontend
RUN adduser --system --uid 1001 frontend
USER frontend

COPY --from=builder /app ./app

COPY --from=builder --chown=frontend:frontend /app/.next/cache ./
COPY --from=builder --chown=frontend:frontend /app/.next/static ./.next/static

CMD ["npm", "run", "start"]
