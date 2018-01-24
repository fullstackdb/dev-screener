import React, {
  Component,
} from 'react';
import curryN from 'lodash/fp/curryN';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {
  css,
  StyleSheet,
} from 'aphrodite/no-important';
import { viewport } from 'theme';
import 'suitcss-utils-flex/lib/flex-sm.css';
import 'suitcss-utils-size/lib/size-sm.css';
import 'suitcss-components-grid';

type Props = {
  sortRepos: Function,
  repos_url: string,
};

type Filter = {
  sort: 'pushed' | 'stars' | 'forks',
  order: 'asc' | 'desc',
}

const getUsername = get('match.params.username');

const styles = StyleSheet.create({
  User_repos: {
    marginBottom: 20,
    cursor: 'pointer',
    border: '1px solid transparent',

    [viewport.SM]: {
      marginBottom: 0,
    },
  },
  hover: {
    ':hover': {
      border: '1px solid #ccc',
      borderRadius: 2,
    },
  },
});

const RenderFilter = curryN(2, (sortBy, { friendlyName, sort, order, key }) => {
  return (
  <div
    className={`${css(styles.User_repos)} ${css(styles.hover)} Grid-cell u-sm-size1of5`}
    key={key}
  >
    <div onClick={() => sortBy(sort)}>
      {friendlyName} {order}
    </div>
  </div>)
})

class ReposFilter extends Component {
  props;

  constructor(props) {
    super(props);
    this.state = {
      filters: [
        { friendlyName: 'Activity', sort: 'pushed', order: 'desc', key: 0 },
        { friendlyName: 'Stars', sort: 'stars', order: 'desc', key: 1 },
        { friendlyName: 'Forks', sort: 'forks', order: 'desc', key: 2 },
      ],
      pushed: { sort: 'pushed', order: 'desc' },
      stars: { sort: 'stars', order: 'desc' },
      forks: { sort: 'forks', order: 'desc' },
    };
    this.sortBy = this.sortBy.bind(this);
  }

  changeOrder(prop) {
    this.state[prop].order = this.state[prop].order === 'desc' ? 'asc' : 'desc';
  }

  sortBy(key: string) {
    this.changeOrder(key);
    this.props.sortRepos(this.props.repos_url, this.state[key]);
  }

  render() {
    return (
      <div className={`${css(styles.User_content)} Grid Grid--withGutter`}>
        <div className={`${css(styles.User_repos)} Grid-cell u-sm-size1of4`}>
          Filter by:
        </div>
        {map(RenderFilter(this.sortBy), this.state.filters)}
      </div>
    )
  }
}

export default ReposFilter;
