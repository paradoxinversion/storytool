import { storyParts } from "../../developmentData/data";
import Link from "next/link";
import StoryOverview from "../../components/StoryOverview/StoryOverview";
import { withRouter } from "next/router";
import CommonLayout from "../../components/CommonLayout/CommonLayout";
/**
 * The main page for a story
 */
function Story(props) {
  return (
    <CommonLayout>
      <StoryOverview storyId={props.router.query.id} />
    </CommonLayout>
  );
}

// ! Prevent static optimization here or props will not pass correctly
Story.getInitialProps = () => {
  return {};
};
export default withRouter(Story);
