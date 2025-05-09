"use client";

import React, { useState } from "react";
import ReactFlow, {
	Node,
	Edge as RFEdge,
	Controls,
	MiniMap,
} from "react-flow-renderer";
import { createGraph, bfs, dfs, astar, greedyBestFirst } from "@/utils";
import { edges, goalVertex, startVertex, vertices } from "@/constants";

export const GraphVisualizer: React.FC = () => {
	const graph = createGraph(vertices, edges);

	// React Flow nodes & edges
	const flowNodes: Node[] = vertices.map((v) => ({
		id: v.id,
		data: { label: v.id },
		position: { x: v.x, y: v.y },
	}));
	const flowEdges: RFEdge[] = edges.map((e) => ({
		id: `${e.from}-${e.to}`,
		source: e.from,
		target: e.to,
		label: String(e.weight),
	}));

	// Algorithm state
	const [path, setPath] = useState<string[]>([]);
	const start = startVertex.id;
	const goal = goalVertex.id;

	return (
		<div className="w-full h-screen">
			<div className="flex flex-wrap p-4 w-full bg-gray-800 items-center justify-center gap-6">
				<button
					onClick={() => setPath(greedyBestFirst(graph, start, goal))}
					className="btn btn-primary">
					Greedy Best-First
				</button>
				<button
					onClick={() => setPath(bfs(graph, start))}
					className="btn btn-primary">
					BFS
				</button>
				<button
					onClick={() => setPath(dfs(graph, start))}
					className="btn btn-primary">
					DFS
				</button>
				<button
					onClick={() => setPath(astar(graph, start, goal))}
					className="btn btn-primary">
					A*
				</button>
			</div>

			<div className="p-4 bg-gray-900">
				<h2 className="text-lg font-bold">Result Path:</h2>
				<p>{path.join(" → ")}</p>
			</div>

			<ReactFlow nodes={flowNodes} edges={flowEdges} fitView>
				<MiniMap />
				<Controls />
			</ReactFlow>
		</div>
	);
};
