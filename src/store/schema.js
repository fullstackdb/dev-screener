import {schema} from 'normalizr';
import pick from 'lodash/fp/pick';

const pickUserData = pick([
  'login',
  'id',
  'avatar_url',
]);
const userProcessStrategy = entity => pickUserData(entity);

const user = new schema.Entity('users', {}, {
  processStrategy: userProcessStrategy,
});

export const userSchema = new schema.Array(user);
