/**
 * This container is responsible for data related to
 * relevant story assets
 */

import { Container } from "unstated";

export default class StoryAssetContainer extends Container {
  state = {
    editingAsset: false
  };

  setEditState(editState) {
    this.setState({ editingAsset: editState });
  }
}

export const storyAssetStore = new StoryAssetContainer();
