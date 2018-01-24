// @flow

import React from 'react';
import DocumentTitle from 'react-document-title';
import pageTitle from 'util/page-title';
import UserContainer from 'containers/User';

function UserScreen(matchProps: Object) {
  const { match } = matchProps;
  const title = pageTitle(`${match.params.username}'s profile`);

  return (
    <DocumentTitle title={title}>
      <UserContainer {...matchProps} />
    </DocumentTitle>
  );
}

export default UserScreen;
