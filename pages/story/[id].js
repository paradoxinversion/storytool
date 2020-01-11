import { storyParts } from "../../developmentData/data";
import Link from "next/link";
import StoryOverview from "../../components/StoryOverview/StoryOverview";
import SecureRoute from "../../components/SecureRoute/SecureRoute";
import { withRouter } from "next/router";
/**
 * The main page for a story
 */

function Story(props) {
  return <StoryOverview storyId={props.router.query.id} />;
}

// ! Prevent static optimization here or props will not pass correctly
Story.getInitialProps = () => {
  return {};
};
export default withRouter(Story);
