// @flow

import React from 'react';
import 'suitcss-utils-flex/lib/flex.css';
import Spinner from 'glyphs/loading.svg';

export default function Loading() {
  return (
    <div className="u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
      <Spinner width={34} height={34} />
    </div>
  );
}
