import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleEditMode, updateTodo,} from "../../features/todoSlice";

function TodoList() {
  const dispatch = useDispatch();

  const todoItems = useSelector((state) => state.sliceTodo);

  function handleBlurorEnter(id, newTodo) {
    dispatch(updateTodo({id, newTodo}));
    dispatch(toggleEditMode(id))
  }

  return (
    <div
      id="todo-list-container"
      className="bg-slate-900 mt-4 w-full rounded-xl p-4 flex flex-wrap sm:gap-4 justify-center overflow-x-auto"
    >
      {todoItems.todos.map((todoItem) => (
        <div
          key={todoItem.id}
          className="todo flex justify-between items-center bg-slate-700 py-2 px-4 sm:w-[450px] h-[50px] w-full rounded-xl mb-4"
        >
          {todoItem.isEditMode ? (
            <input
              type="text"
              defaultValue={todoItem.todo}
              className="bg-slate-700 text-white sm:text-[1.2rem] px-2 py-1 rounded-lg outline-none border-none w-full"
              onBlur={(e) => handleBlurorEnter(todoItem.id, e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  handleBlurorEnter(todoItem.id, e.target.value)
                }
              }}
            />
          ) : (
            <p
              className="text-white sm:text-[1.2rem] w-full"
              onDoubleClick={() => dispatch(toggleEditMode(todoItem.id))}
            >
              {todoItem.todo}
            </p>
          )}
          <div className="button-div">
            <button
              className="bg-slate-950 hover:bg-slate-800 duration-200 text-white py-2 px-3 rounded-lg flex items-center justify-center"
              onClick={() => dispatch(deleteTodo(todoItem.id))}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
