// @flow

import {watchSearchUsers} from './Search';

export default function* rootSaga() {
  yield [
    watchSearchUsers(),
  ];
}
