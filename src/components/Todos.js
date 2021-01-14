import React from "react";

import "../css/App.css";

import Todo from "./Todo";

const Todos = ({ state, dispatch }) => {
    if(state.length === 0) return <p className="no-todo">※Todoが登録されていません。</p>
    return (
    <div className="todos margin-top-md">
      <h3>登録されたTodo</h3>
      <div className="todos-table">
        <table>
          <thead>
            <tr>
              <th className="table-el">ID</th>
              <th className="table-el">タイトル</th>
              <th className="table-el">詳細/メモ</th>
              <th className="table-el">期日</th>
              <th className="table-el">優先度</th>
            </tr>
          </thead>

          <tbody>
            {state.map((todo) => {
              return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
