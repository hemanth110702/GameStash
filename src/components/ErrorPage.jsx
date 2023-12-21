import React from "react";

const ErrorPage = ({ darkTheme }) => {
  return (
    <div className={darkTheme ? "error-page" : "light-error-page"}>
      <h1>Oops !!!</h1>
      <h2>The page doesn't exist</h2>
    </div>
  );
};

export default ErrorPage;
