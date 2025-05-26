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

INSERT INTO obra (nome, url_foto) VALUES
('Obra Sul de Minas', 'https://exemplo.com/sul-minas.jpg'),
('Obra Norte de Minas', 'https://exemplo.com/norte-minas.jpg'),
('Obra Triângulo Mineiro', 'https://exemplo.com/triangulo.jpg'),
('Obra Região Metropolitana', 'https://exemplo.com/metropolitana.jpg'),
('Obra Leste de Minas', 'https://exemplo.com/leste.jpg'),
('Obra Oeste de Minas', 'https://exemplo.com/oeste.jpg'),
('Obra Alto Paranaíba', 'https://exemplo.com/alto-paranaiba.jpg'),
('Obra Zona da Mata', 'https://exemplo.com/zona-mata.jpg'),
('Obra Sul Fluminense', 'https://exemplo.com/sul-fluminense.jpg'),
('Obra Vale do Aço', 'https://exemplo.com/vale-aco.jpg'),
('Obra Vale do Jequitinhonha', 'https://exemplo.com/jequitinhonha.jpg'),
('Obra Central', 'https://exemplo.com/central.jpg'),
('Obra Serra da Canastra', 'https://exemplo.com/serra-canastra.jpg'),
('Obra Vale do Rio Doce', 'https://exemplo.com/rio-doce.jpg'),
('Obra Região dos Inconfidentes', 'https://exemplo.com/inconfidentes.jpg'),
('Obra Chapada Diamantina', 'https://exemplo.com/diamantina.jpg'),
('Obra Campos das Vertentes', 'https://exemplo.com/vertentes.jpg'),
('Obra Sudoeste de Minas', 'https://exemplo.com/sudoeste.jpg'),
('Obra Noroeste de Minas', 'https://exemplo.com/noroeste.jpg'),
('Obra Baixo Jequitinhonha', 'https://exemplo.com/baixo-jequitinhonha.jpg');
