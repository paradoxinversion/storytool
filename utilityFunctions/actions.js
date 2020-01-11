import axios from "axios";
import appConfig from "../config/appConfig";
import {
  stories,
  users,
  storyParts,
  characters
} from "../developmentData/data";

export const getTestUser = async index => {
  const userResponse = await axios.get(`${appConfig.server}/testUser`);

  return userResponse.data;
};

/**
 * Fetches stories user stories by the user's ID.
 * Should fail if that user is not authenticated with that ID.
 * @param {String} userId
 */
export const fetchStories = userId => {
  console.log("fetching stories for", userId);
  return stories.filter(story => story.owner === userId);
};

export const fetchStoryParts = storyId => {
  return storyParts.filter(storyPart => storyPart.story === storyId);
};

export const fetchStoryPart = storyPartId => {
  return storyParts.filter(storyPart => storyPart.id === storyPartId)[0];
};

export const fetchAllStoryCharacters = storyId => {
  return characters.filter(character => character.stories.includes(storyId));
};

export const fetchStoryCharacter = storyCharacterId => {
  return characters.filter(character => character.id === storyCharacterId)[0];
};

export const fetchStoryCharacters = charactersIdArray => {
  return characters.filter(character =>
    charactersIdArray.includes(character.id)
  );
};
