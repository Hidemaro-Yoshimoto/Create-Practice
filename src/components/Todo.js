import React from "react";
import { DELETE_TODO } from "../actions/index";

const Todos = ({ todo, dispatch }) => {
  const id = todo.id;
  const deleteButton = () => {
    const result = window.confirm(`(id: ${id})を本当に削除してもいいですか？`);
    if (result) dispatch({ type: DELETE_TODO, id });
  };
  return (
    <tr key={id}>
      <td className="table-el">{todo.id}</td>
      <td className="table-el">{todo.title}</td>
      <td className="table-el">{todo.deteil}</td>
      <td className="table-el">{todo.date}</td>
      <td className="table-el">{todo.checkedVal}</td>
      <td>
        <button className="delete-button" onClick={deleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Todos;
