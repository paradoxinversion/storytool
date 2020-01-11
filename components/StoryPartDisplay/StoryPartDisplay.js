import Link from "next/link";
import React from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
import { fetchStoryCharacters } from "../../utilityFunctions/actions";

/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */

class StoryPartDisplay extends React.Component {
  state = {
    storyCharacters: []
  };

  async componentDidMount() {
    const storyCharacters = await fetchStoryCharacters(
      this.props.storyPart.characters
    );
    this.setState({ storyCharacters });
  }
  render() {
    return (
      <Subscribe to={[StoryAssetContainer]}>
        {storyAssets => (
          <React.Fragment>
            <div>
              <div>
                <Link href={`/story/${this.props.storyPart.story}`}>
                  <a className="mr-1 inline-block border-0 p-2 rounded main-dark-bg main-light">
                    To story
                  </a>
                </Link>
                <button
                  className="mr-1 border-0 p-2 rounded main-dark-bg main-light"
                  onClick={() => storyAssets.setEditState(true)}>
                  edit
                </button>
                <button className="border-0 p-2 rounded main-dark-bg main-light">
                  delete
                </button>
              </div>
              <div>
                <p className="font-bold text-lg">Characters in this part</p>
                {this.state.storyCharacters.map(storyCharacter => (
                  <div>{storyCharacter.name}</div>
                ))}
                <button className="border-0 p-2 rounded main-dark-bg main-light">
                  Add a Character
                </button>
              </div>
              <div>
                <h1 className="text-lg font-bold">
                  Title: {this.props.storyPart.title}
                </h1>
                <p>{this.props.storyPart.text}</p>
              </div>
            </div>
          </React.Fragment>
        )}
      </Subscribe>
    );
  }
}

export default StoryPartDisplay;
