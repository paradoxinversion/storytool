import Link from "next/link";
import { Subscribe } from "unstated";
import UserContainer from "../containers/UserContainer";
import Router from "next/router";
import { getTestUser } from "../utilityFunctions/actions";
import CommonLayout from "../components/CommonLayout/CommonLayout";
import User from "../hooks/useUser";
function Home() {
  const UserData = User.useContainer();
  return (
    <CommonLayout>
          <React.Fragment>
            <div className="mb-4 max-w-sm ml-auto mr-auto">
              <button
                className="w-full block mb-4 border-0 p-2 rounded main-dark-bg main-light"
                onClick={async () => {
                  // await user.setUser(await getTestUser());
                  // return Router.push("/dashboard");
                  return Router.push("/login");
                }}>
                {" "}
                Log In
              </button>
              <button
                className="w-full block border-0 p-2 rounded main-dark-bg main-light"
                onClick={async () => {
                  return Router.push("/signup");
                }}>
                {" "}
                Sign Up
              </button>
            </div>
            <p className="text-center">Welcome to Storytool!</p>
            {/* Fake autosign in for now */}
            {UserData.user ? (
              <p>Welcome Back!</p>
            ) : (
              <p className="text-center">
                To use Storytool, sign up or login in!
              </p>
            )}
          </React.Fragment>
    </CommonLayout>
  );
}

export default Home;
