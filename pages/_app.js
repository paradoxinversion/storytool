import App from "next/app";
import { Provider } from "unstated";
import apolloClient from "../config/apollo";
// import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { userStore } from "../containers/UserContainer";

import "../output.css";
import "../style.css";

// const client = new ApolloClient({
//   uri: "http://localhost:3001"
// });
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider inject={[userStore]}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
