import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase, createUser, auth } from "../firebase";
const AuthContext = createContext();


function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    provider: user.providerData[0].providerId,
  };
};

function useFirebaseAuth() {
  const [admin, setAdmin] = useState(null);
  let history = useHistory();

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      createUser(user.uid, user);

      setAdmin(user);

      return user;
    } else {
      setAdmin(false);
      return false;
    }
  };

  const signinWithGoogle = async (redirect) => {
    const response = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    handleUser(response.user);
    if (redirect) {
      history?.push(redirect);
    } else {
      history?.push("/");
    }
  };

  const signout = async () => {
    await auth.signOut();
    return await handleUser(false);
    
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    admin,
    signinWithGoogle,
    signout,
  };
}