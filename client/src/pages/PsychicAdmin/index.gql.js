import gql from 'graphql-tag';

export const createPsychic = gql`
    mutation createPsychic($firstName: String!, $lastname: String!, $username: String!, $password: String, $email: String!, $phone: String!, $address: String!, $city: String!, $state: String!, $zip: String!, $country: String!, $dob: String!) {
        createPsychic(firstName: $firstName, $lastname: $lastname, username: $username, password: $password, email: $email, phone: $phone, address: $address, city: $city, state: $state, zip: $zip, country: $country, dob: $dob){
            id
            firstName
            $lastName
            username
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
