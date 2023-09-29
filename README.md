# TweetHub

TweetHub é uma aplicação simples de microblogging inspirada no Twitter, onde os usuários podem postar mensagens curtas, editar e excluir suas postagens.

## Tecnologias Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express)
- Banco de Dados: MySQL

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL chamado `TweetHubDB`.
2. Execute o script SQL fornecido em `db.sql` para criar a tabela de postagens.

## db.sql

### Configuração do Banco de Dados

1. **Criação do Banco de Dados:**
   ```sql
   CREATE DATABASE TweetHubDB;

   USE TweetHubDB;
   
   CREATE TABLE postagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conteudo VARCHAR(200) NOT NULL,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );


## Funcionalidades

- **Listar Postagens:** Exibe todas as postagens existentes.
- **Criar Postagem:** Permite que os usuários criem novas postagens.
- **Editar Postagem:** Permite que os usuários editem suas postagens existentes.
- **Excluir Postagem:** Permite que os usuários removam suas postagens.

## Testes

- Testes unitários (frontend e backend) utilizando Jest.
- Testes de integração usando Supertest para garantir o correto funcionamento das rotas.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).