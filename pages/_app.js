import App from "next/app";
import { Provider } from "unstated";
import apolloClient from "../config/apollo";
// import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { userStore } from "../containers/UserContainer";

import "../output.css";
import "../style.css";
import User from "../hooks/useUser";
import StoryAssets from "../hooks/useStoryAssets";

// const client = new ApolloClient({
//   uri: "http://localhost:3001"
// });
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <User.Provider>
          <StoryAssets.Provider>
            <Component {...pageProps} />
          </StoryAssets.Provider>
        </User.Provider>
    );
  }
}

export default MyApp;
