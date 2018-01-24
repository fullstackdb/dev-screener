import React, {
  Component,
} from 'react';
import get from 'lodash/fp/get';
import {
  css,
  StyleSheet,
} from 'aphrodite/no-important';
import Container from 'components/Container';
import UserHeader from 'components/UserHeader';
import ItemList from 'components/ItemList';
import ProfilePreview from 'components/ProfilePreview';
import RepoDetails from 'components/RepoDetails';
import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';
import {viewport} from 'theme';
import 'suitcss-utils-flex/lib/flex-sm.css';
import 'suitcss-utils-size/lib/size-sm.css';
import 'suitcss-components-grid';
import connect from './connect';

type Props = {
  followerIds: Array<number>,
  followerIsPending: boolean,
  getUserProfile: Function,
  userIsPending: boolean,
  userProfile: Object,
  repoEntities: Object,
  repoIds: Array<number>,
  repoIsPending: boolean,
  userEntities: Object,
};

const getUsername = get('match.params.username');

const styles = StyleSheet.create({
  User_wrapLoading: {
    marginTop: 25,
  },

  User_repos: {
    marginBottom: 20,

    [viewport.SM]: {
      marginBottom: 0,
    },
  },

  User_contentTitle: {
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 25,
  },

  User_content: {
    paddingTop: 20,
  },

  User_container: {
    paddingTop: 15,
  },
});

export class UserContainer extends Component {

  props: Props;

  constructor(props: Props) {
    super(props);
    this.props.getUserProfile(getUsername(props));
  }

  componentWillReceiveProps(nextProps: Props) {
    const username = getUsername(this.props);
    const nextUsername = getUsername(nextProps);

    if (username !== nextUsername) {
      this.props.getUserProfile(nextUsername);
    }
  }

  renderUser() {
    if (this.props.userIsPending) {
      return (
        <div className={css(styles.Profile_wrapLoading)}>
          <Loading />
        </div>
      );
    }

    const {
      repoIsPending,
      repoEntities,
      repoIds,
      followerIds,
      followerIsPending,
      userEntities,
    } = this.props;

    return (
      <div className={css(styles.User_container)}>
        <ErrorBoundary>
          <UserHeader {...this.props.userProfile} />
        </ErrorBoundary>
        <div className={`${css(styles.User_content)} Grid Grid--withGutter`}>
          <div className={`${css(styles.User_repos)} Grid-cell u-sm-size1of2`}>
            <h2 className={css(styles.User_contentTitle)}>Repositories</h2>
            <ErrorBoundary>
              <ItemList
                entities={repoEntities}
                ids={repoIds}
                isPending={repoIsPending}
                component={RepoDetails}
              />
            </ErrorBoundary>
          </div>
          <div className="Grid-cell u-sm-size1of2">
            <h2 className={css(styles.User_contentTitle)}>Followers</h2>
            <ErrorBoundary>
              <ItemList
                entities={userEntities}
                ids={followerIds}
                isPending={followerIsPending}
                component={ProfilePreview}
              />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Container>
        {this.renderUser()}
      </Container>
    );
  }

}

export default connect(UserContainer);
