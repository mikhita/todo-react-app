import React, { useState } from "react";
import styled from "styled-components";
import flowers from "./assets/flowers.png";
import deleteButton from "./assets/delete.png";
import vectorImg from "./assets/Vector.png";
import Task from "./Task";

function Container() {
  const day = new Date().getDate();
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    // hours = hours % 12;
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
    // hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const hourPm = formatPM(new Date());

  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
    if (event.target.value.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isChecked: isChecked,
    };
    if (newTask !== "") {
      setTodoList([...todoList, task]);
      setNewTask("");
      setIsActive(false);
    } else if (newTask !== "" && isChecked === true) {
      setTodoList([...todoList, task]);
      setNewTask("");
      setIsChecked(true);
      setIsActive(false);
    } else {
      return;
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleCheck = (id) => {
    let updateTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setTodoList(updateTodos);
  };
  return (
    <Div>
      <DivHeader>
        <h5>
          {day} {dayOfWeekName}
        </h5>
        <h4>{hourAm}</h4>
      </DivHeader>
      <DivInput>
        <input
          type="text"
          id="todo"
          name="todo"
          value={newTask}
          placeholder="Input"
          onChange={handleChange}
          style={{ paddingLeft: isActive ? "40px" : "" }}
        />

        {isActive && (
          <div
            className={isChecked ? "checked" : "notChecked"}
            onClick={() => setIsChecked((current) => !current)}
          ></div>
        )}
        {isActive && (
          <img
            src={vectorImg}
            alt="dk"
            id="mark"
            onClick={() => setIsChecked((current) => !current)}
            style={{ position: "relative", right: "265px", bottom: "3px" }}
          />
        )}

        <button type="submit" onClick={addTask}>
          +
        </button>
      </DivInput>
      <DivList>
        {todoList.map((task, index) => {
          return (
            <Task
              key={index}
              taskName={task.taskName}
              id={task.id}
              hourPm={hourPm}
              deleteTask={deleteTask}
              vectorImg={vectorImg}
              deleteButton={deleteButton}
              isChecked={task.isChecked}
              toggleCheck={() => {
                toggleCheck(task.id);
              }}
            />
          );
        })}
      </DivList>
    </Div>
  );
}

export default Container;

const DivList = styled.div`
  min-height: 650px;
`;

const Div = styled.div`
  background-image: url(${flowers});
  background-repeat: no-repeat;
  background-position: top;
  background-color: white;
  height: max-content;
  width: 430px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  max-height: 90%;
  h4 {
    color: white;
    font-size: xxx-large;
    text-align: end;
    margin: auto;
  }
  h5 {
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
  top: 75px;
`;

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 105px;
  div {
    position: relative;
    bottom: 2px;
    right: 245px;
  }
  .checked {
    width: 25px;
    height: 25px;
    border: 2px solid green;
    accent-color: green;
    border-radius: 50%;
    background-color: green;
    cursor: pointer;
  }
  .notChecked {
    width: 25px;
    height: 25px;
    border: 2px solid green;
    accent-color: green;
    border-radius: 50%;
    cursor: pointer;
  }
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
    max-width: 56%;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #888888;
  }
`;
