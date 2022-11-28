import React from "react";
import styled from "styled-components";

export default function Task(props) {
  return (
    <DivTodos>
      <DivTime>
        <h2>{props.taskName}</h2>
        <h4>Today at {props.hourPm}</h4>
      </DivTime>
      <DivState>
        <input
          type="radio"
          //   checked={props.active}
          //   onClick={() => props.setActive(!props.active)}
        />
        <img src={props.vectorImg} alt="dk" id="mark" />
        <img
          src={props.deleteButton}
          alt="delete"
          onClick={() => props.deleteTask(props.id)}
        />
      </DivState>
    </DivTodos>
  );
}
const DivTodos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px 0 23px;
  position: relative;
  top: 100px;
  height: 60px;
`;

const DivTime = styled.div`
  margin-top: 15px;
  h2 {
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #0d0d0d;
    margin: auto;
    height: 22px;
  }
  h4 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #888888;
    margin: auto;
  }
`;

const DivState = styled.div`
  input {
    width: 25px;
    height: 25px;
    border: 2px solid green;
    accent-color: green;
    margin-right: 10px;
  }
  input:hover {
    cursor: pointer;
  }
  #mark {
    position: relative;
    right: 27px;
    bottom: 9px;
  }
  img {
    cursor: pointer;
  }
`;