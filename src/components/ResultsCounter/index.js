// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex.css';

type Props = {
  pageTotal: number,
  resultsTotal: number,
  searchTerm: string,
};

const styles = StyleSheet.create({
  ResultsMessage_text: {
    padding: 6,
  },
});

function ResultsCounter({ searchTerm, resultsTotal, pageTotal }: Props) {
  if (!searchTerm || !pageTotal) { return null; }

  return (
    <div className="u-flex u-flexJustifyEnd">
      <p className={css(styles.ResultsMessage_text)}>
        Found <b>{resultsTotal}</b> {resultsTotal === 1 ? 'result' : 'results'} for <b>{searchTerm}</b>
      </p>
    </div>
  );
}

export default ResultsCounter;
