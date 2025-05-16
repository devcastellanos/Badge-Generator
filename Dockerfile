FROM node:20-alpine

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Establecer directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias (incluye backend/package.json)
COPY package.json pnpm-lock.yaml ./
COPY backend/package.json backend/

# Instalar dependencias de todo el proyecto (incluye backend vía postinstall)
RUN pnpm install

# Copiar todo el proyecto
COPY . .

# Exponer puertos: frontend (3030), backend (3031)
EXPOSE 3030
EXPOSE 3031

# Ejecutar el servidor
CMD ["pnpm", "start"]
