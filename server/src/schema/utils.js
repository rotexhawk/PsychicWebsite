var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'rotexhawk',
        password: 'dihsaR@121',
        database: 'psychic',
    },
    debug: true
});

export const getRepository = ({connection}, entity) => {
    return connection.getRepository(entity);
};

export const pg = knex;
