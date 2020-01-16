import CommonLayout from "../components/CommonLayout/CommonLayout";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../config/apollo";
import { useState } from "react";
import Link from "next/link";

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
  const [signUpUser, { data, error }] = useMutation(SIGN_UP_USER);
  console.log(error);
  return (
    <CommonLayout>
      <p className="text-center mb-8">
        Welcome to Storytool! To get started, create an account below.
      </p>
      <form className="bg-gray-100 rounded flex flex-col items-center border py-6 max-w-sm ml-auto mr-auto">
        <label htmlFor="username">Username</label>
        <input
          className="border"
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
        <label htmlFor="password">Password</label>
        <input
          className="border"
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
        <button
          className="border-0 p-2 mt-4 rounded main-dark-bg main-light"
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
        {error && error.message.includes("is unavailable") ? (
          <p>Username is unavailable.</p>
        ) : null}
      </form>
      <Link href="/login">
        <a className="block text-sm text-center italic underline text-gray-600 mt-4">
          Did you mean to log in?
        </a>
      </Link>
    </CommonLayout>
  );
}

export default withApollo(SignUp);
