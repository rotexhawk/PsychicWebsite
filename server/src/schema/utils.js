var knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'host',
        user: 'user',
        password: 'password',
        database: 'db'
    },
    debug: true
});

export const getRepository = ({ connection }, entity) => {
    return connection.getRepository(entity);
};

export const pg = knex;
