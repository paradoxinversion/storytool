import { useState } from "react";
import { createContainer } from "unstated-next"
import store from "store";
import appConfig from "../config/appConfig";

function userUser() {
  const [user, setUser] = useState(null);
  
  const setUserData = (user) => {
    store.set(appConfig.storeUserIdString, user.id);
    setUser(user)
   
  }
  const clearUser = () => setUser(null);
  return { user, setUserData, clearUser }
}

const User = createContainer(userUser);

export default User;