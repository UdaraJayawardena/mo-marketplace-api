# MO Marketplace API

Backend service for the MO Marketplace application built using NestJS, TypeORM, and PostgreSQL. Provides APIs for authentication, product management, and variant handling.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected endpoints

### 📦 Product Management
- Create products
- Fetch all products
- Fetch product by ID

### 🎨 Variant Management
- Add variants with dynamic attributes
- Generate unique `combination_key`
- Prevent duplicate variant combinations
- Associate variants with products

### ⚠️ Validation & Edge Cases
- Duplicate variant prevention
- Proper error responses

---

## 📁 Project Structure

```
src/
├── auth/         # Authentication module
├── products/     # Product APIs
├── variants/     # Variant logic
├── common/       # Guards, pipes, filters
├── config/       # DB & JWT configuration
└── main.ts
```

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Node.js v20+
- npm v9+
- PostgreSQL 15+

### 🖥️ Installation

```bash
git clone <repo-url>
cd mo-marketplace-api
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password_here
DB_NAME=mo_marketplace
JWT_SECRET=your_jwt_secret_here
```

### ▶️ Run Server

```bash
npm run start:dev
```

Server runs at: `http://localhost:3000`

Swagger docs: `http://localhost:3000/api`

---

## 🧪 API Endpoints

### 🔐 Auth
```
POST /auth/register
POST /auth/login
```

### 📦 Products
```
POST   /products
GET    /products
GET    /products/:id
```

### 🎨 Variants
```
POST /products/:id/variants
```

---

## 🧠 Key Design Decisions

### 1. Variant Attributes
Variants use flexible attribute objects:

```json
{
  "attributes": {
    "color": "red",
    "size": "M"
  }
}
```

### 2. Combination Key
Generated from sorted attributes:
```
red-M-cotton
```
Used to enforce uniqueness across variants.

### 3. Validation Strategy
- Backend enforces all critical validation
- Prevents invalid and duplicate data

---

## 📌 Assumptions

- Authentication is simplified (no refresh tokens)
- No order/payment system (mock project)
- Variant attributes are dynamic

---

## 👨‍💻 Author

**Udara Jayawardena**