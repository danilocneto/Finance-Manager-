# Web Application Document - Projeto Individual - Módulo 2 - Inteli


## Finance Manager 

#### Danilo de Castro Neto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução 

* O Finance Manager é uma plataforma desenvolvida para a Fortal, uma empresa de engenharia ambiental, com a proposata de sofisticar o sistema de rateio financeiro em vigor. Atualmente esse processo é feito a partir de planilhas do Excel, o que resulta em limitações na análise dos custos da empresa. A Fortal trabalha com uma grande variedade de contratos públicos e privados no setor de engenharia e serviços ambientais, por isso, cada contrato de serviço possui um rateio finnaceiro individual, e caso seja necessário, o rateio é subdividido pelas regiões de atuação de um mesmo contrato. O motivo dessa divisão é para que o controle financeiro seja mais nichado e eficiente. Tendo em vista a diversidade regional e o volume de serviços executados simultaneamete, se fez essencial o desenvolvimento de uma plataforma organizada e visualmente clara, que sirva como uma ferramenta de  apaio para melhorar a tomada de decisões por parte do diretor da empresa. A plataforma receberá um banco de dados que foi modelado a partir de uma análise das planilhas contábeis da Fortal. A partir disso, o sistema organizará os gastos das obras em diferentes categorias (ex: mão de obra, aluguel de equipamentos, despesas da equipe, insumos, etc.) e essas categorias serão divididas em subcategorias que se relacionam com cada uma delas. Essa categorização fará com que o sistema financeiro seja ainda mais detalhado e completo. A solução também contempalrá a porcentagem que cada tipo de gasto representa dentro de uma obra ou serviço, que poderá ser vizualizada por meio de gráficos, de modo a tornar a experiência mais visual. Além disso, o Finance Manager devará calcular e apresentar o BDI (índice que representa a relação entre faturamento e gastos), que é um dado essencial para o estudo da rentabilidade dos centros de custo. Por fim, para que o faturamento dos contratos seja calculado, o usuário deverá adicionar ou remover as notas fiscais que forem emitidas pelos clientes da empresa.  *
 
---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas 

<div align="center">
    <strong style="font-size: 18px;"><sub></sub></strong><br>
<img src="../assets /personaMarco.png" width="90%"
    alt="Persona Marco"><br>
  </div>

### 2.2. User Stories 

##### US1 
* "Como administrador da empresa, posso acessar qual porcentagem uma categoria de gastos está representando no balanço comercial de alguma obra em andamento." 
* A US1 atende ao critério INVEST porque descreve uma funcionalidade que é independente, podendo ser desenvolvida sem depender diretamente de outras. Ela é negociável, permitindo que ajustes sejam feitos na forma como os dados são apresentados. Ela traz um valor claro para o administrador, pois facilita o acompanhamento financeiro das obras. É estimável, já que o esforço necessário para sua implementação podem ser calculado com base nos requisitos apresentados. É  pequena o suficiente para ser entregue em um prazo relativamente curto e é testável pois é possível analisar se o administrador consegue acessar corretamente a porcentagem dos gastos por categoria.
##### US2 
* "Como administrador da empresa, devo ser capaz de adicionar os ganhos por notas ficais referente aquele centro de custo." 
* A US2 atende ao critério INVEST porque descreve uma tarefa que é independente, permitindo que a adição de ganhos por notas fiscais ocorra sem depender de outras partes da plataforma. Ela é negociável, já que mudanças podem ser ajustadas conforme necessário. Além disso, é valiosa, pois adiciona um dado importante para os cálculos financeiro. É estimável, pois é possível calcular o esforço necessário para implementar esse recurso. A user story é pequena, focando apenas na ação de adicionar ganhos, e também é testável, já que podemos validar se as notas fiscais estão sendo corretamente associadas aos centros de custo.
##### US3 
* "Como administrador da empresa, devo ser capaz de analisar a rentabilidade da obra a partir do índice de BDI que será calculado dentro da aplicação." 
* A US3 atende em grande parte ao critério INVEST, pois descreve uma funcionalidade que traz um valor claro para o administrador, focando na análise da rentabilidade da obra através do índice de BDI. Mesmo que dependa de outras funcionalidades para obter os dados necessários ao cálculo do BDI(no caso o valor total gasto), ela ainda é negociável, permitindo ajustes na forma como o cálculo e a apresentação são feitos. Também é bastante valiosa já oferece uma informação financeira de altíssimo grau de importância. é estimável, já que o esforço para implementação pode ser calculado levando em conta as integrações necessárias. Por fim é pequena, com um escopo focado na análise de um único índice que precisa de poucas informações, e é testável, podendo ser validada ao comparar o cálculo automático com exemplos reais no histórico da empresa.

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)


##### Visão maximalista do diagrama do BD

```mermaid
erDiagram
    obra ||--o{ salario : "1:N"
    obra ||--o{ despesa_equipe : "1:N"
    obra ||--o{ maquinario_equipamento : "1:N"
    obra ||--o{ veiculo : "1:N"
    obra ||--o{ diverso : "1:N"
    obra ||--o{ nota_fiscal : "0..1:1"
```

##### Entidades e Relacionamentos:

##### Obra 
Representam 
- nome
- total_despesa
- total_faturamento

**Relacionamentos:**
- Cada obra está relacionada com cada uma das 5 categorias de gastos (salario, veiculos, maquinario, despesa_equipe, diversos) e com a tabela de lançamento de notas fiscais (nota_fiscal)

---

#### salario (`salario`)
Representam os principais gastos com salário da empresa:
- descricao
- valor
- id_obra

**Relacionamentos:**
- Cada salário pertence a uma única obra.

---

#### despesa_equipe (`despesa_equipe`)
Guardam informações sobre despesas de custo da equipe:
- descricao
- valor
- id_obra

**Relacionamentos:**
- Cada despesa da equipe pertence a uma obra.

---

#### maquinario_equipamento (`maquinario_equipamento`)
Guardam informações sobre gastos com máquinas e equipamentos :
- descricao
- valor
- id_obra

**Relacionamentos:**
- Cada gasto com maquinário pertence a uma obra.

---

#### veiculos (`veiculos`)
Representam gastos com os veiculos da frota da empresa:
- descricao
- valor
- id_obra

**Relacionamentos:**
- Cada gasto com veículo pertence a uma única obra.

---

#### diverso (`diverso`)
Representa gastos adicionais que não se encaixam dentro das demais categorias:
- descricao
- valor
- id_obra
**Relacionamentos:**
- Cada gasto diverso está relacionado com uma única obra.

---

#### diverso (`diverso`)
Representa as notas fiscais que compõe o faturamento de uma obra da empresa:
- numero
- valor_bruto
- valor_liquido
- data_emissao
- id_obra

**Relacionamentos:**
- Cada nota fiscal está relacionada com uma única obra.

<div align="center">
  <sub>Diagrama do banco de dados completo:</sub><br>
  <img src="../assets /modelo_banco.png" width="100%" alt="modelo"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>

#### Modelo físico com o Schema do BD
📥 [Schema SQL completo](../scripts/migrate.sql)


### 3.1.1 BD e Models 
Abaixo estão descritas as principais tabelas do sistema Finance Manager, seus campos e as operações SQL realizadas por cada Model do projeto. Essas operações representam as funcionalidades básicas de cadastro, consulta, atualização e remoção de registros, refletindo diretamente as ações suportadas pela aplicação no contexto do controle financeiro das obras da Fortal.

---

#### Obras
**id**: inteiro, chave primária;  
**nome**: texto, obrigatório;  
**url_foto**: texto, opcional;

- Criar:  
  `INSERT INTO obra (nome, url_foto) VALUES ($1, $2);`
- Listar:  
  `SELECT * FROM obra;`
- Atualizar:  
  `UPDATE obra SET nome = $1, url_foto = $2 WHERE id = $3;`
- Deletar:  
  `DELETE FROM obra WHERE id = $1;`

---

#### Notas Fiscais
**id**: inteiro, chave primária;  
**numero**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**data_emissao**: data, obrigatório;  
**id_obra**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO nota_fiscal (numero, valor, data_emissao, id_obra) VALUES ($1, $2, $3, $4);`
- Listar:  
  `SELECT * FROM nota_fiscal;`
- Atualizar:  
  `UPDATE nota_fiscal SET numero = $1, valor = $2, date = $3 WHERE id = $4;`
- Deletar:  
  `DELETE FROM nota_fiscal WHERE id = $1;`

---

#### Salário
**id**: inteiro, chave primária;  
**nome**: texto, obrigatório;  
**descricao**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**obra_id**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO salario (nome, descricao, valor, obra_id) VALUES ($1, $2, $3, $4);`
- Atualizar:  
  `UPDATE salario SET nome = $1, descricao = $2, valor = $3 WHERE id = $4;`
- Deletar:  
  `DELETE FROM salario WHERE id = $1;`

---

#### Despesa de Equipe
**id**: inteiro, chave primária;  
**descricao**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**id_obra**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO despesa_equipe (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *;`
- Atualizar:  
  `UPDATE despesa_equipe SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *;`
- Deletar:  
  `DELETE FROM despesa_equipe WHERE id = $1;`

---

#### Maquinário e Equipamentos
**id**: inteiro, chave primária;  
**descricao**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**id_obra**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO maquinario_equipamento (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *;`
- Atualizar:  
  `UPDATE maquinario_equipamento SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *;`
- Deletar:  
  `DELETE FROM maquinario_equipamento WHERE id = $1;`

---

#### Veículos
**id**: inteiro, chave primária;  
**descricao**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**id_obra**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO veiculos (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *;`
- Atualizar:  
  `UPDATE veiculos SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *;`
- Deletar:  
  `DELETE FROM veiculos WHERE id = $1;`

---

#### Diversos
**id**: inteiro, chave primária;  
**descricao**: texto, obrigatório;  
**valor**: numérico, obrigatório;  
**id_obra**: inteiro, chave estrangeira para obra, obrigatório;

- Criar:  
  `INSERT INTO diverso (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *;`
- Atualizar:  
  `UPDATE diverso SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *;`
- Deletar:  
  `DELETE FROM diverso WHERE id = $1;`
  
### 3.2. Arquitetura 

Um diagrama de arquitetura mostra como cada peça (models, controllers, banco de dados) se encaixa e se comunica. Ele ajuda a equipe a visualizar o fluxo de dados e garantir que tudo funcione harmoniosamente, desde a requisição do usuário até a resposta final.

<div align="center">
  <sub>Arquitetura:</sub><br>
  <img src="../assets /esquemaMVC.jpg" width="100%" alt="modelo"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>
Dessa forma, com o diagrama em mãos, fica claro como o MVC organiza seu projeto: os controllers gerenciam a lógica, o banco armazena os dados e as rotas direcionam cada ação. Essa visualização não só simplifica o desenvolvimento, mas também facilita futuras melhorias e manutenção!


### 3.3. Wireframes 

####  Home
(apoia o cumprimento das US1, US2 e US3): Esta tela inicial exibe uma imagem destacada e uma galeria de obras registradas no sistema, funcionando como um ponto de entrada para as funcionalidades principais. Ao selecionar uma obra, o usuário é direcionado à visualização individual com acesso detalhado aos dados financeiros, o que viabiliza a navegação necessária para as análises de gasto, faturamento e BDI previstas nas user stories.
<div align="center">
  <sub>Tela inicial:</sub><br>
  <img src="../assets /home.jpg" width="100%" alt="Tela inicial"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>

####  Obra
(atende às US1, US2 e US3): Esta tela apresenta os dados específicos de uma obra individual, incluindo imagem, valor total de gastos, faturamento e BDI, além de listar os gastos por categoria com descrição, valor, percentual e gráfico. Com isso, ela viabiliza a visualização da proporção de gastos por categoria (US1), considera os ganhos informados por notas fiscais (US2) e exibe o cálculo do BDI, permitindo a análise da rentabilidade da obra (US3).
<div align="center">
  <sub>Tela de rateio da obra:</sub><br>
  <img src="../assets /obras.jpg" width="100%" alt="Tela de obra"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>

####  Notas fiscais
(atende à US2): Esta tela permite ao administrador adicionar e remover notas fiscais associadas a centros de custo, listando todas as informações relevantes em formato de tabela. O botão "Adicionar" possibilita registrar novos ganhos, sendo essencial para o cálculo do faturamento da obra, conforme solicitado pela user story sobre controle de notas fiscais (US2).
<div align="center">
  <sub>Tela de notas fiscais:</sub><br>
  <img src="../assets /notas_fiscais.jpg" width="100%" alt="Tela notas fiscais"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>

####  Dashboard
(atende às US1, US2 e US3): Esta tela apresenta uma visão consolidada do desempenho financeiro da empresa, exibindo os valores de gasto total, faturamento total e BDI total, acompanhados por gráficos que representam visualmente a composição desses dados por categoria. Ela permite ao administrador visualizar a porcentagem que cada tipo de gasto representa no balanço da obra (US1), considerar os ganhos provenientes das notas fiscais (US2) e analisar a rentabilidade da operação por meio do índice de BDI (US3).
<div align="center">
  <sub>Tela de dashboard:</sub><br>
  <img src="../assets /dashboard.jpg" width="100%" alt="Tela dashboard"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>


### 3.4. Guia de estilos (Semana 05)

Um guia de estilos é um documento que define padrões visuais e comportamentais para a interface de um sistema. Ele reúne elementos como paleta de cores, tipografia, espaçamento, ícones, botões e demais componentes gráficos, garantindo que o design mantenha coerência e identidade visual em todas as telas. Serve como uma referência para desenvolvedores e designers, promovendo consistência e facilitando futuras manutenções e expansões do projeto.

<div align="center">
  <sub>Guia de estilos:</sub><br>
  <img src="../assets /guia.png" width="100%" alt="Layout:"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>


### 3.5. Protótipo de alta fidelidade (Semana 05)

Um protótipo de alta fidelidade é uma representação visual detalhada do sistema final, com aparência, interações e funcionalidades próximas da versão real. Diferente dos esboços iniciais, ele inclui elementos gráficos precisos, navegação realista e simula com fidelidade como o usuário final vai interagir com o sistema. 

#### Tela de gestão de obras
A tela de Obras é o núcleo operacional do Finance Manager. Nela, o usuário visualiza de forma centralizada todas as obras cadastradas, com informações essenciais como nome, imagem e um botão de acesso rápido para análise detalhada de cada obra. O layout prioriza a visualização clara e a navegação intuitiva, permitindo que o gestor acesse rapidamente os dados financeiros segmentados por contrato e região.

<div align="center">
  <sub>Tela de controle das obras (principal):</sub><br>
  <img src="../assets /prototipo.jpg" width="100%" alt="Tela de controle das obras:"><br>
  <sup>Fonte: Desenvolvido por Danilo de Castro</sup>
</div>

### 3.6. WebAPI e endpoints 

#### Obras

| Método | Endpoint        | Descrição                       | Parâmetros / Corpo                                                                  |
| ------ | --------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| GET    | `/obra`         | Listar todas as obras           | -                                                                                   |
| GET    | `/obra/:id`     | Buscar obra pelo ID             | Parâmetro URL: `id`                                                                 |
| POST   | `/obra`         | Criar nova obra                 | Corpo JSON: `{ nome, url_foto }`                                                    |
| PUT    | `/obra/:id`     | Atualizar dados da obra         | Parâmetro URL: `id` <br> Corpo JSON: `{ nome, url_foto }`                           |
| DELETE | `/obra/:id`     | Deletar obra pelo ID            | Parâmetro URL: `id`                                                                 |

---

#### Notas Fiscais

| Método | Endpoint            | Descrição                        | Parâmetros / Corpo                                                                   |
| ------ | ------------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| GET    | `/nota`             | Listar todas as notas fiscais    | -                                                                                    |
| POST   | `/nota/add`         | Criar nova nota fiscal           | Corpo form: `{ numero, valor, data_emissao, id_obra }`                               |
| POST   | `/nota/edit/:id`    | Atualizar nota fiscal existente  | Parâmetro URL: `id` <br> Corpo form: `{ numero, valor, data_emissao }`               |
| POST   | `/nota/delete/:id`  | Deletar nota fiscal pelo ID      | Parâmetro URL: `id`                                                                  |

---

#### Salário

| Método | Endpoint        | Descrição                       | Parâmetros / Corpo                                                                  |
| ------ | --------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| POST   | `/salario`      | Criar novo salário              | Corpo JSON: `{ nome, descricao, valor, obra_id }`                                   |
| PUT    | `/salario/:id`  | Atualizar dados do salário      | Parâmetro URL: `id` <br> Corpo JSON: `{ nome, descricao, valor }`                   |
| DELETE | `/salario/:id`  | Deletar salário pelo ID         | Parâmetro URL: `id`                                                                 |

---

#### Despesa de Equipe

| Método | Endpoint              | Descrição                       | Parâmetros / Corpo                                                                  |
| ------ | --------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| POST   | `/despesa_equipe`     | Criar nova despesa de equipe     | Corpo JSON: `{ descricao, valor, id_obra }`                                         |
| PUT    | `/despesa_equipe/:id` | Atualizar despesa de equipe      | Parâmetro URL: `id` <br> Corpo JSON: `{ descricao, valor }`                         |
| DELETE | `/despesa_equipe/:id` | Deletar despesa de equipe pelo ID| Parâmetro URL: `id`                                                                 |

---

#### Maquinário e Equipamentos

| Método | Endpoint                    | Descrição                               | Parâmetros / Corpo                                                                  |
| ------ | --------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------- |
| POST   | `/maquinario_equipamento`   | Criar novo maquinário/equipamento       | Corpo JSON: `{ descricao, valor, id_obra }`                                         |
| PUT    | `/maquinario_equipamento/:id`| Atualizar maquinário/equipamento        | Parâmetro URL: `id` <br> Corpo JSON: `{ descricao, valor }`                         |
| DELETE | `/maquinario_equipamento/:id`| Deletar maquinário/equipamento pelo ID  | Parâmetro URL: `id`                                                                 |

---

#### Veículos

| Método | Endpoint            | Descrição                       | Parâmetros / Corpo                                                                  |
| ------ | ------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| POST   | `/veiculos`         | Criar novo veículo              | Corpo JSON: `{ descricao, valor, id_obra }`                                         |
| PUT    | `/veiculos/:id`     | Atualizar dados do veículo      | Parâmetro URL: `id` <br> Corpo JSON: `{ descricao, valor }`                         |
| DELETE | `/veiculos/:id`     | Deletar veículo pelo ID         | Parâmetro URL: `id`                                                                 |

---

#### Diversos

| Método | Endpoint        | Descrição                       | Parâmetros / Corpo                                                                  |
| ------ | --------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| POST   | `/diverso`      | Criar novo gasto diverso        | Corpo JSON: `{ descricao, valor, id_obra }`                                         |
| PUT    | `/diverso/:id`  | Atualizar gasto diverso         | Parâmetro URL: `id` <br> Corpo JSON: `{ descricao, valor }`                         |
| DELETE | `/diverso/:id`  | Deletar gasto diverso pelo ID   | Parâmetro URL: `id`                                                                 |

 

### 3.7 Interface e Navegação (Semana 07)

A seguir, são apresentadas as principais telas do sistema Finance Manager, ilustrando a navegação e as funcionalidades implementadas no frontend:

#### Tela Home
Esta é a tela inicial do sistema, onde o usuário visualiza todas as obras cadastradas em formato de cards. Cada card exibe o nome da obra, uma imagem ilustrativa e um botão para acessar os detalhes financeiros daquela obra. A navegação parte sempre desta tela, facilitando o acesso rápido a qualquer centro de custo.
<div align="center">
  <img src="../assets /telaHome.png" width="80%" alt="Tela Home">
</div>

#### Tela de Obra
Ao clicar em "Acessar Obra" na tela inicial, o usuário é direcionado para a tela de detalhes da obra selecionada. Nela, são exibidos o nome da obra, os valores de faturamento, gastos e BDI, além de um formulário para adicionar despesas e uma listagem das categorias de gastos, cada uma com seu valor e percentual. Essa tela permite o controle detalhado dos custos e receitas de cada obra.
<div align="center">
  <img src="../assets /telaObra.png" width="80%" alt="Tela de Obra">
</div>

#### Tela de Notas Fiscais
Esta tela permite ao usuário adicionar novas notas fiscais, selecionar a obra correspondente e visualizar, editar ou remover todas as notas fiscais já cadastradas. A interface é otimizada para facilitar o controle do faturamento das obras, centralizando todas as operações relacionadas às notas fiscais em um só lugar.
<div align="center">
  <img src="../assets /telaNotas.png" width="80%" alt="Tela de Notas Fiscais">
</div>

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

### 4.1 Demonstração do Sistema Web 
Apresentação em vídeo do sistema Finance Manager, mostrando o funcionamento da aplicação, as principais funcionalidades implementadas e uma explicação breve sobre a estrutura do projeto:
[Acesse o vídeo da apresentação no Google Drive](https://drive.google.com/file/d/1V1LzkgAvkFmvHKiXuUKo8SPY9CBPjd21/view?usp=drive_link)
### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

A construção do Finance Manager representou um avanço significativo na gestão financeira da Fortal. Ao longo deste desenvolvimento, foi possível transformar um processo antes limitado a planilhas estáticas em uma plataforma web dinâmica, com visualização intuitiva de dados, categorização detalhada de despesas e acompanhamento em tempo real da rentabilidade das obras. Cada etapa, desde a modelagem do banco de dados até a implementação das rotas e controllers, reforçou a importância de integrar tecnologia à tomada de decisão estratégica dentro de uma empresa de engenharia ambiental. Embora o sistema já entregue funcionalidades robustas e alinhadas com as necessidades da Fortal, este projeto abre espaço para futuras melhorias, como a ampliação de dashboards interativos, a integração de relatórios automatizados e a implementação de filtros avançados por período ou por centro de custo. Mais que um software, o Finance Manager é um passo importante rumo a uma gestão financeira mais transparente, ágil e inteligente.



## <a name="c5"></a>5. Referências

## 5. Referências

- [MDN Web Docs - Express.js - Node.js web application framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

- [PostgreSQL Documentation - SQL Language Reference](https://www.postgresql.org/docs/current/sql.html)

- [W3Schools - HTML, CSS, JavaScript and SQL Tutorials](https://www.w3schools.com/)

- OpenAI ChatGPT - Apoio técnico e conceitual durante o desenvolvimento.


---
---
