import Router from "next/router";
import CommonLayout from "../components/CommonLayout/CommonLayout";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../config/apollo";
const SIGN_UP_USER = gql`
  mutation createUser {
    createUser(username: "flip", password: "flop") {
      username
    }
  }
`;

function SignUp() {
  const [signUpUser, { data }] = useMutation(SIGN_UP_USER);
  return (
    <CommonLayout>
      <p>Welcome to Storytool!</p>
      <form className="flex flex-col">
        <label>
          Username
          <input type="text" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button
          className="border-0 p-2 rounded main-dark-bg main-light"
          onClick={async e => {
            // send a gql call with this data
            // display fail or success
            e.preventDefault();
            debugger;
            const signUpResponse = await signUpUser({
              variables: { username: "flip" }
            });
            // return Router.push("/dashboard");
          }}>
          {" "}
          Log In
        </button>
      </form>
    </CommonLayout>
  );
}

export default withApollo(SignUp);
