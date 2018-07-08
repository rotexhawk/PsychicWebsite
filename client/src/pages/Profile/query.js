import gql from 'graphql-tag';

export const profileQuery = gql`
    query psychic($id: Int) {
        psychic(id: $id) {
            username
            nicename
            thumbnail
            specialties
            tools
            reading_style
            email
            id
        }
    }
`;
