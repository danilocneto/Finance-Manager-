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

## <a name="c1"></a>1. Introdução (Semana 01)

* O Finance Manager é uma plataforma desenvolvida para uma empresa de engenharia com o objetivo de substituir o sistema financeiro atual, que hoje é composto apenas por planilhas do Excel, o que gera limitações na análise de dados dos centros de custo. O Finance Manager apresenta, de forma clara e objetiva, um acompanhamento financeiro detalhado das diferentes obras realizadas pela empresa. A plataforma vai receber um banco de dados extraído das planilhas contábeis e organizará os gastos das obras em diferentes categorias (ex: mão de obra, aluguel de equipamentos, despesas da equipe, insumos etc.). Ela também vai informar a porcentagem que cada tipo de gasto representa dentro daquele serviço de maneira visual, por meio de gráficos, de modo a tornar a experiência mais prática e fácil. Além disso, o Finance Manager calculará um índice essencial para a análise de rentabilidade dos centros de custo: o BDI, que mostra a relação entre ganhos e gastos. O usuário deverá adicionar na plataforma as notas fiscais emitidas pelos clientes para que o BDI possa ser calculado. A partir disso, o sistema irá mostrar se a obra está sendo ou não rentável para a empresa. *
 
---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

<div align="center">
    <strong style="font-size: 18px;"><sub></sub></strong><br>
<img src="../assets /personaMarco.png" width="90%"
    alt="Persona Marco"><br>
  </div>

### 2.2. User Stories (Semana 01)

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

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---