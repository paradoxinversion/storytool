import store from "store";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import StoryAssets from "../../hooks/useStoryAssets";
const UPDATE_STORY_PART = gql`
  mutation updateStoryPart(
    $token: String!
    $storyPartId: String!
    $updatedFields: [FieldInput]
  ) {
    updateStoryPart(
      token: $token
      storyPartId: $storyPartId
      updatedFields: $updatedFields
    ) {
      owner
    }
  }
`;

/**
 * This component edits a story asset
 * @param {*} props
 */
function StoryAssetEdit(props) {
  const [formData, setFormData] = useState();
  const [updateStoryPart, { data }] = useMutation(UPDATE_STORY_PART);
  const StoryAssetData = StoryAssets.useContainer();

  return (

        <form className="flex flex-col">
          <input type="text" name="title" />
          <textarea name="text" />
          <div>
            <button
              className="mr-1 border-0 p-2 rounded main-dark-bg main-light"
              onClick={e => {
                e.preventDefault();
                updateStoryPart({
                  variables: {
                    token: store.get("storytool_id"),
                    updatedFields: formData,
                    storyPartId: props.storyAsset.id
                  }
                });
                StoryAssetData.setAssetEdit(false);
              }}>
              save
            </button>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={() => StoryAssetData.setAssetEdit(false)}>
              cancel
            </button>
          </div>
        </form>

  );
}

export default StoryAssetEdit;
