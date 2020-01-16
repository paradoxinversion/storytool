import React, { Component } from "react";
import Router from "next/router";
import store from "store";
import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { flattenObjectsValues } from "../../utilityFunctions/generalUtilities";
import Link from "next/link";

/**
 * The Story Part List displays all parts of a story
 */
const GET_STORY_PARTS = gql`
  query storyParts($token: String!, $storyId: String!) {
    storyParts(token: $token, storyId: $storyId) {
      id
      order
      defaultFields {
        name
        value
      }
    }
  }
`;
function StoryPartList(props) {
  const { loading, error, data } = useQuery(GET_STORY_PARTS, {
    variables: { token: store.get("storytool_id"), storyId: props.storyId }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data.storyParts.length > 0 ? (
    flattenObjectsValues(data.storyParts).map((storyPart, i, a) => {
      if (!storyPart) return <p>Maybe loading</p>;
      return (
        // <div>
        //   <p>{storyParts.defaultFields[0].value || "loading"}</p>
        //   <button
        //     className="border-0 p-2 rounded main-dark-bg main-light"
        //     onClick={() => {
        //       return Router.push(
        //         "/story/[storyId]",
        //         `/story/${storyParts.id || "loading"}`
        //       );
        //     }}>
        //     Go To
        //   </button>
        // </div>
        <div key={storyPart.id}>
          <span>Part {storyPart.order + 1}</span>
          <span> {storyPart.title}</span>
          <div>
            <Link href={`/story-assets/view?type=0&id=${storyPart.id}`}>
              <a className="inline-block mr-1 border-0 p-2 rounded main-dark-bg main-light">
                Go to
              </a>
            </Link>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              disabled>
              delete
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
