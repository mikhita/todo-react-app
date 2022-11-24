import React, { useState } from "react";
import styled from "styled-components";
import flowers from "./assets/flowers.png";
import deleteButton from "./assets/delete.png";
import vectorImg from "./assets/Vector.png";

function Container() {
  const day = new Date().getDate();
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const hourAm = formatAMPM(new Date());

  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "short",
  });
  function formatPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const hourPm = formatPM(new Date());

  const [active, setActive] = useState(false);

  return (
    <Div>
      <DivHeader>
        <h3>
          {day} {dayOfWeekName}
        </h3>
        <h2>{hourAm}</h2>
      </DivHeader>
      <DivInput>
        <input type="text" id="todo" name="todo" placeholder="Input" />
        <button type="submit">+</button>
      </DivInput>
      <DivTodos>
        <DivTime>
          <h2>Dinner</h2>
          <h4>Today at {hourPm}</h4>
        </DivTime>
        <DivState>
          <input
            type="radio"
            checked={active}
            onClick={() => setActive(!active)}
          />
          <img src={vectorImg} alt="dk" id="mark" />
          <img src={deleteButton} alt="delete" />
        </DivState>
      </DivTodos>
    </Div>
  );
}

export default Container;

const Div = styled.div`
  background-image: url(${flowers});
  background-repeat: no-repeat;
  background-position: top;
  background-color: white;
  height: 636px;
  width: 430px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: white;
    font-size: xxx-large;
    text-align: end;
    margin: auto;
  }
  h3 {
    color: white;
    text-align: end;
    font-size: x-large;
    margin: auto;
  }
`;

const DivHeader = styled.div`
  padding: 20px;
  margin: 0%;
  position: relative;
  bottom: 102px;
`;

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 81px;
  button {
    background-color: #20eeb0;
    width: 89px;
    height: 49px;
    margin-left: 20px;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: xx-large;
  }
  button:hover {
    cursor: pointer;
  }
  input {
    padding: 10px 12px 10px 12px;
    background-color: #ebeff2;
    height: 32px;
    border: none;
    border-radius: 8px;
    width: 56%;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #888888;
  }
`;

const DivTodos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px 0 23px;
  position: relative;
  bottom: 80px;
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
    width: 20px;
    height: 20px;
    border: 2px solid green;
    accent-color: green;
    margin-right: 10px;
  }
  input:hover {
    cursor: pointer;
  }
  #mark {
    position: relative;
    right: 25px;
    bottom: 7px;
  }
`;