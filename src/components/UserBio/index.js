// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import linkToGithub from 'util/linkToGithub';

type Props = {
  text: string | null,
};

const styles = StyleSheet.create({
  UserBio: {
    fontSize: 16,
    lineHeight: 1.3,
  },
});

export default function UserBio({text}: Props) {
  if (!text) {return null;}
  return (
    <p
      className={css(styles.UserBio)}
      dangerouslySetInnerHTML={{__html: linkToGithub(text)}}
    />
  );
}
