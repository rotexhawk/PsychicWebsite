import faker from 'faker';

const mocks = {
    Query: () => ({
        psychic: (root, args, context) => {
            return {
                id: faker.random.number({ min: 0, max: 100 }),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                nicename: faker.name.findName(),
                thumbnail: faker.image.avatar(),
            };
        },
        psychics: (root, { limit }, context) => {
            let psycs = [];
            limit = limit || 10;
            for (let i = 0; i < limit; i++) {
                psycs.push({
                    id: faker.random.number({ min: 0, max: 100 }),
                    username: faker.internet.userName(),
                    email: faker.internet.email(),
                    nicename: faker.name.findName(),
                    thumbnail: faker.image.imageUrl(200, 200, 'people'),
                });
            }
            return psycs;
        },
    }),
};

export default mocks;
