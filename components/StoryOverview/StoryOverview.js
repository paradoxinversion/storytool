import Link from "next/link";
import React from "react";
import {
  fetchStoryParts,
  fetchAllStoryCharacters
} from "../../utilityFunctions/actions";
import StoryPartList from "../StoryPartList/StoryPartList";
import { withApollo } from "../../config/apollo";
import StoryPartCreate from "../StoryPartCreate/StoryPartCreate";

/**
 * The main page for a story. On it are the asets related to the story:
 * Parts, People, Locations, and Objects.
 */

class StoryOverview extends React.Component {
  state = {
    storyParts: [],
    storyCharacters: []
  };

  render() {
    return (
      <div>
        <p>Welcome to the Story!</p>
        <div>
          {/* General Commands */}
          <button
            className="border-0 p-2 rounded main-dark-bg main-light"
            disabled>
            New Part
          </button>
          <StoryPartCreate storyId={this.props.storyId} />
        </div>
        <div className="mt-4 border p-2">
          <h2 className="font-bold text-lg">Your Story Parts</h2>
          <StoryPartList storyId={this.props.storyId} />
        </div>
        {/* <div className="mt-4">
          <h2 className="font-bold text-lg">Your Story Characters</h2>
        
          {this.state.storyCharacters.map(storyCharacter => {
            return (
              <div key={storyCharacter.id}>
                <span> {storyCharacter.name}</span>
                <div>
                  <Link
                    href={`/story-assets/view?type=1&id=${storyCharacter.id}`}>
                    <a className="mr-1 inline-block border-0 p-2 rounded main-dark-bg main-light">
                      Go to
                    </a>
                  </Link>
                  <button
                    className="border-0 p-2 rounded main-dark-bg main-light"
                    disabled>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  }
}
// Story.getInitialProps = async ({ query }) => {
//   const parts = storyParts.filter(part => part.story === query.id);
//   return { storyParts: parts };
// };
export default withApollo(StoryOverview);
