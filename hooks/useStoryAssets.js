import { useState } from "react";
import { createContainer } from "unstated-next"

function useStoryAssets() {
  const [editingAsset, setEditingAsset] = useState(false);
  const [createAsset, setCreateAsset] = useState(false);
  const [storyAssets, setStoryAssets] = useState(null)
  const setStoryAssetData = (storyAssetData) => setStoryAssets(storyAssetData);
  const setAssetEdit = (state) => setEditingAsset(state);
  const setAssetCreate = (state) => setCreateAsset(state);
  return { storyAssets, setStoryAssetData, editingAsset, createAsset, setAssetEdit, setAssetCreate }
}

const StoryAssets = createContainer(useStoryAssets);

export default StoryAssets;