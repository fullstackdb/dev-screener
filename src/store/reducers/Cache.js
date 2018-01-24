// @flow

import mergeAll from 'lodash/fp/mergeAll';
import isUndefined from 'lodash/fp/isUndefined';
import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';

const initialState = {
  search: {},
  profile: {},
  repos: {},
  followers: {},
};

type addToCacheArgs = {
  state: Object,
  cacheKey: string,
  type: string,
  data: any,
};

export function addToCache({state, cacheKey, type, data}: addToCacheArgs): Object {
  if (isUndefined(cacheKey) || state[type][cacheKey]) {
    return state;
  }
  const newState = mergeAll([{}, state]);
  newState[type][cacheKey] = omit('entities', data);
  return newState;
}

export function getSearchFromCache(search: string): Function {
  return get(`cache.search.${search}`);
}

// export function getProfileFromCache(username: string): Function {
//   return get(`cache.profile.${username}`);
// }

// export function getReposFromCache(url: string): Function {
//   return get(`cache.repos['${url}']`);
// }

// export function getFollowersFromCache(url: string): Function {
//   return get(`cache.followers['${url}']`);
// }

export default function cacheReducer(state: Object = initialState, action: Object) {
  switch (action.type) {

    case 'SEARCH_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.search,
        type: 'search',
        data: action.payload,
      });

    default:
      return state;

  }
}
