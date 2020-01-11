import { useState } from "react";

export function useUser() {
  let [user, setUser] = useState(null);
  let setAuthenticatedUser = authenticatedUser =>
    setUser({ user: { id: authenticatedUser.id } });
  let clearAuthenticatedUser = () => setUser(null);
  return { user, setAuthenticatedUser, clearAuthenticatedUser };
}
