import { withRouter } from "next/router";
import React, { Component } from "react";
import StoryAssetEdit from "../StoryAssetEdit/StoryAssetEdit";
import { Subscribe } from "unstated";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { flattenObjectValues } from "../../utilityFunctions/generalUtilities";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
import StoryAssetDisplay from "../StoryAssetDisplay/StoryAssetDisplay";
import store from "store";
const GET_STORY_PART = gql`
  query storyParts($token: String!, $storyPartId: String!) {
    storyPart(token: $token, storyPartId: $storyPartId) {
      id
      order
      story
      defaultFields {
        name
        value
        fieldType
      }
    }
  }
`;
/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */
// class StoryAssetHandler extends Component {
//   state = { storyAssetLoaded: false, storyAsset: null };
//   async componentDidMount() {
//     const storyAsset = await this.props.assetFetchFn(
//       this.props.router.query.id
//     );
//     this.setState({ storyAssetLoaded: true, storyAsset });
//   }
//   render() {
//     return (
//       <Subscribe to={[StoryAssetContainer]}>
//         {storyAssets => (
//           <div>
//             {this.state.storyAssetLoaded ? (
//               <React.Fragment>
//                 {storyAssets.state.editingAsset ? (
//                   <StoryAssetEdit storyAsset={this.state.storyAsset} />
//                 ) : (
//                   <StoryAssetDisplay
//                     assetType={this.props.assetType}
//                     storyAsset={this.state.storyAsset}
//                   />
//                 )}
//               </React.Fragment>
//             ) : (
//               <div>Loading</div>
//             )}
//           </div>
//         )}
//       </Subscribe>
//     );
//   }
// }

function StoryAssetHandler(props) {
  // props.assetType tells us which mutation or query to run
  const { loading, error, data } = useQuery(GET_STORY_PART, {
    variables: {
      token: store.get("storytool_id"),
      storyPartId: props.router.query.id
    }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Subscribe to={[StoryAssetContainer]}>
      {storyAssets => (
        <div>
          {data ? (
            <React.Fragment>
              {storyAssets.state.editingAsset ? (
                <StoryAssetEdit storyAsset={data.storyPart} />
              ) : (
                <StoryAssetDisplay
                  assetType={props.assetType}
                  storyAsset={flattenObjectValues(data.storyPart)}
                />
              )}
            </React.Fragment>
          ) : (
            <div>Loading</div>
          )}
        </div>
      )}
    </Subscribe>
  );
}

export default withRouter(StoryAssetHandler);
