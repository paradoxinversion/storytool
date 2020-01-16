import React, { Component } from "react";
import Router from "next/router";
import store from "store";
import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
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
      defaultFields {
        name
        value
      }
    }
  }
`;
function UserStoryList() {
  const [state, setState] = useState({ userStories: [] });
  const { loading, error, data } = useQuery(GET_USER_STORIES, {
    variables: { token: store.get("storytool_id") }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data.userStories.length > 0 ? (
    // flattenObjectValues(data.userStories).map((userStory, i, a) => {
    flattenObjectsValues(data.userStories).map((userStory, i, a) => {
      if (!userStory) return <p>Maybe loading</p>;
      return (
        <div>
          <p>{userStory.defaultFields[0].value || "loading"}</p>
          <button
            className="border-0 p-2 rounded main-dark-bg main-light"
            onClick={() => {
              return Router.push(
                "/story/[storyId]",
                `/story/${userStory.id || "loading"}`
              );
            }}>
            Go To
          </button>
        </div>
      );
    })
  ) : (
    <div>You have no stories. Create a new one to get started!</div>
  );
}

export default UserStoryList;
