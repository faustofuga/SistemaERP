CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(150) UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

INSERT INTO usuarios (nome, email, senha)
VALUES ('Admin', 'admin@sistemaerp.com', '1234')
ON CONFLICT (email) DO NOTHING;
