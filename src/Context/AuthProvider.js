import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../Firebase/firebase.config'



const auth = getAuth(app)

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();


  // register with email and password
  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, createUserWithEmail)
  }
  // set userName 
  const updateUser = (name, photoUrl) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }

  // login with email
  const loginWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // login with Google
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // signOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // to get user 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

    });

    return () => {
      unsubscribe()
    }
  }, [user])


  const values = { user, createUserWithEmail, signInWithGoogle, updateUser, logOut, loginWithEmail, loading }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider