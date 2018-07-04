import faker from 'faker';
import casual from 'casual';
import { MockList } from 'graphql-tools';

const specialties = [
    'Career Psychic',
    'Clairaudient',
    'Clairsentient',
    'Clairvoyant',
    'Energy Healing',
    'Intuitive/Empath',
    'Love Psychic',
    'Pet Psychic',
    'Psychic Medium',
];

const tools = [
    'Angel Cards',
    'Astrology',
    'Can Read Without Tools',
    'Cartomancy',
    'Crystals',
    'Dowsing',
    'Numerology',
    'Reiki/Healing',
    'Tarot',
];

const sort = [
    'Available',
    'Busy',
    'Star Rating',
    'Alphabetical',
    'New',
    'Price-(Low to High)',
    'Price-(Hight to Low)',
];

const reading_style = [
    'Compassionate',
    'Direct',
    'Expressive',
    'Thoughtful',
    'Wise',
];

const expertises = [
    {
        subject: 'Love, Relationships & Family',
        expertise: [
            'Breakups/Divorce',
            'Cheating/Wandering Hearts',
            'Finding love/Soulmates',
            'LGBT Relationships',
            'Sex/Intimacy',
            'Sibling/Parental Issues',
            'Social Media Influence',
            'Toxic Relationships',
        ],
    },
];

casual.define('psychic', () => {
    return {
        id: casual.integer(0, 100),
        username: casual.username,
        email: casual.email,
        nicename: casual.name,
        thumbnail: faker.image.avatar(),
        reading_style: casual.random_element(reading_style),
        specialties: () =>
            new MockList(3, () => casual.random_element(specialties)),
        tools: () => new MockList(3, () => casual.random_element(tools)),
    };
});

casual.define('review', () => {
    return {
        id: casual.integer(0, 100),
        author: casual.name,
        text: casual.description,
        avatar: faker.image.avatar(),
    };
});

casual.define('search', () => {
    return {
        sort,
        specialties,
        tools,
        reading_style,
        expertises,
        results: () => new MockList(10, () => casual.psychic),
    };
});

const mocks = {
    Query: () => ({
        psychic: (root, args, context) => {
            return casual.psychic;
        },
        psychics: (root, { limit }, context) => {
            limit = limit || 10;
            return new MockList(limit, () => casual.psychic);
        },
        review: (_, { id }) => {
            return review;
        },
        reviews: (_, { limit }) => {
            limit = limit || 6;
            return new MockList(limit, () => casual.review);
        },
        search: (_, { filter, limit, offset }) => {
            return casual.search;
        },
    }),
};

export default mocks;
