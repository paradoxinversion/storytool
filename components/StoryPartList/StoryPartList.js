import React from "react";
import store from "store";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

/**
 * The Story Part List displays all parts of a story
 */
const GET_STORY_PARTS = gql`
  query storyParts($token: String!, $storyId: String!) {
    storyParts(token: $token, storyId: $storyId) {
      id
      order
      title
    }
  }
`;

const DELETE_STORY_PART = gql`
  mutation deleteStoryPart($token: String!, $storyPartId: String!) {
    deleteStoryPart(token: $token, storyPartId: $storyPartId) {
      id
    }
  }
`;
function StoryPartList(props) {
  // TODO: Consider aliasing all destructured GQL data
  const { loading, error, data } = useQuery(GET_STORY_PARTS, {
    variables: { token: store.get("storytool_id"), storyId: props.storyId }
  });
  const [deleteStoryPart, { data: mutationData }] = useMutation(
    DELETE_STORY_PART
  );
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data.storyParts.length > 0 ? (
    data.storyParts.map((storyPart, i, a) => {
      return (
        <div className="bg-gray-100 border p-2 mb-4" key={storyPart.id}>
          <header>
            {/* <span>Part {storyPart.order + 1} </span> */}
            <p>{storyPart.title} </p>
            <span className="text-xs">id: {storyPart.id} </span>
          </header>
          <div>
            <Link href={`/story-assets/view?type=0&id=${storyPart.id}`}>
              <a className="inline-block mr-1 border-0 p-2 rounded main-dark-bg main-light">
                Go to
              </a>
            </Link>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={e => {
                deleteStoryPart({
                  variables: {
                    token: store.get("storytool_id"),
                    storyPartId: storyPart.id
                  }
                });
              }}>
              Delete
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <div>You have no story parts. Create a new one!</div>
  );
}

export default StoryPartList;
