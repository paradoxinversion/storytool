import Link from "next/link";
import { Subscribe } from "unstated";
import UserContainer from "../containers/UserContainer";
import Router from "next/router";
import { getTestUser } from "../utilityFunctions/actions";
function Home() {
  return (
    <Subscribe to={[UserContainer]}>
      {user => (
        <React.Fragment>
          <button
            onClick={async () => {
              await user.setUser(await getTestUser());
              return Router.push("/dashboard");
            }}>
            {" "}
            Log In
          </button>
          <p>Welcome to Storytool!</p>
          {/* Fake autosign in for now */}
          {user.user ? <p>Welcome Back!</p> : <p>Sign up or Sign in!</p>}
        </React.Fragment>
      )}
    </Subscribe>
  );
}

export default Home;
