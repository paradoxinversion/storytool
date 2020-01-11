import { Component } from "react";
import { Subscribe } from "unstated";
import StoryAssetContainer from "../../containers/StoryAssetContainer";
/**
 * This component edits a story asset
 * @param {*} props
 */
class StoryAssetEdit extends Component {
  state = {};
  componentDidMount() {
    const inputFields = {};
    this.props.storyAsset.defaultFields.forEach(
      field => (inputFields[field.name] = field.value)
    );

    this.setState({ ...inputFields });
  }
  handleFormEdit = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  render() {
    return (
      <Subscribe to={[StoryAssetContainer]}>
        {storyAssets => (
          <form>
            {this.props.storyAsset.defaultFields.map(field => {
              if (field.type === "textarea") {
                return (
                  <textarea
                    key={field.name}
                    name={field.name}
                    value={this.state[field.name]}
                    onChange={this.handleFormEdit}></textarea>
                );
              }
              return (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={this.state[field.name]}
                  onChange={this.handleFormEdit}
                />
              );
            })}
            <button>save</button>
            <button onClick={() => storyAssets.setEditState(false)}>
              cancel
            </button>
          </form>
        )}
      </Subscribe>
    );
  }
}

export default StoryAssetEdit;
