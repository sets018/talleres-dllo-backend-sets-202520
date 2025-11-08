# Backend Talleres

Este proyecto contiene una API REST que implementa las funciones de los talleres 1, 2 y 3.

## Instalación

```bash
# Entrar a la carpeta del backend
cd backend-api

# Instalar dependencias
npm install

# Iniciar el servidor en modo desarrollo
npm run dev
```

## Estructura del Proyecto

- `/src`: Código fuente
  - `/controllers`: Controladores para cada taller
  - `/routes`: Rutas de la API
  - `/services`: Servicios que implementan la lógica de negocio

## Endpoints

Todos los endpoints son de tipo POST y reciben los parámetros en el body del request.

### Taller 01
- `/api/taller01/convertidor-temp`
- `/api/taller01/resolvedor`
- `/api/taller01/mejor-paridad`
- `/api/taller01/peor-paridad`

### Taller 02
- `/api/taller02/find-max`
- `/api/taller02/find-min`
- `/api/taller02/includes`
- `/api/taller02/sum`
- `/api/taller02/missing-numbers`

### Taller 03
- `/api/taller03/desglosar-string`
- `/api/taller03/two-sum`
- `/api/taller03/conversion-romana`
- `/api/taller03/descomposicion`

## ⚠️ Importante
Para ejecutar el proyecto, asegúrate de estar en la carpeta `backend-api` antes de ejecutar los comandos de npm.
