# Campuslands CLI Node

Gestor de campers en **Node.js puro** con **ECMAScript Modules (ESM)**. Permite registrar, listar y buscar campers de Campuslands desde la terminal, almacenando la información en un archivo JSON.

## ✨ Características

- **Node.js puro**: sin dependencias externas.
- **ESM (ECMAScript Modules)**: usa `import` / `export`.
- **Persistencia en JSON**: los datos se guardan en `data/campers.json`.
- **CLI**: comandos para agregar, listar y buscar campers.
- **Modo interactivo**: registro guiado paso a paso con `readline/promises`.

## 📋 Requisitos

- [Node.js](https://nodejs.org/) **v18 o superior** (para `node --watch` y `readline/promises`).

## 🚀 Instalación

Clona el repositorio y entra en la carpeta:

```bash
cd campuslands-cli-node
```

No es necesario instalar dependencias.

## 🛠️ Uso

### Comandos disponibles

| Comando   | Descripción                          |
|-----------|--------------------------------------|
| `agregar` | Registra un nuevo camper con nombre y stack |
| `listar`  | Muestra todos los campers registrados |
| `buscar`  | Busca campers por nombre             |

### ➕ Agregar un camper

```bash
node src/index.js agregar "Nombre del Camper" "Stack"
```

Ejemplo:

```bash
node src/index.js agregar "María" "JavaScript"
```

### 📄 Listar campers

```bash
node src/index.js listar
```

### 🔍 Buscar un camper por nombre

```bash
node src/index.js buscar "María"
```

### 💬 Modo interactivo

Registro guiado con preguntas en la terminal:

```bash
node src/interactivo.js
```

## 📦 Scripts npm

```bash
npm start   # Ejecuta el CLI (node src/index.js)
npm run dev # Ejecuta con recarga automática (node --watch src/index.js)
```

## 📁 Estructura del proyecto

```
campuslands-cli-node/
├── data/
│   └── campers.json        # Base de datos (JSON)
├── src/
│   ├── campers.js          # Lógica de lectura/escritura y operaciones
│   ├── index.js            # CLI principal (agregar, listar, buscar)
│   └── interactivo.js      # Registro interactivo con readline
├── .gitignore
└── package.json
```

## 🗃️ Formato de datos

Cada camper se almacena con la siguiente estructura en `data/campers.json`:

```json
{
  "id": 1,
  "nombre": "Juan",
  "stack": "Node",
  "creadoEn": "21/9/2026"
}
```

## 🧩 API del módulo `src/campers.js`

| Función                  | Descripción                                        |
|--------------------------|----------------------------------------------------|
| `leerCampers()`          | Lee y devuelve la lista de campers desde el JSON.  |
| `guardarCampers(lista)`  | Sobrescribe el JSON con la lista proporcionada.    |
| `agregarCamper(nombre, stack)` | Agrega un nuevo camper y lo persiste en el JSON. |
| `listarCampers()`        | Devuelve todos los campers registrados.            |
| `buscarCamperPorNombre(termino)` | Busca campers cuyo nombre contenga el término. |

## 📄 Licencia

ISC
