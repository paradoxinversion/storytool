import CommonLayout from "../components/CommonLayout/CommonLayout";
import { withApollo } from "../config/apollo";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import store from "store";
function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  return (
    <CommonLayout>
      <p>Welcome to Storytool!</p>
      <form className="flex flex-col items-center">
        <label htmlFor="username">Username</label>
        <input
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
          className="border-0 p-2 rounded main-dark-bg main-light m-4"
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
    </CommonLayout>
  );
}

export default withApollo(LogIn);
