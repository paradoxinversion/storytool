import Link from "next/link";
import { Subscribe } from "unstated";
import UserContainer from "../containers/UserContainer";
import Router from "next/router";
import { getTestUser } from "../utilityFunctions/actions";
import CommonLayout from "../components/CommonLayout/CommonLayout";
function Home() {
  return (
    <CommonLayout>
      <Subscribe to={[UserContainer]}>
        {user => (
          <React.Fragment>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={async () => {
                // await user.setUser(await getTestUser());
                // return Router.push("/dashboard");
                return Router.push("/login");
              }}>
              {" "}
              Log In
            </button>
            <button
              className="border-0 p-2 rounded main-dark-bg main-light"
              onClick={async () => {
                return Router.push("/signup");
              }}>
              {" "}
              Sign Up
            </button>
            <p>Welcome to Storytool!</p>
            {/* Fake autosign in for now */}
            {user.user ? <p>Welcome Back!</p> : <p>Sign up or Sign in!</p>}
          </React.Fragment>
        )}
      </Subscribe>
    </CommonLayout>
  );
}

export default Home;
