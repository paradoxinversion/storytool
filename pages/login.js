import CommonLayout from "../components/CommonLayout/CommonLayout";
import { withApollo } from "../config/apollo";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import store from "store";
import Link from "next/link";
import User from "../hooks/useUser";
function LogIn() {
  let UserData = User.useContainer();
  const [formData, setFormData] = useState({ username: "", password: "" });
  return (
    <CommonLayout>
      <p className="text-center mb-8">
        To access the Storytool Dashboard, please log in below.
      </p>
      <form className="bg-gray-100 rounded flex flex-col items-center border py-6 max-w-sm ml-auto mr-auto">
        <label htmlFor="username">Username</label>
        <input
          className="border"
          name="username"
          onChange={e => {
            // handleFormChange(e.target.value);
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
            // handleFormChange(e.target.value);
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
            // REST for now
            try {
              const login = await axios.post(
                "http://localhost:3001/api/v1/login",
                formData,
                { withCredentials: true }
              );
              debugger;
              UserData.setUserData({username: login.data.username, token: login.data.token})
              store.set("storytool_id", login.data.token);
              return Router.push("/dashboard");
            } catch (error) {
              console.log(error);
            }
          }}>
          {" "}
          Log In
        </button>
      </form>
      <Link href="/signup">
        <a className="block text-sm text-center italic underline text-gray-600 mt-4">
          Did you mean to sign up?
        </a>
      </Link>
    </CommonLayout>
  );
}

export default withApollo(LogIn);
