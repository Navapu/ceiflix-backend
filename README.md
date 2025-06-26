# 🎬 CEIFLiX - Backend API

CEIFLiX es una aplicación web que permite a los usuarios descubrir películas populares y llevar un registro personalizado de las películas que han visto con sus valoraciones.  
Este repositorio contiene la parte del **servidor (backend)** desarrollada con **Node.js**, **Express** y **MongoDB**.

---

## 🇪🇸 Documentación en Español

### 🚀 Tecnologías Utilizadas

- Node.js  
- Express  
- MongoDB (Atlas)  
- Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt  
- API de TheMovieDB (TMDB)

---

### 📁 Estructura del Proyecto

```
ceiflix-backend/
├── config/
│   └── config.js
├── controllers/
│   ├── movies.controller.js
│   └── users.controller.js
├── db/
│   ├── mongoose.js
│   └── models/
│       ├── index.js
│       └── user.model.js
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
├── routes/
│   ├── movies.routes.js
│   └── users.routes.js
├── .env.example
├── .gitattributes
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── TESTER.REST
```

---

### 🔐 Configuración del Entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con lo siguiente:

```env
TOKEN_API_TMDB = "YOUR_TMDB_TOKEN_HERE"
DB_USER = "user"
DB_PASS = "1234"
CLUSTER = "cluster.mongodb.net"
DATABASE = "database"
JWT_SECRET = "secret-key"
```

También se incluye un archivo `.env.example` como referencia.

---

### 🧪 Endpoints Disponibles

**Formato estándar de respuesta:**

```json
{
  "msg": "Mensaje",
  "data": [],
  "status": "ok" | "error"
}
```

#### 🔐 Autenticación de Usuario

| Método | Ruta             | Descripción                          | Autenticación |
|--------|------------------|--------------------------------------|----------------|
| POST   | `/user/register` | Registrar un nuevo usuario           | ❌              |
| POST   | `/user/login`    | Iniciar sesión y obtener token JWT   | ❌              |
| GET    | `/user/me`       | Obtener datos del usuario actual     | ✅              |

---

#### 🎞️ Películas (Catálogo)

| Método | Ruta              | Descripción                                 | Autenticación |
|--------|-------------------|---------------------------------------------|---------------|
| GET    | `/movies`         | Obtener películas en cartelera desde TMDB   | ❌            |
| GET    | `/movies/:id`     | Obtener detalles de una película por ID     | ❌            |

*Soporta paginación con `?page=2`*

---

#### ✅ Películas Vistas

| Método | Ruta              | Descripción                                 | Autenticación |
|--------|-------------------|---------------------------------------------|---------------|
| POST   | `/movies`         | Marcar una película como vista              | ✅            |
| GET    | `/movies/me`      | Obtener películas vistas por el usuario     | ✅            |

---

### 🛠️ Scripts útiles

```bash
npm install     # Instala dependencias
npm run dev     # Ejecuta servidor en modo desarrollo
```

---

## 🌍 English Version

### 🚀 Technologies Used

- Node.js  
- Express  
- MongoDB (Atlas)  
- Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt  
- TheMovieDB (TMDB) API

---

### 📁 Project Structure

```
ceiflix-backend/
├── config/
│   └── config.js
├── controllers/
│   ├── movies.controller.js
│   └── users.controller.js
├── db/
│   ├── mongoose.js
│   └── models/
│       ├── index.js
│       └── user.model.js
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
├── routes/
│   ├── movies.routes.js
│   └── users.routes.js
├── .env.example
├── .gitattributes
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── TESTER.REST
```

---

### 🔐 Environment Configuration (.env)

Create a `.env` file in the root directory with the following:

```env
TOKEN_API_TMDB = "YOUR_TMDB_TOKEN_HERE"
DB_USER = "user"
DB_PASS = "1234"
CLUSTER = "cluster.mongodb.net"
DATABASE = "database"
JWT_SECRET = "secret-key"
```

---

### 🧪 Available Endpoints

**Standard response format:**

```json
{
  "msg": "Message",
  "data": [],
  "status": "ok" | "error"
}
```

#### 🔐 User Authentication

| Method | Route           | Description                        | Auth Required |
|--------|------------------|-------------------------------------|----------------|
| POST   | `/user/register` | Register a new user                 | ❌              |
| POST   | `/user/login`    | Login and get JWT token             | ❌              |
| GET    | `/user/me`       | Get current user data               | ✅              |

---

#### 🎞️ Movies (Catalog)

| Method | Route             | Description                                | Auth Required |
|--------|-------------------|--------------------------------------------|----------------|
| GET    | `/movies`         | Get now playing movies from TMDB           | ❌              |
| GET    | `/movies/:id`     | Get detailed info about a movie by TMDB ID | ❌              |

*Supports pagination via `?page=2`*

---

#### ✅ Watched Movies

| Method | Route             | Description                                | Auth Required |
|--------|-------------------|--------------------------------------------|---------------|
| POST   | `/movies`         | Mark a movie as watched by the user        | ✅            |
| GET    | `/movies/me`      | Retrieve user's watched movie list         | ✅            |

---

### 🛠️ Useful Scripts

```bash
npm install     # Install dependencies
npm run dev     # Run server in development mode
```

---
