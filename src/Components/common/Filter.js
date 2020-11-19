import React, { Component } from "react";

const Filter = (props) => {
  console.log(props.genre._id);
  return (
    <li key={props.genre._id} className="list-group-item">
      {props.genre.name}
    </li>
  );
};

export default Filter;
