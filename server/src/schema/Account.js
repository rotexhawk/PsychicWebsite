import { pg } from './utils';
import bcrypt from 'bcrypt';

const AccountResolver = {
    Query: {},
    Mutation: {
        accountCreate: async (
            obj,
            {
                firstname,
                lastname,
                email,
                username,
                password,
                role,
                gender,
                dob,
                cardName,
                creditCard,
                expiration,
                securityCode,
                address1,
                address2,
                city,
                state,
                zip,
                country
            },
            context
        ) => {
            password = await bcrypt.hash(password, 10);
            const activation_key = await bcrypt.genSalt(1);

            return pg('account.users')
                .returning(['id', 'username', 'email', 'activation_key', 'role'])
                .insert({
                    username,
                    password,
                    email,
                    activation_key,
                    role
                })
                .then(async resp => {
                    const account = resp.pop();
                    return pg('account.details')
                        .returning(['firstname, lastname,gender,dob'])
                        .insert({
                            userId: account.id,
                            firstname,
                            lastname,
                            gender,
                            dob
                        })
                        .then(async detailsResp => {
                            const details = detailsResp.pop();
                            return pg('account.payment');
                        });
                });
        }
    }
};

export default AccountResolver;
