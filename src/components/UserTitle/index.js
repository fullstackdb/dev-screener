// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex.css';

type Props = {
  userLink: string,
  username: string,
  name: string | null,
};

const styles = StyleSheet.create({
  UserTitle_username: {
    color: '#555',
  },

  UserTitle_name: {
    marginRight: 5,
    fontSize: 28,
  },
});

export default function UserTitle(props: Props) {
  const {
    name,
    username,
    userLink,
  } = props;

  return (
    <div className="u-flex u-flexWrap u-flexAlignItemsBaseline">
      {name
        ? <h1 className={css(styles.UserTitle_name)}>{name}</h1>
        : null
      }
      <p className={css(styles.UserTitle_username)}>
        <a href={userLink}>@{username}</a>
      </p>
    </div>
  );
}
