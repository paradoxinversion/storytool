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
              <button onClick={() => storyAssets.setEditState(true)}>
                edit
              </button>
              <button>delete</button>
              <h1>{this.props.storyPart.title}</h1>
              <p>{this.props.storyPart.text}</p>
              <Link href={`/story/${this.props.storyPart.story}`}>
                <a>To story</a>
              </Link>
            </div>

            <div>
              <p>Characters in this part</p>
              {this.state.storyCharacters.map(storyCharacter => (
                <div>{storyCharacter.name}</div>
              ))}
            </div>
          </React.Fragment>
        )}
      </Subscribe>
    );
  }
}

export default StoryPartDisplay;
