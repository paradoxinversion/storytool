import { Component } from "react";
import { Subscribe } from "unstated";
import UserStoryList from "../UserStoryList/UserStoryList";
import StoryAssetContainer from "../../containers/StoryAssetContainer";

/**
 * The Dashboard is the user's control panel.
 *
 * From there they CRUD story projects/characters/items/etc.
 */

class Dashboard extends Component {
  render() {
    return (
      <Subscribe to={[StoryAssetContainer]}>
        {storyAssets => (
          <div>
            <p>Welcome to the Dashboard!</p>
            <div>
              {/* General Commands */}
              <button>New Story</button>
            </div>
            <div>
              <h2>Your Stories</h2>
              <UserStoryList
                authenticatedUser={this.props.authenticatedUser}
                storyAssets={storyAssets}
              />
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Dashboard;
