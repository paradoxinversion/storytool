import Link from "next/link";
import React from "react";
import {
  fetchStoryParts,
  fetchAllStoryCharacters
} from "../../utilityFunctions/actions";

/**
 * The main page for a story. On it are the asets related to the story:
 * Parts, People, Locations, and Objects.
 */

class StoryOverview extends React.Component {
  state = {
    storyParts: [],
    storyCharacters: []
  };

  async componentDidMount() {
    debugger;
    const storyParts = await fetchStoryParts(this.props.storyId);
    const storyCharacters = await fetchAllStoryCharacters(this.props.storyId);
    this.setState({ storyParts, storyCharacters });
  }

  render() {
    return (
      <div>
        <p>Welcome to the Story!</p>
        <div>
          {/* General Commands */}
          <button disabled>New Part</button>
        </div>
        <div>
          <h2>Your Story Parts</h2>
          {/* example markup */}
          {this.state.storyParts.map(storyPart => {
            return (
              <div key={storyPart.id}>
                <span>Part {storyPart.order + 1}</span>
                <span> {storyPart.title}</span>
                <Link href={`/story-assets/view?type=0&id=${storyPart.id}`}>
                  <a>Go to</a>
                </Link>
                <button disabled>delete</button>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Your Story Characters</h2>
          {/* example markup */}
          {this.state.storyCharacters.map(storyCharacter => {
            return (
              <div key={storyCharacter.id}>
                <span> {storyCharacter.name}</span>
                <Link
                  href={`/story-assets/view?type=1&id=${storyCharacter.id}`}>
                  <a>Go to</a>
                </Link>
                <button disabled>delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
// Story.getInitialProps = async ({ query }) => {
//   const parts = storyParts.filter(part => part.story === query.id);
//   return { storyParts: parts };
// };
export default StoryOverview;
