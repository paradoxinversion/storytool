import Link from "next/link";
import React, { useState } from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
import StoryAssets from "../../hooks/useStoryAssets";
import { fetchStoryCharacters } from "../../utilityFunctions/actions";

/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */

function StoryPartDisplay(props) {
  const [storyCharacters, setStoryCharacters] = useState([]);
  const StoryAssetData = StoryAssets.useContainer();
  return (
    <React.Fragment>
      <div>
        <div>
          <Link href={`/story/${props.storyPart.story}`}>
            <a className="mr-1 inline-block border-0 p-2 rounded main-dark-bg main-light">
              To story
            </a>
          </Link>
          <button
            className="mr-1 border-0 p-2 rounded main-dark-bg main-light"
            onClick={() => StoryAssetData.setAssetEdit(true)}
          >
            edit
          </button>
          <button className="border-0 p-2 rounded main-dark-bg main-light">
            delete
          </button>
        </div>
        <div>
          <p className="font-bold text-lg">Characters in this part</p>
          {storyCharacters.map((storyCharacter) => (
            <div>{storyCharacter.name}</div>
          ))}
          <button className="border-0 p-2 rounded main-dark-bg main-light">
            Add a Character
          </button>
        </div>
        <div>
          <h1 className="text-lg font-bold">Title: {props.storyPart.title}</h1>
          <p>{props.storyPart.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StoryPartDisplay;
