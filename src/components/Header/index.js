// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import SearchForm from 'components/SearchForm';
import {viewport} from 'theme';
import 'suitcss-utils-flex/lib/flex-sm.css';

type Props = {
  onSubmit: Function,
  searchTerm: string,
};

const styles = StyleSheet.create({
  Header: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  Header_form: {
    marginTop: 20,
    width: 500,
    
    [viewport.SM]: {
      margin: 0,
    },
  },
});

export default function Header({onSubmit, searchTerm}: Props) {
  return (
    <div
      className={`${css(styles.Header)} u-sm-flex u-sm-flexJustifyCenter u-sm-flexAlignItemsCenter`}
    >
      <div className={`${css(styles.Header_form)}`}>
        <SearchForm
          onSubmit={onSubmit}
          initialInputValue={searchTerm}
        />
      </div>
    </div>
  );
}
