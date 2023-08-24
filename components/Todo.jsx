"use client";
import { useState, useEffect } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdDeleteForever,
} from "react-icons/md";
import { RiEdit2Line, RiEdit2Fill } from "react-icons/ri";

const getTodos = async () => {
  try {
    const res = await fetch(`/api/todo/`, {
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading data: ", error);
  }
};

const TodoItem = ({ _id, done, text, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState("");
  const [editedText, setEditedText] = useState(text);
  const [status, setStatus] = useState(done);

  const handleComplete = async () => {
    const newStatus = !status;

    const response = await fetch(`/api/todo?id=${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: _id, newStatus: newStatus }),
    });
    if (response.ok) {
      console.log(status);
      console.log("Item status changed.");
      fetchTodos();
    } else {
      console.error("Failed to change item status.");
    }
  };
  const handleDelete = async () => {
    const response = await fetch(`/api/todo?id=${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    if (response.ok) {
      console.log("Item deleted successfully.");
      fetchTodos();
    } else {
      console.error("Failed to delete item.");
    }
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);

    const response = await fetch(`/api/todo?_id=${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id, newDone: done, editedText: editedText }),
    });
    console.log(response);
    if (response.ok) {
      console.log("Todo updated successfully");
      fetchTodos();
    } else {
      console.error("Failed to update todo");
    }
  };

  return (
    <div>
      <div className="flex place-items-center space-x-2">
        <button
          onClick={(e) => {
            setStatus(!status);
            handleComplete();
          }}
        >
          {done ? (
            <MdOutlineCheckBox className="text-5xl flex-shrink-0" />
          ) : (
            <MdOutlineCheckBoxOutlineBlank className="text-5xl flex-shrink-0" />
          )}
        </button>
        {isEditing ? (
          <textarea
            className={`todo h-fit resize-x ${done ? "boxxy" : "boxxy-gray"}`}
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            autoFocus
          />
        ) : (
          <button
            onClick={handleEdit}
            className={`todo ${done ? "boxxy" : "boxxy-gray"}`}
          >
            {" "}
            {text}{" "}
          </button>
        )}
        <button onClick={handleEdit} className="text-3xl flex-shrink-0">
          {isEditing ? <RiEdit2Line /> : <></>}
        </button>
        <button
          onClick={handleDelete}
          className="text-3xl flex-shrink-0 text-red-300"
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const todosData = await getTodos();
    setTodos(todosData.Afaires);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newTodo, done: false }),
      });

      if (response.ok) {
        console.log("Todo added successfully");
        setNewTodo("");
        fetchTodos();
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="">
          <p className="boxxy baslik">{"/"}todo</p>
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              _id={todo._id}
              done={todo.done}
              text={todo.text}
              fetchTodos={fetchTodos}
            />
          ))}
          <div className="flex mt-2">
            <textarea
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className=" boxxy-gray w-2/3 h-24 text-3xl resize"
              placeholder="Add something to do"
              onKeyDownCapture={(e) => {
                if (e.key === "Enter") {
                  handleAddTodo();
                }
              }}
            />
          </div>
          <button
            onClick={handleAddTodo}
            className=" bg-slate-200 align-middle rounded-md my-3 px-2 text-gray-900 border border-gray-900 font-semibold hover:border-2 text-3xl"
          >
            add
          </button>
        </div>
      </div>
    </>
  );
}
