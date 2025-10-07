# 📋 Quadro de Tarefas - React & Node.js

Este projeto é uma aplicação de gerenciamento de tarefas estilo Kanban, construída com React para o frontend e Node.js/Express para o backend.

## 🎯 Funcionalidades

  - **Adicionar Tarefas:** Crie novas tarefas com um título e um nível de prioridade (Urgente, Importante, Baixa Prioridade).
  - **Visualização em Colunas:** As tarefas são organizadas automaticamente em três colunas com base na sua prioridade, facilitando a visualização do que é mais importante.
  - **Remover Tarefas:** Exclua tarefas que já foram concluídas.
  - **Persistência de Dados:** Todas as tarefas são salvas e gerenciadas por uma API backend, então seus dados não se perdem ao recarregar a página.

## 🛠️ Tecnologias Utilizadas

#### **Frontend**

  - **React:** Biblioteca para a construção da interface de usuário.
  - **Vite:** Ferramenta de build para um desenvolvimento rápido.
  - **Tailwind CSS:** Framework CSS para estilização ágil e customizável.

#### **Backend**

  - **Node.js:** Ambiente de execução para o JavaScript no servidor.
  - **Express:** Framework para a construção da API REST.
  - **Banco de Dados (Simulado):** Os dados são persistidos em um arquivo `db.json`.

## 🚀 Como Executar Localmente

Siga os passos abaixo para rodar a aplicação completa na sua máquina.

#### **1. Pré-requisitos**

  - É necessário ter o [Node.js](https://nodejs.org/) (versão 16 ou superior) instalado.

#### **2. Clone o Repositório**

```sh
git clone https://github.com/GrosskLeo/cp4web.git
cd cp4web
```

#### **3. Configurar e Rodar o Backend**

O servidor da API precisa estar rodando para que o frontend funcione.

```sh
# Navegue até a pasta do backend
cd backend

# Instale as dependências do servidor
npm install

# Inicie o servidor do backend
npm start
```

> 💻 O terminal irá exibir: `Servidor da API rodando em http://localhost:5000`. Deixe este terminal aberto.

#### **4. Configurar e Rodar o Frontend**

Abra um **novo terminal** e execute os seguintes comandos.

```sh
# A partir da pasta raiz (cp4web), navegue até a pasta do frontend
cd frontend

# Instale as dependências do cliente
npm install

# Execute o projeto em ambiente de desenvolvimento
npm run dev
```

> 🌐 Abra seu navegador e acesse [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173/) (ou o endereço que aparecer no seu terminal) para ver a aplicação funcionando.

## 📝 Endpoints da API

A API do backend fornece os seguintes endpoints:

  - `GET /api/tasks`: Retorna a lista completa de tarefas.
  - `POST /api/tasks`: Cria uma nova tarefa. Requer um corpo JSON: `{ "text": "...", "priority": "..." }`.
  - `DELETE /api/tasks/:id`: Remove uma tarefa específica com base no seu `id`.

## 👥 Equipe

  - Leonardo Grosskopf
  - Thayná Lopes
