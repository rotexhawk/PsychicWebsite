import gql from 'graphql-tag';

export const psychicCreate = gql`
    mutation psychicCreate(
        $firstname: String!
        $lastname: String!
        $username: String!
        $password: String
        $email: String!
        $phone: String!
        $address: String!
        $city: String!
        $state: String!
        $zip: Int!
        $country: String!
        $dob: String!
    ) {
        psychicCreate(
            firstname: $firstname
            lastname: $lastname
            username: $username
            password: $password
            email: $email
            phone: $phone
            address: $address
            city: $city
            state: $state
            zip: $zip
            country: $country
            dob: $dob
        ) {
            id
            firstname
            lastname
            username
            password
            email
            phone
            address
            city
            state
            zip
            country
            dob
        }
    }
`;
