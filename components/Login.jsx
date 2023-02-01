import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="password" />
        <button disabled={true}>Login</button>
        <span data-testid="error">Something went wrong!</span>
      </form>
    </div>
  );
};

export default Login;
