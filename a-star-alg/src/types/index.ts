export interface Vertex {
	id: string;
	x: number; // UI position (optional)
	y: number;
	h?: number; // heuristic (for greedy best-first)
}

export interface Edge {
	from: string;
	to: string;
	weight: number;
}

export interface Graph {
	vertices: Map<string, Vertex>;
	edges: Map<string, Edge[]>; // adjacency list
}
