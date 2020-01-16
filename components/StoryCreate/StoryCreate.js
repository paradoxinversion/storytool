import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Subscribe } from "unstated";
import { withApollo } from "../../config/apollo";
import store from "store";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
const CREATE_STORY = gql`
  mutation createStory($token: String!, $title: String!, $synopsis: String) {
    createStory(token: $token, title: $title, synopsis: $synopsis) {
      owner
    }
  }
`;

function StoryCreate() {
  const [formData, setFormData] = useState({ title: "", synopsis: "" });
  const [createStory, { data }] = useMutation(CREATE_STORY);
  return (
    <Subscribe to={[StoryAssetContainer]}>
      {storyAssets => (
        <form className="flex flex-col my-4 md:w-1/2">
          <input
            name="title"
            type="text"
            className="border mb-4"
            placeholder="Title"
            onChange={e => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              });
            }}
          />
          <textarea
            name="synopsis"
            className="border mb-4 resize-none"
            placeholder="Synopsis"
            onChange={e => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                token: store.get("storytool_id")
              });
            }}
          />
          <button
            className="border-0 p-2 rounded main-dark-bg main-light mb-2"
            onClick={async e => {
              e.preventDefault();
              const createStoryResponse = await createStory({
                variables: formData
              });
              storyAssets.setAssetCreateState(false);
            }}>
            {" "}
            Create Story
          </button>
          <button
            className="border-0 p-2 rounded main-dark-bg main-light"
            onClick={async e => {
              e.preventDefault();
              storyAssets.setAssetCreateState(false);
            }}>
            {" "}
            Cancel
          </button>
        </form>
      )}
    </Subscribe>
  );
}

export default StoryCreate;
