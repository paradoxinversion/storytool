import { withRouter } from "next/router";
import { withApollo } from "../../config/apollo";
import StoryAssetHandler from "../../components/StoryAssetHandler/StoryAssetHandler";
import {
  fetchStoryCharacter,
  fetchStoryPart
} from "../../utilityFunctions/actions";
import CommonLayout from "../../components/CommonLayout/CommonLayout";
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
    <CommonLayout>
      <StoryAssetHandler assetType={parseInt(assetType)} />
    </CommonLayout>
  );
}
// ! Prevent static optimization here or props will not pass correctly
StoryAsset.getInitialProps = () => {
  return {};
};
export default withRouter(withApollo(StoryAsset));
