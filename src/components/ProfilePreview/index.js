// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex.css';
import Logo from 'components/Logo';

type Props = {
  login: string,
  avatar_url: string,
};

const styles = StyleSheet.create({
  ProfilePreview: {
    color: 'inherit',
    borderBottom: '1px dashed #ccc',
    marginTop: 10,
    marginRight: 15,
    paddingBottom: 10,
  },

  ProfilePreview_wrapAvatar: {
    marginRight: 15,
  },

  ProfilePreview_username: {
    fontSize: 20,
  },
});

export default function ProfilePreview({login, avatar_url}: Props) {
  return (
    <div
      className={`${css(styles.ProfilePreview)} u-flex`}
    >
      <div className={css(styles.ProfilePreview_wrapAvatar)}>
        <Logo
          url={avatar_url}
          name={login}
          width={90}
        />
      </div>
      <p className={css(styles.ProfilePreview_username)}>{login}</p>
    </div>
  );
}
