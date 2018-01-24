// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex.css';

const map = require('lodash/fp/map').convert({ cap: false });

type Props = {
  stats: Object,
};

const styles = StyleSheet.create({
  UserStatistics_item: {
    marginRight: 28,
  },

  UserStatistics_value: {
    fontSize: 30,
  },

  UserStatistics_label: {
    fontSize: 14,
  },
});

const renderStat = map((value, key) => {
  return (
    <li
      className={`${css(styles.UserStatistics_item)} u-flex u-flexCol u-flexAlignItemsCenter`}
      key={key}
    >
      <p className={css(styles.UserStatistics_value)}>{value}</p>
      <p className={css(styles.UserStatistics_label)}>{key}</p>
    </li>
  );
});

export default function ProfileStatistics({ stats }: Props) {
  return (
    <ul className="u-flex">
      {renderStat(stats)}
    </ul>
  );
}
