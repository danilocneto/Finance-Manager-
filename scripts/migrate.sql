CREATE TABLE IF NOT EXISTS obra (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    url_foto VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS salario (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS despesa_equipe (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS maquinario_equipamento (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS veiculos (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS diverso (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor NUMERIC,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS nota_fiscal (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(50),
    valor NUMERIC,
    data_emissao DATE,
    id_obra INT NOT NULL,
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

