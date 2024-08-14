import React, { useState } from "react";

import Flow from "./components/Flow";

let x = 0;
let y = 50;

const App = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [nodes, setNodes] = useState([]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNodes((prev) => [
      ...prev,
      {
        id: Math.random().toLocaleString(),
        type: "custom",
        data: { title: title, text: text, emoji: "🤩" },
        position: { x: x, y: y },
      },
    ]);

    x = x + 200;
    y = y + 200;

    setTitle("");
    setText("");
  };

  return (
    <div className="flex bg-black/80">
      <div className="h-[100vh] w-[60%]">
        <Flow nodesList={nodes} />
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center w-[40%]"
      >
        <h1 className="text-[48px] text-blue-200 p-8">
          ReactJs Drag and Drop UI
        </h1>
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-white text-[32px] py-4 font-mono"
          >
            Title{" "}
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter your title"
            required
            onChange={titleChangeHandler}
            value={title}
            className="border border-white bg-slate-300 placeholder-black w-[400px] h-[40px] p-2"
          />
        </div>
        <div className="flex flex-col pt-6">
          <label
            htmlFor="text"
            className="text-white text-[32px] py-4 font-mono"
          >
            Text{" "}
          </label>
          <textarea
            type="text"
            id="text"
            placeholder="Enter your text"
            required
            onChange={textChangeHandler}
            value={text}
            className="border border-white bg-slate-300 placeholder-black w-[400px] h-[80px]  p-2"
          />
        </div>
        <div className="w-full flex justify-start px-[6.75rem]">
          <button className="w-[120px] h-[40px] bg-slate-300 mt-12 hover:bg-slate-500 text-[18px] rounded-md transition-colors">
            Add Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
