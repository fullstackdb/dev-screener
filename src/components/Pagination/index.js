// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import first from 'lodash/fp/first';
import flow from 'lodash/fp/flow';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import classNames from 'classnames';
import 'suitcss-utils-flex/lib/flex.css';

type Props = {
  next: Object,
  prev: Object,
};

const styles = StyleSheet.create({
  Pagination_link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const getSearchQuery = flow(
  url => url.match(/(\?.+)/),
  first
);

function renderLink({ url, extraClassName, rel, text }: Object) {
  if (!url) { 
    return null; 
  }
  const search = getSearchQuery(url);

  const linkClass = classNames(
    css(styles.Pagination_link),
    'u-flex',
    'u-flexAlignItemsCenter',
    extraClassName
  );

  return (
    <Link
      to={{ search }}
      className={linkClass}
      rel={rel}
    >
      <span>{text}</span>
    </Link>
  );
}

function Pagination({ prev, next }: Props) {
  const prevLink = renderLink({
    url: prev.url,
    extraClassName: 'u-flexRowReverse u-flexExpandRight',
    rel: 'prev',
    text: 'Previous',
  });

  const nextLink = renderLink({
    url: next.url,
    extraClassName: 'u-flexExpandLeft',
    rel: 'next',
    text: 'Next',
  });

  return (
    <div className="u-flex u-flexJustifyCenter">
      {prevLink}
      {nextLink}
    </div>
  );
}

Pagination.defaultProps = {
  next: {},
  prev: {},
};

export default Pagination;
