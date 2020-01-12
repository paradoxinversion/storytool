/**
 * Considerations:
 * Editables should use some flexible/dynamic structure for fields.
 * On the backend, connsider condensing those fields into simple objects
 * We can query the server for the full fields when we edit
 *
 */

/**
 * Returns an object like should be sent from the backend
 */
const fakeServerResponseOf = objectWithFields => {
  const finalObject = {};
  objectWithFields.defaultFields.forEach(
    field => (finalObect[field.name] = field.value)
  );
  return finalObject;
};
const stories = [
  {
    id: "aa",
    title: "A Development Story",
    synopsis: "A story of development and growth",
    owner: "ba",
    storyParts: ["ca", "cb"],
    defaultFields: [
      {
        name: "title",
        value: "The Development Story",
        type: "text"
      },
      {
        name: "synopsis",
        value: "A story of development and growth",
        type: "textarea"
      }
    ]
  },
  {
    id: "ab",
    title: "A Test Story",
    synopsis: "A story of testing and inspection",
    owner: "ba",
    storyParts: ["cc"],
    defaultFields: [
      {
        name: "title",
        value: "A test Story",
        type: "text"
      },
      {
        name: "synopsis",
        value: "A story of testing and inspection",
        type: "textarea"
      }
    ]
  }
];

const users = [
  {
    id: "ba",
    stories: ["aa", "ab"],
    characters: ["da", "db", "dc"],
    username: "Testy McTest"
  }
];

const storyAssetTypes = {
  0: "storyText",
  1: "character",
  2: "place",
  3: "thing"
};

const storyParts = [
  {
    id: "ca",
    story: "aa",
    title: "The beginning",
    order: 0,
    text: "This is the first part of a serial",
    characters: ["da"],
    storyAssetType: 0,
    defaultFields: [
      {
        name: "title",
        value: "The beginning",
        type: "text"
      },
      {
        name: "text",
        value: "This is the first part of a serial",
        type: "textarea"
      }
    ]
  },
  {
    id: "cb",
    story: "aa",
    title: "The abrupt end",
    order: 1,
    text: "This is the second part of a serial",
    characters: ["da", "dc"],
    storyAssetType: 0,
    defaultFields: [
      {
        name: "title",
        value: "The abrupt end",
        type: "text"
      },
      {
        name: "text",
        value: "This is the second part of a serial",
        type: "textarea"
      }
    ]
  },
  {
    id: "cc",
    story: "ab",
    title: "The beginning of the novel",
    order: 0,
    text: "This is the first part of a novel",
    characters: ["db", "dc"],
    storyAssetType: 0,
    defaultFields: [
      {
        name: "title",
        value: "The beginning of the novel",
        type: "text"
      },
      {
        name: "text",
        value: "This is the first part of a novel",
        type: "textarea"
      }
    ]
  }
];

// Noun objects (people/characters, places, things) can be in multiple stories

const characters = [
  {
    id: "da",
    stories: ["aa"],
    name: "Claire",
    description: "A human with red hair",
    storyAssetType: 1,
    characterRelations: {
      dc: {
        description: "Claire's younger brother."
      }
    },
    defaultFields: [
      {
        name: "name",
        value: "Claire",
        type: "text"
      },
      {
        name: "description",
        value: "A human with red hair",
        type: "textarea"
      }
    ]
  },
  {
    id: "db",
    stories: ["ab"],
    name: "Mike",
    description: "A human with brown hair",
    storyAssetType: 1,
    defaultFields: [
      {
        name: "name",
        value: "Mike",
        type: "text"
      },
      {
        name: "description",
        value: "A human with brown hair",
        type: "textarea"
      }
    ]
  },
  {
    id: "dc",
    stories: ["ab", "aa"],
    name: "Hunter",
    description: "A human with black hair",
    storyAssetType: 1,
    defaultFields: [
      {
        name: "name",
        value: "Hunter",
        type: "text"
      },
      {
        name: "description",
        value: "A human with black hair",
        type: "textarea"
      }
    ]
  }
];
export {
  fakeServerResponseOf,
  characters,
  stories,
  storyParts,
  storyAssetTypes,
  users
};
