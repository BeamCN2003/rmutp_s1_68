# Prisma

## Required
- Git
- Docker & Docker Compose
- PostgreSQL
- Node.Js
- Prisma




## Running
### Database
```
docker compose up -d
```
### Schema
```
npx prisma init --datasource-provider postgresql
npx prisma studio
```

## Develop
```bash
npx prisma generate
```