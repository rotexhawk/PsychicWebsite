import gql from 'graphql-tag';

export const searchForm = gql`
    query form {
        form @client {
            name
            sort {
                checked
                options
            }
            specialties {
                checked
                options
            }
            tools {
                checked
                options
            }
            reading_style {
                checked
                options
            }
            expertises {
                subject
                expertise
            }
        }
    }
`;

export const updateForm = gql`
    mutation updateForm($name: String!, $value: String!, $checked: Boolean!) {
        updateForm(name: $name, value: $value, checked: $checked) @client
    }
`;

export const searchResult = gql`
    query search($filter: Filter, $limit: Int, $offset: Int) {
        search(filter: $filter, limit: $limit, offset: $offset) {
            results {
                id
                email
                nicename
                thumbnail
                specialties
                tools
                reading_style
            }
        }
    }
`;
