import { withRouter } from "next/router";
import React, { Component } from "react";
import StoryAssetEdit from "../StoryAssetEdit/StoryAssetEdit";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
import StoryAssetDisplay from "../StoryAssetDisplay/StoryAssetDisplay";
/**
 * This component displays text and other data
 * related to a story part
 * @param {*} props
 */
class StoryAssetHandler extends Component {
  state = { storyAssetLoaded: false, storyAsset: null };
  async componentDidMount() {
    const storyAsset = await this.props.assetFetchFn(
      this.props.router.query.id
    );
    this.setState({ storyAssetLoaded: true, storyAsset });
  }
  render() {
    return (
      <Subscribe to={[StoryAssetContainer]}>
        {storyAssets => (
          <div>
            {this.state.storyAssetLoaded ? (
              <React.Fragment>
                {storyAssets.state.editingAsset ? (
                  <StoryAssetEdit storyAsset={this.state.storyAsset} />
                ) : (
                  <StoryAssetDisplay
                    assetType={this.props.assetType}
                    storyAsset={this.state.storyAsset}
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
}

export default withRouter(StoryAssetHandler);
