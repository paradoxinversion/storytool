import CommonLayout from "../components/CommonLayout/CommonLayout";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../config/apollo";
import { useState } from "react";
const SIGN_UP_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      username
    }
  }
`;

function SignUp() {
  // const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleFormChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const [signUpUser, { data }] = useMutation(SIGN_UP_USER);
  return (
    <CommonLayout>
      <p>Welcome to Storytool!</p>
      <form className="flex flex-col">
        <label>
          Username
          <input
            name="username"
            onChange={e => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              });
            }}
            type="text"
            value={formData["username"]}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={e => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value
              });
            }}
            value={formData["password"]}
          />
        </label>
        <button
          className="border-0 p-2 rounded main-dark-bg main-light"
          onClick={async e => {
            // send a gql call with this data
            // display fail or success
            e.preventDefault();
            const signUpResponse = await signUpUser({
              variables: formData
            });
            // return Router.push("/dashboard");
          }}>
          {" "}
          Sign Up
        </button>
      </form>
    </CommonLayout>
  );
}

export default withApollo(SignUp);
