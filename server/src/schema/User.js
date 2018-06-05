import { pg } from './utils';
import bcrypt from 'bcrypt';

const UserResolver = {
    Query: {
        user: async (obj, { id }, context) => {
            return await pg('account.users')
                .where('id', id)
                .first();
        },
        users: async () => {
            return await pg('account.users');
        },
    },
    Mutation: {
        userCreate: async (
            obj,
            { username, password, email, firstname, lastname, role },
            context
        ) => {
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
                    nicename,
                })
                .then(async resp => {
                    const user = resp.pop();
                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'firstname',
                        meta_value: firstname,
                    });

                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'lastname',
                        meta_value: lastname,
                    });

                    await pg('account.user_meta').insert({
                        user_id: user.id,
                        meta_key: 'role',
                        meta_value: role || 'customer',
                    });

                    return user;
                });
        },
        userDelete: async (_, { id }) => {
            return await pg('account.users')
                .where({ id })
                .del();
        },
        userUpdate: async (
            _,
            { password, email, firstname, lastname, activation_key }
        ) => {
            password = password && (await bcrypt.hash(password, 10));
            activation_key = activation_key && (await bcrypt.genSalt(1));

            let user = await pg('account.users')
                .returning(['id', 'firstname', 'lastname'])
                .update({
                    password,
                    email,
                    firstname,
                    lastname,
                    activation_key,
                });
            console.log('user', user);
            return user.pop();
        },
    },
};

export default UserResolver;
