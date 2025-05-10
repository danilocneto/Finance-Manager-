-- Tabela obra
CREATE TABLE obra (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    total_despesa NUMERIC,
    total_faturamento NUMERIC
);

-- Tabela salario
CREATE TABLE salario (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

-- Tabela despesa_equipe
CREATE TABLE despesa_equipe (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

-- Tabela maquinario_equipamento
CREATE TABLE maquinario_equipamento (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

-- Tabela veiculos
CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

-- Tabela diverso
CREATE TABLE diverso (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

-- Tabela nota_fiscal
CREATE TABLE nota_fiscal (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(50),
    valor_bruto NUMERIC,
    valor_liquido NUMERIC,
    data_emissao DATE,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);
