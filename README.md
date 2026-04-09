# 📝 CRUD de Usuários - Spring Boot + React + Docker Compose

Projeto de exemplo de **CRUD de usuários** utilizando:  

- **Backend:** Spring Boot + PostgreSQL  
- **Frontend:** React  
- **Orquestração:** Docker Compose  

---

## 📂 Estrutura do projeto

```
crud-usuarios/
│
├── backend/          # API Spring Boot
├── frontend/         # Aplicação React
└── docker-compose.yml
```

---

## ⚡ Pré-requisitos

- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)  
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)  
- [Node.js 18+](https://nodejs.org/en/download/) (caso queira rodar frontend local sem Docker)  

---

## 🐳 Rodando com Docker Compose

No terminal, na raiz do projeto:

```bash
docker-compose up --build
```

Isso irá subir:

- PostgreSQL na porta **5433**  
- Backend Spring Boot na porta **8080**  
- Frontend React na porta **3000**  

Acesse a aplicação React em:

http://localhost:3000

---

## ⚙️ Backend

### 📌 Endpoints principais

| Método | URL                | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /usuarios        | Lista todos os usuários    |
| POST   | /usuarios        | Cria um usuário            |
| GET    | /usuarios/{id}   | Busca usuário por ID       |
| PUT    | /usuarios/{id}   | Atualiza usuário           |
| DELETE | /usuarios/{id}   | Deleta usuário             |

### 📝 Configurações

O Spring Boot utiliza application.properties com:

```properties
spring.datasource.url=jdbc:postgresql://postgres:5432/crud_usuario
spring.datasource.username=crud_user
spring.datasource.password=123456

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> **Obs:** postgres refere-se ao nome do serviço no Docker Compose.

---

## 🖥️ Frontend

- Criado com **React** (Create React App)  
- Consome a API via **Axios**  
- Funcionalidades:

  - Listar usuários  
  - Criar usuário  
  - Editar usuário  
  - Excluir usuário  

---

## 🐘 Banco de dados

- **PostgreSQL**  
- Banco: crud_usuario  
- Usuário: crud_user / senha: 123456  

### Script de criação da tabela usuario

```sql
CREATE TABLE usuario (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE
);
```

---

## 🔧 Melhorias futuras

- Autenticação JWT  
- UI com Material UI ou Bootstrap  
- Validações e mensagens de erro no frontend  
- Paginação e filtros  
- Versionamento de banco com Flyway ou Liquibase  
- Docker Compose para ambientes de produção  

---

## 📝 Autor

**Luiz Fernando**
