import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, UserCredential } from 'firebase/auth';
import App from './App';

export default function SignIn() {
  // State with a type annotation for string
  const [value, setValue] = useState<string>("");

  // Function to handle sign-in
  const handleClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((data: UserCredential) => {
        const email = data.user?.email || "";
        setValue(email);
        localStorage.setItem("email", email);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  // useEffect to retrieve email from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email") || "";
    setValue(storedEmail);
  }, []);

  return (
    <div>
      {value ? (
        <App />
      ) : (
        <button onClick={handleClick}>Sign In With Google</button>
      )}
    </div>
  );
}
