import Link from "next/link";
import React from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";

/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */

function StoryCharacterDisplay(props) {
  return (
    <Subscribe to={[StoryAssetContainer]}>
      {storyAssets => (
        <div>
          <h1>{props.storyCharacter.name}</h1>
          <p>{props.storyCharacter.description}</p>
          {props.storyCharacter.stories.map(story => (
            <Link href={`/story/${story}`}>
              <a>To story {story}</a>
            </Link>
          ))}
          <button onClick={() => storyAssets.setEditState(true)}>edit</button>
          <button>delete</button>
        </div>
      )}
    </Subscribe>
  );
}

export default StoryCharacterDisplay;
