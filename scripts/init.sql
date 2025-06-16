-- ======================================
-- Dados de Obras
-- ======================================
INSERT INTO obra (nome, url_foto) VALUES
('Obra Sul de Minas', '/fotos/sulMinas.jpeg'),
('Obra Norte de Minas', '/fotos/norteMinas.jpeg'),
('Obra Triângulo Mineiro', '/fotos/triangulo.jpeg'),
('Obra Região Metropolitana', '/fotos/metropolitana.jpeg'),
('Obra Leste de Minas', '/fotos/LesteMinas.jpeg'),
('Obra Oeste de Minas', '/fotos/oesteMinas.jpeg'),
('Obra Alto Paranaíba', '/fotos/lesteMinas.png'),
('Obra Zona da Mata', '/fotos/zonaMata.jpeg'),
('Obra Sul Fluminense', '/fotos/sulFluminense.jpeg'),
('Obra Vale do Aço', '/fotos/valeDoAco.jpeg'),
('Obra Vale do Jequitinhonha', '/fotos/jequitinhonha.jpeg');

-- ======================================
-- Dados de Salários (2 por obra)
-- ======================================
INSERT INTO salario (descricao, valor, id_obra) VALUES
('Engenheiro Civil', 8000.00, 1),
('Técnico Ambiental', 4000.00, 1),
('Engenheiro Civil', 8100.00, 2),
('Técnico Ambiental', 4050.00, 2),
('Engenheiro Civil', 8200.00, 3),
('Técnico Ambiental', 4100.00, 3),
('Engenheiro Civil', 8300.00, 4),
('Técnico Ambiental', 4150.00, 4),
('Engenheiro Civil', 8400.00, 5),
('Técnico Ambiental', 4200.00, 5),
('Engenheiro Civil', 8500.00, 6),
('Técnico Ambiental', 4250.00, 6),
('Engenheiro Civil', 8600.00, 7),
('Técnico Ambiental', 4300.00, 7),
('Engenheiro Civil', 8700.00, 8),
('Técnico Ambiental', 4350.00, 8),
('Engenheiro Civil', 8800.00, 9),
('Técnico Ambiental', 4400.00, 9),
('Engenheiro Civil', 8900.00, 10),
('Técnico Ambiental', 4450.00, 10),
('Engenheiro Civil', 9000.00, 11),
('Técnico Ambiental', 4500.00, 11);

-- ======================================
-- Dados de Despesa de Equipe (2 por obra)
-- ======================================
INSERT INTO despesa_equipe (descricao, valor, id_obra) VALUES
('Transporte de equipe', 2100.00, 1),
('Alimentação da equipe', 1550.00, 1),
('Transporte de equipe', 2200.00, 2),
('Alimentação da equipe', 1600.00, 2),
('Transporte de equipe', 2300.00, 3),
('Alimentação da equipe', 1650.00, 3),
('Transporte de equipe', 2400.00, 4),
('Alimentação da equipe', 1700.00, 4),
('Transporte de equipe', 2500.00, 5),
('Alimentação da equipe', 1750.00, 5),
('Transporte de equipe', 2600.00, 6),
('Alimentação da equipe', 1800.00, 6),
('Transporte de equipe', 2700.00, 7),
('Alimentação da equipe', 1850.00, 7),
('Transporte de equipe', 2800.00, 8),
('Alimentação da equipe', 1900.00, 8),
('Transporte de equipe', 2900.00, 9),
('Alimentação da equipe', 1950.00, 9),
('Transporte de equipe', 3000.00, 10),
('Alimentação da equipe', 2000.00, 10),
('Transporte de equipe', 3100.00, 11),
('Alimentação da equipe', 2050.00, 11);

-- ======================================
-- Dados de Maquinário (1 por obra)
-- ======================================
INSERT INTO maquinario_equipamento (descricao, valor, id_obra) VALUES
('Aluguel de escavadeira', 10500.00, 1),
('Aluguel de escavadeira', 11000.00, 2),
('Aluguel de escavadeira', 11500.00, 3),
('Aluguel de escavadeira', 12000.00, 4),
('Aluguel de escavadeira', 12500.00, 5),
('Aluguel de escavadeira', 13000.00, 6),
('Aluguel de escavadeira', 13500.00, 7),
('Aluguel de escavadeira', 14000.00, 8),
('Aluguel de escavadeira', 14500.00, 9),
('Aluguel de escavadeira', 15000.00, 10),
('Aluguel de escavadeira', 15500.00, 11);

-- ======================================
-- Dados de Veículos (1 por obra)
-- ======================================
INSERT INTO veiculos (descricao, valor, id_obra) VALUES
('Combustível de frota', 3100.00, 1),
('Combustível de frota', 3200.00, 2),
('Combustível de frota', 3300.00, 3),
('Combustível de frota', 3400.00, 4),
('Combustível de frota', 3500.00, 5),
('Combustível de frota', 3600.00, 6),
('Combustível de frota', 3700.00, 7),
('Combustível de frota', 3800.00, 8),
('Combustível de frota', 3900.00, 9),
('Combustível de frota', 4000.00, 10),
('Combustível de frota', 4100.00, 11);

-- ======================================
-- Dados Diversos (1 por obra)
-- ======================================
INSERT INTO diverso (descricao, valor, id_obra) VALUES
('Materiais de escritório', 520.00, 1),
('Materiais de escritório', 540.00, 2),
('Materiais de escritório', 560.00, 3),
('Materiais de escritório', 580.00, 4),
('Materiais de escritório', 600.00, 5),
('Materiais de escritório', 620.00, 6),
('Materiais de escritório', 640.00, 7),
('Materiais de escritório', 660.00, 8),
('Materiais de escritório', 680.00, 9),
('Materiais de escritório', 700.00, 10),
('Materiais de escritório', 720.00, 11);

-- ======================================
-- Dados de Notas Fiscais (2 por obra)
-- ======================================
INSERT INTO nota_fiscal (numero, valor, data_emissao, id_obra) VALUES
('NF-1-001', 20500.00, '2025-01-10', 1),
('NF-1-002', 25500.00, '2025-01-20', 1),
('NF-2-001', 21000.00, '2025-02-10', 2),
('NF-2-002', 26000.00, '2025-02-20', 2),
('NF-3-001', 21500.00, '2025-03-10', 3),
('NF-3-002', 26500.00, '2025-03-20', 3),
('NF-4-001', 22000.00, '2025-04-10', 4),
('NF-4-002', 27000.00, '2025-04-20', 4),
('NF-5-001', 22500.00, '2025-05-10', 5),
('NF-5-002', 27500.00, '2025-05-20', 5),
('NF-6-001', 23000.00, '2025-06-10', 6),
('NF-6-002', 28000.00, '2025-06-20', 6),
('NF-7-001', 23500.00, '2025-07-10', 7),
('NF-7-002', 28500.00, '2025-07-20', 7),
('NF-8-001', 24000.00, '2025-08-10', 8),
('NF-8-002', 29000.00, '2025-08-20', 8),
('NF-9-001', 24500.00, '2025-09-10', 9),
('NF-9-002', 29500.00, '2025-09-20', 9),
('NF-10-001', 25000.00, '2025-10-10', 10),
('NF-10-002', 30000.00, '2025-10-20', 10),
('NF-11-001', 25500.00, '2025-11-10', 11),
('NF-11-002', 30500.00, '2025-11-20', 11);