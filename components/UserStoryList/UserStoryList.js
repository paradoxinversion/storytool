import React, { Component } from "react";
import { Subscribe } from "unstated";
import UserContainer from "../../containers/UserContainer";
import { fetchStories } from "../../utilityFunctions/actions";
import Link from "next/link";
import Router from "next/router";
import store from "store";
import appConfig from "../../config/appConfig";

/**
 * The UserStoryList displays all the stories a user
 * has created for the purposes of loading them for
 * editing.
 */
class UserStoryList extends Component {
  state = {
    storiesLoaded: false,
    userStories: []
  };
  async componentDidMount() {
    const userStories = await fetchStories(
      store.get(appConfig.storeUserIdString)
    );
    this.setState({ userStories, storiesLoaded: true });
  }

  render() {
    return this.state.storiesLoaded ? (
      this.state.userStories.map(userStory => {
        return (
          <div>
            <p>{userStory.title}</p>
            {/* <Link href={`/story/${userStory.id}`}>
              <button>Go to</button>
            </Link> */}
            <button
              onClick={() => {
                return Router.push(
                  "/story/[storyId]",
                  `/story/${userStory.id}`
                );
              }}>
              Go To
            </button>
          </div>
        );
      })
    ) : (
      <div>Loading Stories</div>
    );
  }
}

export default UserStoryList;
