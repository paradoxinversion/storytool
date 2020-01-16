import { useState } from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../containers/StoryAssetContainer";
import UserStoryList from "../components/UserStoryList/UserStoryList";
import UserContainer from "../containers/UserContainer";
import CommonLayout from "../components/CommonLayout/CommonLayout";
import { withApollo } from "../config/apollo";
import StoryCreate from "../components/StoryCreate/StoryCreate";

/**
 * The Dashboard is the user's control panel.
 *
 * From there they CRUD story projects/characters/items/etc.
 */

function UserDashboard() {
  const [dashboardState, setDashboardState] = useState({ showNewStory: false });
  return (
    <CommonLayout>
      <Subscribe to={[UserContainer, StoryAssetContainer]}>
        {(user, storyAssets) => (
          <div id="dashboard">
            <p className="mb-4"> Welcome to the Dashboard!</p>
            <div>
              {/* General Commands */}
              <button
                className="border-0 p-2 mb-4 rounded main-dark-bg main-light"
                onClick={() => storyAssets.setAssetCreateState(true)}>
                New Story
              </button>
              {storyAssets.state.creatingAsset && <StoryCreate />}
            </div>
            <div className="border p-2">
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

export default withApollo(UserDashboard, { ssr: false });
