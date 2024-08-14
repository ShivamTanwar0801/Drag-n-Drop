import React, { useCallback, useEffect } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Position,
  ConnectionMode,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/base.css";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const Flow = ({ nodesList }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  useEffect(() => {
    setNodes(nodesList);
  }, [nodesList]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      connectionMode={ConnectionMode.Loose}
      className="bg-teal-200"
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
