import React, { Component } from "react";

const Navbar = ({ totalMovies }) => {
  const returnStatement = <p>Showing {totalMovies} movies in the databse</p>;
  const returnStatement2 = <p>There are no movies in the database</p>;
  return totalMovies === 0 ? returnStatement2 : returnStatement;
};
export default Navbar;
