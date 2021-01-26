import { CREATE_TODO, DELETE_TODO, DELETE_ALL_TODOS } from "../actions/index";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      const todo = {
        title: action.title,
        deteil: action.deteil,
        date: action.date,
        checkedVal: action.checkedVal
      };
      const length = state.length;
      let id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...todo }];
    case DELETE_TODO:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_TODOS:
      return [];
    default:
      return state;
  }
};

export default events;
