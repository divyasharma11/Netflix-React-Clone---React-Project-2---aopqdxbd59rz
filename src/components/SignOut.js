
 const SignOut = (navigate) => {
  if (window.confirm("Leaving So Soon?")) {
    localStorage.removeItem("Token");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("updatedProfile");
    navigate("/signin");
  }
};

  export default SignOut;