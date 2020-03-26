// Update with your config settings.

/**
 * Foi modificado o filename para './src/database/db.sqlite'
 * Depois de criada a pasta database dentro da pasta src
 * faz as modificações acima dentro desse arquivo
 */

module.exports = {
  
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    /**
     * Criar uma pasta em database chamada migrations
     * Adicionar esses comandos abaixo fornendo o diretório dessa nova pasta
     * Criar o primeiro arquivo de migrations que vai ser responsável por
     * criar a tabela de ONG's dentro do banco de dados
     * Executar: npx knex migrate:make create_ongs
     */
    migrations: {
      directory: './src/database/migrations'
    },
    // Para corrigir um erro que aparece assim que se cria create_ongs. Por padrão, SQLite não
    // suporta default values para as colunas dos bancos de dados.
    // Usa-se o useNullAsDefault: true para que o banco de dados aceite o valor padrão das colunas
    // como vazio
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
