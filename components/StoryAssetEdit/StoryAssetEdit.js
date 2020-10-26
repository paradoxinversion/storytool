import store from "store";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import StoryAssets from "../../hooks/useStoryAssets";

const UPDATE_STORY_PART = gql`
  mutation updateStoryPart(
    $token: String!
    $storyPartId: String!
    $title: String
    $text: String
  ) {
    updateStoryPart(
      token: $token
      storyPartId: $storyPartId
      title: $title
      text: $text
    ) {
      id
      owner
      text
      title
    }
  }
`;

const GET_STORY_PART = gql`
  query storyParts($token: String!, $storyPartId: String!) {
    storyPart(token: $token, storyPartId: $storyPartId) {
      id
      order
      story
      title
      text
    }
  }
`;

/**
 * This component edits a story asset
 * @param {*} props
 */
function StoryAssetEdit(props) {
  const StoryAssetData = StoryAssets.useContainer();
  const [formData, setFormData] = useState({
    title: StoryAssetData.storyAssets.storyPart.title,
    text: StoryAssetData.storyAssets.storyPart.text,
  });
  const [updateStoryPart, { data }] = useMutation(UPDATE_STORY_PART);

  const handleInput = (e) => {
    // handleFormChange(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInput}
      />
      <textarea name="text" value={formData.text} onChange={handleInput} />
      <div>
        <button
          className="mr-1 border-0 p-2 rounded main-dark-bg main-light"
          onClick={async (e) => {
            e.preventDefault();
            const update = await updateStoryPart({
              variables: {
                token: store.get("storytool_id"),
                title: formData.title,
                text: formData.text,
                storyPartId: StoryAssetData.storyAssets.storyPart.id,
              },
            });
            // debugger;
            StoryAssetData.setStoryAssetData({
              storyPart: update.data.updateStoryPart,
            });

            StoryAssetData.setAssetEdit(false);
          }}
        >
          save
        </button>
        <button
          className="border-0 p-2 rounded main-dark-bg main-light"
          onClick={() => StoryAssetData.setAssetEdit(false)}
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default StoryAssetEdit;
