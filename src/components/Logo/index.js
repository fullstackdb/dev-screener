// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import Image from 'components/Image';

type Props = {
  url: string,
  name: string | null,
  width: number,
};

const styles = StyleSheet.create({
  Logo: {
    borderRadius: '50%',
  },
});

export default function Logo({url, name, width}: Props) {
  const alt = name ? `${name}'s logo` : 'User logo';
  return (
    <Image
      className={css(styles.Logo)}
      src={`${url}&s=${width * 2}`}
      alt={alt}
      width={width}
    />
  );
}
