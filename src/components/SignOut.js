import {auth} from '../firebase'

const SignOut = (navigate) => {
    auth
      .signOut()
      .then(() => {
        window.location.reload();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  export default SignOut;