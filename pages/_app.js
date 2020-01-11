import App from "next/app";
import { Provider } from "unstated";
import UserContainer, { userStore } from "../containers/UserContainer";
import withCommonLayout from "../components/CommonLayout/CommonLayout";
import "../output.css";
import "../style.css";
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
