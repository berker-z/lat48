import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { todoData } from "@data/todoData";

const TodoItem = ({ done, text }) => {
  return (
    <div>
      <div className="flex place-items-center space-x-2">
        {done ? (
          <MdOutlineCheckBox className="text-3xl flex-shrink-0" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className="text-3xl flex-shrink-0" />
        )}
        <p className="boxxy todo">{text}</p>
      </div>
    </div>
  );
};

export const AddTodo = async () => {
  const bimbo = todoData.slice();
  const newTodo = {
    done: false,
    text: "be8 iandg legacz",
  };
  bimbo.push(newTodo);
  console.log(bimbo);
};

const Todo = () => {
  return (
    <div>
      <div className="flex place-content-center">
        <div className="w-1/2">
          <p className="boxxy baslik">{"/"}todo</p>
          <TodoItem {...todoData[0]} />
          <TodoItem {...todoData[1]} />
          <TodoItem {...todoData[2]} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
