export const defaults = {
    form: {
        __typename: 'form',
        name: 'test',
        sort: {
            __typename: 'sort',
            checked: '',
            options: [
                'Available',
                'Busy',
                'Star Rating',
                'Alphabetical',
                'New',
                'Price-(Low to High)',
                'Price-(Hight to Low)'
            ]
        },
        specialties: {
            __typename: 'specialties',
            checked: [],
            options: [
                'Career Psychic',
                'Clairaudient',
                'Clairsentient',
                'Clairvoyant',
                'Energy Healing',
                'Intuitive/Empath',
                'Love Psychic',
                'Pet Psychic',
                'Psychic Medium'
            ]
        },
        tools: {
            __typename: 'tools',
            checked: [],
            options: [
                'Angel Cards',
                'Astrology',
                'Can Read Without Tools',
                'Cartomancy',
                'Crystals',
                'Dowsing',
                'Numerology',
                'Reiki/Healing',
                'Tarot'
            ]
        },
        reading_style: {
            __typename: 'reading_style',
            checked: [],
            options: ['Compassionate', 'Direct', 'Expressive', 'Thoughtful', 'Wise']
        },
        expertises: [
            {
                __typename: 'expertise_filter',
                subject: 'Love, Relationships & Family',
                expertise: [
                    'Breakups/Divorce',
                    'Cheating/Wandering Hearts',
                    'Finding love/Soulmates',
                    'LGBT Relationships',
                    'Sex/Intimacy',
                    'Sibling/Parental Issues',
                    'Social Media Influence',
                    'Toxic Relationships'
                ]
            }
        ]
    }
};
