# 📋 Gerenciador de Tarefas

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)  
![License](https://img.shields.io/badge/License-MIT-green)

Aplicação em **React.js** para gerenciar tarefas do dia a dia.  
Permite adicionar, concluir e filtrar tarefas (Todas, Concluídas e Pendentes).  
O estado é gerenciado globalmente com **Context API + useReducer**.

---

## 🚀 Tecnologias
- [React.js](https://react.dev/)
- Context API
- useReducer
- CSS puro

---

## ⚙️ Funcionalidades
- ➕ Adicionar tarefas  
- ✅ Marcar tarefas como concluídas  
- 🔍 Filtrar tarefas:
  - Todas
  - Concluídas
  - Pendentes  
- Estado global via Context API  

---

## 📂 Estrutura do projeto
src/
├── App.js
├── index.js
├── index.css
├── context/
│ └── TarefasContext.js
├── components/
│ ├── ListaDeTarefas.js
│ └── Tarefa.js


---

## ▶️ Como executar

```bash
# 1. Clonar o repositório
git clone https://github.com/frsabreubh/gerenciador-tarefas.git

# 2. Entrar na pasta
cd gerenciador-tarefas

# 3. Instalar dependências
npm install
# ou
yarn install

# 4. Rodar em desenvolvimento
npm start
# ou
yarn start

Acesse: 👉 http://localhost:3000

🎨 Preview
Lista de tarefas
Input para adicionar novas tarefas
Filtros: Todas, Concluídas ou Pendentes

📜 Licença

Este projeto é open-source e pode ser usado livremente.


---

### 2️⃣ Gerar o arquivo ZIP

Se você estiver no Linux, macOS ou Windows com Git Bash, crie um arquivo chamado `zip_readme.sh` com este conteúdo:

```bash
#!/bin/bash

# Cria um zip contendo apenas o README.md
zip gerenciador-tarefas-readme.zip README.md

echo "Arquivo gerado: gerenciador-tarefas-readme.zip"

Depois rode:
bash zip_readme.sh

Isso vai gerar o arquivo gerenciador-tarefas-readme.zip, que você pode descompactar direto na raiz do projeto.