/**
 * This container is responsible for data related to the
 * current user and authentication status.
 */

import { Container } from "unstated";
import store from "store";
import appConfig from "../config/appConfig";
export default class UserContainer extends Container {
  state = {
    user: null
  };

  /**
   * Sets the user
   * @param {*} user
   */
  async setUser(user) {
    console.log(user);
    store.set(appConfig.storeUserIdString, user.id);
    await this.setState({
      user: {
        id: user.id
      }
    });
  }

  /***
   * Return the current user
   */
  getUser() {
    return this.state.user;
  }

  /**
   * Sets the user to null. Use when logging out.
   */
  async clearUser() {
    await this.setState({ user: null });
  }
}

export const userStore = new UserContainer();
