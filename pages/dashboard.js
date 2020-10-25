import { useState } from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../containers/StoryAssetContainer";
import UserStoryList from "../components/UserStoryList/UserStoryList";
import UserContainer from "../containers/UserContainer";
import CommonLayout from "../components/CommonLayout/CommonLayout";
import { withApollo } from "../config/apollo";
import StoryCreate from "../components/StoryCreate/StoryCreate";
import { createContainer } from "unstated-next";
import User from "../hooks/useUser";
import StoryAssets from "../hooks/useStoryAssets";

/**
 * The Dashboard is the user's control panel.
 *
 * From there they CRUD story projects/characters/items/etc.
 */

function UserDashboard() {
  const [dashboardState, setDashboardState] = useState({ showNewStory: false });
  let UserData = User.useContainer();
  let StoryAssetData = StoryAssets.useContainer();
  return (
    <CommonLayout>

          <div id="dashboard">
            <p className="mb-4"> Welcome to the Dashboard!</p>
            <div>
              {/* General Commands */}
              <button
                className="border-0 p-2 mb-4 rounded main-dark-bg main-light"
                onClick={() => StoryAssetData.setAssetCreate(true)}>
                New Story
              </button>
              {StoryAssetData.createAsset && <StoryCreate />}
            </div>
            <div className="border p-2">
              <h2>Your Stories</h2>
              <UserStoryList
                authenticatedUser={UserData.user}
                storyAssets={StoryAssetData.storyAssets}
              />
            </div>
          </div>

    </CommonLayout>
  );
}

export default withApollo(UserDashboard, { ssr: false });
