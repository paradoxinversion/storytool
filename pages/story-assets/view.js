import { withRouter } from "next/router";
import StoryAssetHandler from "../../components/StoryAssetHandler/StoryAssetHandler";
import {
  fetchStoryCharacter,
  fetchStoryPart
} from "../../utilityFunctions/actions";
const fetchFunctions = {
  0: fetchStoryPart,
  1: fetchStoryCharacter
};
/**
 *
 * This is the passthrough component for different asset types.
 * The component used to represent different assets is determined
 * by query (type)
 * @param {*} props
 */
function StoryAsset(props) {
  const assetType = props.router.query.type;
  return (
    <StoryAssetHandler
      assetType={parseInt(assetType)}
      assetFetchFn={fetchFunctions[assetType]}
    />
  );
}

export default withRouter(StoryAsset);
