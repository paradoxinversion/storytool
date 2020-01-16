import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "../../config/apollo";
import store from "store";
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
    <form>
      <input
        name="title"
        type="text"
        className="border"
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
        className="border"
        placeholder="synopsis"
        onChange={e => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            token: store.get("storytool_id")
          });
        }}
      />
      <button
        className="border-0 p-2 rounded main-dark-bg main-light"
        onClick={async e => {
          e.preventDefault();
          const createStoryResponse = await createStory({
            variables: formData
          });
        }}>
        {" "}
        Create Story
      </button>
    </form>
  );
}

export default StoryCreate;
