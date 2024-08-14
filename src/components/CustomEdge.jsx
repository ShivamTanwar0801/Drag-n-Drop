import {
  BaseEdge,
  EdgeLabelRenderer,
  useReactFlow,
  getBezierPath
} from "@xyflow/react";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <button
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan w-[20px] h-[20px] bg-[#eee] border border-solid border-white cursor-pointer rounded-[50%] text-[12px] leading-[1] hover:shadow-[0_0_6px_2px_rgba(0,0,0,0.08)]"
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        >
          x
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
