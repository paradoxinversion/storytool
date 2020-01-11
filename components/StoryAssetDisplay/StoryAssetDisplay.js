import { withRouter } from "next/router";
import StoryPartDisplay from "../StoryPartDisplay/StoryPartDisplay";
import StoryCharacterDisplay from "../StoryCharacterDisplay/StoryCharacterDisplay";

/**
 * This is the passthrough component for different asset types.
 * It decides which component to render via switch on assetType.
 * @param {*} props
 */
function StoryAssetDisplay(props) {
  switch (parseInt(props.assetType)) {
    case 0:
      return <StoryPartDisplay storyPart={props.storyAsset} />;
    case 1:
      return <StoryCharacterDisplay storyCharacter={props.storyAsset} />;
    default:
      return <div>Derp</div>;
  }
}

export default withRouter(StoryAssetDisplay);
