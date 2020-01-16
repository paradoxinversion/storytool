/**
 * This container is responsible for data related to
 * relevant story assets
 */

import { Container } from "unstated";

export default class StoryAssetContainer extends Container {
  state = {
    editingAsset: false,
    creatingAsset: false
  };

  setEditState(editState) {
    this.setState({ editingAsset: editState });
  }

  setAssetCreateState(createState) {
    this.setState({ creatingAsset: createState });
  }
}

export const storyAssetStore = new StoryAssetContainer();
