import React, { memo, useState } from "react";
import { Handle, Position, NodeResizeControl } from "@xyflow/react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const controlStyle = {
  background: "transparent",
  border: "none",
};

function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "absolute", right: 5, bottom: 5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}

function CustomNode({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NodeResizeControl
        style={controlStyle}
        minWidth={200}
        maxWidth={500}
        minHeight={300}
        maxHeight={300}
      >
        <ResizeIcon />
      </NodeResizeControl>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />

      <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 overflow-hidden max-w-[500px] h-[300px]">
        <div className="flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
            {data.emoji}
          </div>
          <div className="ml-2">
            <div className="text-2xl font-bold">{data.title}</div>
            <div className="text-black pb-8 max-h-[170px]">{data.text}</div>
          </div>
          <div className="w-full px-4">
            <button
              className="backdrop-blur-sm w-full bg-teal-700/30 hover:bg-teal-700/60 rounded-lg text-[20px] h-full font-mono text-black"
              onClick={() => setOpen(true)}
            >
              Show more
            </button>
          </div>
          {createPortal(
            <Modal open={open} onClose={() => setOpen(false)}>
              <div className="flex justify-center items-center text-center flex-col">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-center">{data.text}</p>
              </div>
            </Modal>,
            document.body
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </>
  );
}

export default memo(CustomNode);
