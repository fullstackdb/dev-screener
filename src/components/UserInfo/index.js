// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex.css';
import isNull from 'lodash/fp/isNull';
import every from 'lodash/fp/every';
import linkToGithub from 'util/linkToGithub';

type Props = {
  blog: string | null,
  company: string | null,
  location: string | null,
};

const styles = StyleSheet.create({
  UserInfo_item: {
    marginBottom: 6,
  },

  UserInfo_text: {
    fontSize: 14,
  },

  UserInfo_icon: {
    marginRight: 7,
  },
});

function renderLocation(text: string | null): React$Element<*> | null {
  if (!text) {return null;}
  return (
    <li className={`${css(styles.UserInfo_item)} u-flex u-flexAlignItemsCenter`}>
      <p className={css(styles.UserInfo_text)}>Location: {text}</p>
    </li>
  );
}

function renderLink(link: string | null): React$Element<*> | null {
  if (!link) {return null;}
  return (
    <li className={`${css(styles.UserInfo_item)} u-flex u-flexAlignItemsCenter`}>
      <p className={css(styles.UserInfo_text)}>
        Link: <a href={link}>{link}</a>
      </p>
    </li>
  );
}

function renderCompany(text: string | null): React$Element<*> | null {
  if (!text) {return null;}
  return (
    <li className={`${css(styles.UserInfo_item)} u-flex u-flexAlignItemsCenter`}>
      <p
        className={css(styles.UserInfo_text)}
        dangerouslySetInnerHTML={{__html: `Company: ${linkToGithub(text)}`}}
      />
    </li>
  );
}

const allNull = every(isNull);

export default function UserInfo({blog, company, location}: Props) {
  if (allNull([blog, company, location])) {return null;}

  return (
    <ul>
      {renderCompany(company)}
      {renderLocation(location)}
      {renderLink(blog)}
    </ul>
  );
}

UserInfo.defaultProps = {
  blog: null,
  company: null,
  location: null,
};
