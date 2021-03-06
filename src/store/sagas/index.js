// @flow

import { watchSearchUsers } from './Search';
import { watchGetProfile } from './Profile';
import {
  watchGetRepos,
  watchSortRepos,
} from './Repos';
import { watchGetFollowers } from './Followers';

export default function* rootSaga() {
  yield [
    watchSearchUsers(),
    watchGetProfile(),
    watchGetFollowers(),
    watchGetRepos(),
    watchSortRepos(),
  ];
}
