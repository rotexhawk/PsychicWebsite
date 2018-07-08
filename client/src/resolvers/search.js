import { searchForm } from '../pages/Search/index.gql.js';

const mergeState = (state, name, value, checked) => {
    let field = state.form[name];

    if (typeof field === 'string') {
        return { [name]: value };
    } else if (typeof field.checked === 'string') {
        return {
            [name]: {
                ...field,
                checked: value,
            },
        };
    } else if (typeof field === 'object') {
        return {
            [name]: {
                ...field,
                checked: checked
                    ? [...field.checked, value]
                    : field.checked.filter(filter => filter !== value),
            },
        };
    }
};

export const psychichSearch = {
    Mutation: {
        updateForm: (_, { name, value, checked }, { cache }) => {
            const previousState = cache.readQuery({
                query: searchForm,
            });

            const data = {
                ...previousState,
                form: {
                    ...previousState.form,
                    ...mergeState(previousState, name, value, checked),
                },
            };

            cache.writeData({
                query: searchForm,
                data,
            });
        },
    },
};

export default psychichSearch;
