import { getAuth, signInWithEmailAndPassword   } from "firebase/auth";
import {  signOut } from "firebase/auth";


export const SignIn = (values,navigate,location) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('token', user.accessToken);
      alert("User signed in")
      location? navigate(location): navigate('/home')
      window.location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      alert("error",errorCode)
    });
 
  }
  export const SignOut = (navigate, location) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('token');
        alert("User signed out");
        location ? navigate(location) : navigate('/');
        window.location.reload();
      })
      .catch((error) => {
      });
  }