"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  // submiting the form
  const submitHandler = (e) => {
    e.preventDefault(); // prevent the form from submitting
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    setTitle("");
    setDesc("");
  };

  // delete the task
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  // displaying the task
  let renderTask = <h2>No task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/4">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-400 text-white px-4 py-2 rounded font-bold"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="p-5 bg-black text-white text-center text-5xl font-bold">
        Edson's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task here"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter description here"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-3"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 m-5 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-5 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
