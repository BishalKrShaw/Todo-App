import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'Todo App',
  initialState: {
    todos: []
  },
  reducers: {

    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      
    },

    toggleEditMode: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload) ? {...todo, isEditMode: !todo.isEditMode} : todo)
      
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload.id) ? {...todo, todo: action.payload.newTodo} : todo)
      
    }

  }
})

export const { addTodo, deleteTodo, toggleEditMode, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;