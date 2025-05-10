# Finance Manager - Sistema de Rateio Financeiro por Obra

* O Finance Manager é uma plataforma desenvolvida para a Fortal, uma empresa de engenharia ambiental, com a proposata de sofisticar o sistema de rateio financeiro em vigor. Atualmente esse processo é feito a partir de planilhas do Excel, o que resulta em limitações na análise dos custos da empresa. A Fortal trabalha com uma grande variedade de contratos públicos e privados no setor de engenharia e serviços ambientais, por isso, cada contrato de serviço possui um rateio finnaceiro individual, e caso seja necessário, o rateio é subdividido pelas regiões de atuação de um mesmo contrato. O motivo dessa divisão é para que o controle financeiro seja mais nichado e eficiente. Tendo em vista a diversidade regional e o volume de serviços executados simultaneamete, se fez essencial o desenvolvimento de uma plataforma organizada e visualmente clara, que sirva como uma ferramenta de  apaio para melhorar a tomada de decisões por parte do diretor da empresa. A plataforma receberá um banco de dados que foi modelado a partir de uma análise das planilhas contábeis da Fortal. A partir disso, o sistema organizará os gastos das obras em diferentes categorias (ex: mão de obra, aluguel de equipamentos, despesas da equipe, insumos, etc.) e essas categorias serão divididas em subcategorias que se relacionam com cada uma delas. Essa categorização fará com que o sistema financeiro seja ainda mais detalhado e completo. A solução também contempalrá a porcentagem que cada tipo de gasto representa dentro de uma obra ou serviço, que poderá ser vizualizada por meio de gráficos, de modo a tornar a experiência mais visual. Além disso, o Finance Manager devará calcular e apresentar o BDI (índice que representa a relação entre faturamento e gastos), que é um dado essencial para o estudo da rentabilidade dos centros de custo. Por fim, para que o faturamento dos contratos seja calculado, o usuário deverá adicionar ou remover as notas fiscais que forem emitidas pelos clientes da empresa.  *

## Tecnologias Utilizadas

- Node.js + Express.js (Backend)
- EJS (Template Engine)
- PostgreSQL (Banco de Dados)
- HTML + CSS + JS (Frontend)

## 📁 Estrutura de Pastas

```
finance-manager/
│
├── assets/              # Imagens e recursos não estruturados
├── controllers/         # Lógica das rotas e manipulação de requisições
├── documentos/          # Documentação do projeto
├── views/               # Camada de visualização do projeto 
├── scripts/             # Camada de scripts do projeto
├── models/              # Modelos de dados utilizados pelo sistema
├── routes/              # Definição das rotas da aplicação
├── services/            # Camada de regras de negócio
├── tests/               # Camada de testes do projeto
├── config/              # Configurações do projeto
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
├── README.md            # Documentação do projeto (este arquivo)
└── server.js            # Ponto de entrada da aplicação
```

##  Como Executar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/danilocneto/Finance_Manager
cd finance-manager
```

### 2. Entre na pasta do projeto

```bash
cd finance-manager
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados 
- Crie um banco PostgreSQL localmente.
- No arquivo `.env`, defina as variáveis:

```env
DB_NAME=finance_manager
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```


### 5. Sincronize os modelos com o banco

```bash
npm run db:sync
```
### 6.Execute o projeto
```bash
npm start
```
### 6.Acesse a aplicação no navegador 
Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

##  Funcionalidades Principais

- Cadastro e visualização de obras
- Adição e exclusão de notas fiscais
- Visualização gráfica de categorias de gasto
- Cálculo automático de BDI
- Dashboard financeiro centralizado

##  Desenvolvido por

**Danilo de Castro Neto**  
Projeto Individual – Módulo 2 – Inteli

---
