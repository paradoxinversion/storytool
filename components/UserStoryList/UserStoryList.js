import React, { Component } from "react";
import Router from "next/router";
import store from "store";
import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";

import gql from "graphql-tag";
import { flattenObjectsValues } from "../../utilityFunctions/generalUtilities";

/**
 * The UserStoryList displays all the stories a user
 * has created for the purposes of loading them for
 * editing.
 */
const GET_USER_STORIES = gql`
  query getUserStories($token: String!) {
    userStories(token: $token) {
      id
      title
      synopsis
    }
  }
`;

const DELETE_STORY = gql`
  mutation deleteStory($token: String!, $storyId: String!) {
    deleteStory(token: $token, storyId: $storyId) {
      id
    }
  }
`;
function UserStoryList() {
  const [state, setState] = useState({ userStories: [] });
  const { loading, error, data } = useQuery(GET_USER_STORIES, {
    variables: { token: store.get("storytool_id") }
  });
  const [deleteStory, { data: mutationData }] = useMutation(DELETE_STORY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data.userStories.length > 0 ? (
    data.userStories.map((userStory, i, a) => {
      return (
        <div className="border p-2 my-2">
          <p>{userStory.title}</p>
          <p>{userStory.synopsis}</p>
          <button
            className="border-0 p-2 rounded main-dark-bg main-light mr-2"
            onClick={() => {
              return Router.push(
                "/story/[storyId]",
                `/story/${userStory.id || "loading"}`
              );
            }}>
            Go To
          </button>
          <button
            className="border-0 p-2 rounded main-dark-bg main-light"
            onClick={e => {
              deleteStory({
                variables: {
                  token: store.get("storytool_id"),
                  storyId: userStory.id
                }
              });
            }}>
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <div>You have no stories. Create a new one to get started!</div>
  );
}

export default UserStoryList;
