import CommonLayout from "../components/CommonLayout/CommonLayout";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../config/apollo";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  return (
    <CommonLayout>
      <p>Welcome to Storytool!</p>
      <form className="flex flex-col">
        <label>
          Username
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
        </label>
        <label>
          Password
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
        </label>
        <button
          className="border-0 p-2 rounded main-dark-bg main-light"
          onClick={async e => {
            // send a gql call with this data
            // display fail or success
            e.preventDefault();
            // REST for now
            try {
              const signupResponse = await axios.post(
                "http://localhost:3001/api/v1/login",
                formData,
                { withCredentials: true }
              );
              return Router.push("/dashboard");
            } catch (error) {
              debugger;
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
