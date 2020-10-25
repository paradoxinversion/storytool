import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import store from "store";
import StoryAssets from "../../hooks/useStoryAssets";
const CREATE_STORY_PART = gql`
  mutation createStoryPart(
    $token: String!
    $story: String!
    $title: String!
    $text: String
  ) {
    createStoryPart(token: $token, story: $story, title: $title, text: $text) {
      id
    }
  }
`;

function StoryPartCreate(props) {
  const [formData, setFormData] = useState({ title: "", text: "" });
  const [createStoryPart, { data }] = useMutation(CREATE_STORY_PART);
  const StoryAssetData = StoryAssets.useContainer();
  return (

        <form className="flex flex-col my-4 md:w-1/2">
          <input
            name="title"
            type="text"
            className="border mb-4"
            placeholder="Title"
            onChange={e => {
              // handleFormChange(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              });
            }}
          />
          <textarea
            name="text"
            className="border mb-4 resize-none"
            placeholder="What happens now?"
            onChange={e => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                token: store.get("storytool_id")
              });
            }}
          />
          <button
            className="border-0 p-2 mb-2 rounded main-dark-bg main-light"
            onClick={async e => {
              e.preventDefault();
              const createStoryResponse = await createStoryPart({
                variables: { ...formData, story: props.storyId }
              });
              StoryAssetData.setAssetCreate(false);
            }}>
            {" "}
            Create Story Part
          </button>
          <button
            className="border-0 p-2 rounded main-dark-bg main-light"
            onClick={async e => {
              e.preventDefault();
              StoryAssetData.setAssetCreate(false);
            }}>
            {" "}
            Cancel
          </button>
        </form>

  );
}

export default StoryPartCreate;
