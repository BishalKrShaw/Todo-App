
import { useRef} from "react";
import TodoList from "./components/todo/TodoList";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./features/todoSlice";

function App() {

  let inputRef = useRef(null);

  const dispatch = useDispatch();

  function handleInputChange(e) {
    inputRef.current.value = e.target.value;
  }

  function handleAddTodo() {
    dispatch(addTodo({id: nanoid(), todo: inputRef.current.value, isEditMode: false}))
    inputRef.current.value = '';
  }

  return (
    <>
      <div className="bg-slate-950 max-w-screen min-h-screen">
        <main className="max-w-[1100px] h-full mx-auto px-[15px] pt-4 flex flex-col">
          <div
            id="todo-input-container"
            className="w-full py-[30px] bg-slate-900 rounded-xl flex items-center justify-center shadow-lg"
          >
            <input
              type="text"
              className="bg-slate-700 rounded-l-lg py-[4px] px-[8px] text-white border-none outline-none sm:w-[400px]"
              placeholder="Add Task"
              ref={inputRef}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if(e.key === "Enter") {
                  handleAddTodo();
                }
              } }
            />
            <button className="bg-slate-950 hover:bg-slate-800 duration-200 text-white py-[4px] px-[8px] rounded-r-lg border-none outline-none" onClick={handleAddTodo}>
              Add +
            </button>
          </div>
          <TodoList/>
        </main>
      </div>
    </>
  );
}

export default App;
