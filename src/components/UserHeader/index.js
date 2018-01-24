// @flow

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-flex/lib/flex-sm.css';
import Avatar from 'components/Logo';
import UserBio from 'components/UserBio';
import UserInfo from 'components/UserInfo';
import UserStatistics from 'components/UserStatistics';
import UserTitle from 'components/UserTitle';
import {viewport} from 'theme';

type Props = {
  avatar_url: string,
  bio: string | null,
  blog: string | null,
  company: string | null,
  followers: number,
  following: number,
  html_url: string,
  id: number,
  location: string | null,
  login: string,
  name: string | null,
  public_repos: number,
};

const styles = StyleSheet.create({
  UserHeader_container: {
    paddingTop: 15,
  },

  UserHeader_wrapUserInfo: {
    marginBottom: 20,

    [viewport.SM]: {
      marginBottom: 0,
    },
  },

  UserHeader_wrapBio: {
    marginBottom: 8,
  },

  UserHeader_avatar: {
    marginBottom: 15,

    [viewport.SM]: {
      marginBottom: 0,
      marginRight: 20,
    },
  },

  UserHeader_wrapTitle: {
    marginBottom: 5,
  },
});

export default class UserHeader extends Component {

  props: Props;

  shouldComponentUpdate(nextProps: Props) {
    return nextProps.id !== this.props.id;
  }

  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      html_url,
      location,
      login,
      name,
      public_repos,
    } = this.props;

    const stats = {
      Followers: followers,
      Following: following,
      Repos: public_repos,
    };

    return (
      <div className="u-sm-flex">
        <div className={css(styles.UserHeader_avatar)}>
          <Avatar
            name={name}
            width={230}
            url={avatar_url}
          />
        </div>
        <div className="u-sm-flexGrow1 u-sm-flex u-sm-flexCol">
          <div className={css(styles.UserHeader_wrapTitle)}>
            <UserTitle
              name={name}
              username={login}
              userLink={html_url}
            />
          </div>
          <div className={css(styles.UserHeader_wrapBio)}>
            <UserBio
              text={bio}
            />
          </div>
          <div className={css(styles.UserHeader_wrapUserInfo)}>
            <UserInfo
              location={location}
              company={company}
              blog={blog}
            />
          </div>
          <div className="u-sm-flexExpandTop">
            <UserStatistics stats={stats} />
          </div>
        </div>
      </div>
    );
  }

}
