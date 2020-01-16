import React from "react";
import StoryPartList from "../StoryPartList/StoryPartList";
import { withApollo } from "../../config/apollo";
import StoryPartCreate from "../StoryPartCreate/StoryPartCreate";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";

/**
 * The main page for a story. On it are the asets related to the story:
 * Parts, People, Locations, and Objects.
 */

function StoryOverview(props) {
  return (
    <Subscribe to={[StoryAssetContainer]}>
      {storyAssets => (
        <div>
          <p>Welcome to the Story!</p>
          <div>
            {/* General Commands */}
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={() => storyAssets.setAssetCreateState(true)}>
              New Part
            </button>
            {storyAssets.state.creatingAsset && (
              <StoryPartCreate storyId={props.storyId} />
            )}
          </div>
          <div className="mt-4 border p-2">
            <h2 className="font-bold text-lg">Your Story Parts</h2>
            <StoryPartList storyId={props.storyId} />
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
      )}
    </Subscribe>
  );
}

export default withApollo(StoryOverview);
