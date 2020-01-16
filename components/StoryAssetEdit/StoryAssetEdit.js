import store from "store";
import { Subscribe } from "unstated";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
const UPDATE_STORY_PART = gql`
  mutation updateStoryPart(
    $token: String!
    $storyPartId: String!
    $updatedFields: [FieldInput]
  ) {
    updateStoryPart(
      token: $token
      storyPartId: $storyPartId
      updatedFields: $updatedFields
    ) {
      owner
    }
  }
`;
/**
 * This component edits a story asset
 * @param {*} props
 */

function StoryAssetEdit(props) {
  const [formData, setFormData] = useState(
    props.storyAsset.defaultFields.map(field => {
      return {
        name: field.name,
        fieldType: field.fieldType,
        value: field.value
      };
    })
  );
  const [updateStoryPart, { data }] = useMutation(UPDATE_STORY_PART);
  return (
    <Subscribe to={[StoryAssetContainer]}>
      {storyAssets => (
        <form className="flex flex-col">
          {formData.map((field, i) => {
            if (field.type === "textarea") {
              return (
                <textarea
                  className="border h-64 mb-4"
                  key={field.name}
                  name={field.name}
                  value={formData[i][field.name]}
                  onChange={e => {
                    const fd = [...formData];
                    fd[i].value = e.target.value;
                    setFormData([...formData]);
                  }}></textarea>
              );
            }
            return (
              <input
                key={field.name}
                type={field.fieldType}
                name={field.name}
                value={formData[i].value}
                onChange={e => {
                  // Need to dig a bit deeper for the field value
                  const fd = [...formData];
                  fd[i].value = e.target.value;
                  setFormData([...formData]);
                }}
              />
            );
          })}
          <div>
            <button
              className="mr-1 border-0 p-2 rounded main-dark-bg main-light"
              onClick={e => {
                e.preventDefault();
                updateStoryPart({
                  variables: {
                    token: store.get("storytool_id"),
                    updatedFields: formData,
                    storyPartId: props.storyAsset.id
                  }
                });
                storyAssets.setEditState(false);
              }}>
              save
            </button>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={() => storyAssets.setEditState(false)}>
              cancel
            </button>
          </div>
        </form>
      )}
    </Subscribe>
  );
}

export default StoryAssetEdit;
