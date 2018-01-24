// @flow

import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import parse from 'date-fns/parse';
import distanceInWords from 'date-fns/distance_in_words';
import 'suitcss-utils-flex/lib/flex.css';
import 'suitcss-utils-flex/lib/flex-sm.css';

type Props = {
  description: string | null,
  fork: boolean,
  html_url: string,
  language: string | null,
  name: string,
  stargazers_count: number,
  pushed_at: string,
  forks_count: number,
};

const styles = StyleSheet.create({
  Repo_footerItem: {
    marginRight: 12,
  },

  Repo_footerIcon: {
    marginRight: 3,
  },

  Repo_footer: {
    color: '#666',
    marginTop: 35,
    fontSize: 13,
  },

  Repo_fork: {
    fontSize: 12,
    marginLeft: 5,
    color: '#666',
  },

  Repo_name: {
    marginBottom: 10,
    fontSize: 18,
  },

  Repo_desc: {
    fontSize: 14,
    lineHeight: 1.4,
  },
});

function renderFooterItem(title: any, text: number | string): React$Element<*> {
  return (
    <div className={`${css(styles.Repo_footerItem)} u-flex u-flexAlignItemsCenter`}>
      <p>{title}: {text}</p>
    </div>
  );
}

export default function RepoDetails(props: Props) {
  const {
    description,
    fork,
    html_url,
    language,
    name,
    stargazers_count,
    pushed_at,
    forks_count,
  } = props;

  const pushedDate = distanceInWords(parse(pushed_at), new Date());

  return (
    <div>
      <p className={`${css(styles.Repo_name)} u-flex u-flexAlignItemsBaseline`}>
        <a href={html_url}>{name}</a>
        {fork
          ? <span className={css(styles.Repo_fork)}>(fork)</span>
          : null
        }
      </p>
      {description
        ? <p className={css(styles.Repo_desc)}>{description}</p>
        : null
      }
      <div className={`${css(styles.Repo_footer)} u-flex u-flexWrap u-flexAlignItemsCenter`}>
        {language
          ? <p className={css(styles.Repo_footerItem)}>{language}</p>
          : null
        }
        {renderFooterItem('Stared', stargazers_count)}
        {renderFooterItem('Forked', forks_count)}
        <p className="u-sm-flexExpandLeft">last push {pushedDate} ago</p>
      </div>
    </div>
  );
}
