import Link from "next/link";
import React from "react";

import StoryAssets from "../../hooks/useStoryAssets";

/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */

function StoryCharacterDisplay(props) {
  const StoryAssetData = StoryAssets.useContainer();
  return (

      <div>
        <h1>{props.storyCharacter.name}</h1>
        <p>{props.storyCharacter.description}</p>
        {props.storyCharacter.stories.map(story => (
          <Link href={`/story/${story}`}>
            <a className="mr-1 inline-block border-0 p-2 rounded main-dark-bg main-light">
              To story {story}
            </a>
          </Link>
        ))}
        <button
          className=" mr-1 border-0 p-2 rounded main-dark-bg main-light"
          onClick={() => StoryAssetData.setAssetEdit(true)}>
          edit
        </button>
        <button className="border-0 p-2 rounded main-dark-bg main-light">
          delete
        </button>
      </div>

  );
}

export default StoryCharacterDisplay;
