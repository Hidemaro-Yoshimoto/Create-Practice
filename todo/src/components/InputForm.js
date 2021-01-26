import React, { useState, useEffect, useRef } from "react";
import { CREATE_TODO, DELETE_ALL_TODOS } from "../actions/index";

const InputForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [deteil, setDeteil] = useState("");
  const [date, setDate] = useState("");
  const [checkedVal, setCheckedVal] = useState("");

  const ChangeCheckedVal = (e) => setCheckedVal(e.target.value);

  const add = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TODO,
      title,
      deteil,
      date,
      checkedVal,
    });
    setTitle("");
    setDeteil("");
    setDate("");
    setCheckedVal("");
  };

  const disabled =
    title === "" || deteil === "" || date === "" || checkedVal === "";

  const DeleteAllTodos = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのTodoを削除してもいいですか？");
    if (result) dispatch({ type: DELETE_ALL_TODOS });
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="form-container">
        <div className="input">
          <label className="form-title" htmlFor="formTitle">
            タイトル
          </label>
          <input
            className="input"
            id="formTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            ref={inputRef}
          ></input>
        </div>

        <div className="input">
          <label className="form-title" htmlFor="formDeteil">
            詳細/メモ
          </label>
          <input
            className="input"
            id="formDeteil"
            value={deteil}
            onChange={(e) => {
              setDeteil(e.target.value);
            }}
          ></input>
        </div>

        <div className="input">
          <label className="form-title" htmlFor="formDate">
            期日
          </label>
          <input
            className="input"
            id="formDate"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>

        <div className="input">
          <span className="form-title">優先度</span>
          <div>
            <input
              type="radio"
              id="radio01"
              value="高"
              onChange={ChangeCheckedVal}
              checked={checkedVal === "高"}
            />
            <label htmlFor="radio01">高</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio02"
              value="中"
              onChange={ChangeCheckedVal}
              checked={checkedVal === "中"}
            />
            <label htmlFor="radio02">中</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio03"
              value="低"
              onChange={ChangeCheckedVal}
              checked={checkedVal === "低"}
            />
            <label htmlFor="radio03">低</label>
          </div>
        </div>

        <div className="margin-top-min button">
          <button
            className="create-button"
            onClick={add}
            disabled={disabled}
          >
            作成
          </button>
          <button
            className="delete-button"
            onClick={DeleteAllTodos}
            disabled={state.length === 0}
          >
            全てのTodoの削除
          </button>
        </div>
      </div>
    </>
  );
};

export default InputForm;
