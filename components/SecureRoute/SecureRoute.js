// ! This is unused, but may be modified later when real auth is implemented
import React from "react";
import { Subscribe } from "unstated";
import UserContainer from "../../containers/UserContainer";
import StoryAssetContainer from "../../containers/StoryAssetContainer";

/**
 * SecureRoute is a component  that should display a given component if
 * a user is logged in, or redirect a user if they are not. This should
 * grant easy access to the user container for children.
 * @param {} props
 */
const SecureRoute = props => {
  // Get the Component from props
  const { Component } = props;
  return (
    <Subscribe to={[UserContainer, StoryAssetContainer]}>
      {(user, storyAssets) => {
        return (
          <Component
            {...props}
            authenticatedUser={user.getUser()}
            storyAssets={storyAssets}
          />
        );
      }}
    </Subscribe>
  );
};

export default SecureRoute;
