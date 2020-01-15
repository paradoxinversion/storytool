import { flattenObjectValues, flattenObjectsValues } from "./generalUtilities";
const testData = {
  data: {
    userStories: [
      {
        id: "5e1bd1c57e44f91ad5387d34",
        defaultFields: [
          {
            name: "title",
            value: "Story 1",
            __typename: "Field"
          },
          {
            name: "synopsis",
            value: "The first user story",
            __typename: "Field"
          }
        ],
        __typename: "Story"
      },
      {
        id: "5e1bd214f43ca11ae8c3c6d7",
        defaultFields: [
          {
            name: "title",
            value: "Story 2",
            __typename: "Field"
          },
          {
            name: "synopsis",
            value: "The second user story",
            __typename: "Field"
          }
        ],
        __typename: "Story"
      }
    ]
  }
};

describe("generalUtilities", () => {
  test("flattenObjectValues", () => {
    const flattenedData = flattenObjectValues(testData.data.userStories[0]);
    expect(flattenedData.title).toEqual("Story 1");
  });
  test("flattenObjectsValues", () => {
    const flattenedData = flattenObjectsValues(testData.data.userStories);
    expect(flattenedData[0].title).toEqual("Story 1");
    expect(flattenedData[1].title).toEqual("Story 2");
  });
});
