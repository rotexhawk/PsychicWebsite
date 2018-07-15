import { pg } from './utils';
import bcrypt from 'bcrypt';

const PsychicResolver = {
    Query: {},
    Mutation: {
        userCreate: async (obj, { username, password, email, firstname, lastname, role }, context) => {
            password = await bcrypt.hash(password, 10);
            const activation_key = await bcrypt.genSalt(1);
            const nicename = firstname + ' ' + lastname;

            return pg('account.users')
                .returning(['id', 'username', 'email', 'nicename'])
                .insert({
                    username,
                    password,
                    email,
                    activation_key,
                    nicename
                })
                .then(async resp => {
                    const user = resp.pop();
                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'firstname',
                        meta_value: firstname
                    });

                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'lastname',
                        meta_value: lastname
                    });

                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'role',
                        meta_value: role || 'customer'
                    });

                    return user;
                });
        }
    }
};

export default PsychicResolver;
