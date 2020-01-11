import { stories, users } from "../developmentData/data";
import { Component } from "react";
import { Subscribe } from "unstated";
import SecureRoute from "../components/SecureRoute/SecureRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import StoryAssetContainer from "../containers/StoryAssetContainer";
import UserStoryList from "../components/UserStoryList/UserStoryList";
import UserContainer from "../containers/UserContainer";
import CommonLayout from "../components/CommonLayout/CommonLayout";

/**
 * The Dashboard is the user's control panel.
 *
 * From there they CRUD story projects/characters/items/etc.
 */

class UserDashboard extends Component {
  render() {
    return (
      <CommonLayout>
        <Subscribe to={[UserContainer, StoryAssetContainer]}>
          {(user, storyAssets) => (
            <div id="dashboard">
              <p>Welcome to the Dashboard!</p>
              <div>
                {/* General Commands */}
                <button className="border-0 p-2 rounded main-dark-bg main-light">
                  New Story
                </button>
              </div>
              <div>
                <h2>Your Stories</h2>
                <UserStoryList
                  authenticatedUser={user.getUser()}
                  storyAssets={storyAssets}
                />
              </div>
            </div>
          )}
        </Subscribe>
      </CommonLayout>
    );
  }
}
export default UserDashboard;
