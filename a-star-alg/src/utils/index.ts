import { Edge, Graph, Vertex } from "@/types";

// Create a new graph
export function createGraph(vertices: Vertex[], edges: Edge[]): Graph {
	const vmap = new Map(vertices.map((v) => [v.id, v]));
	const adj = new Map<string, Edge[]>();
	vertices.forEach((v) => adj.set(v.id, []));
	edges.forEach((e) => {
		adj.get(e.from)!.push(e);
		adj.get(e.to)!.push({ from: e.to, to: e.from, weight: e.weight });
	});
	return { vertices: vmap, edges: adj };
}

// Greedy Best-First Search (uses only heuristic h)
export function greedyBestFirst(graph: Graph, start: string, goal: string): string[] {
  const visited = new Set<string>();
  const cameFrom = new Map<string, string>();
  const open = new Set<string>([start]);

  while (open.size) {
    // pick node in open with lowest heuristic
    let current = Array.from(open).reduce((a, b) => {
      const ha = graph.vertices.get(a)!.h ?? Infinity;
      const hb = graph.vertices.get(b)!.h ?? Infinity;
      return ha < hb ? a : b;
    });
    if (current === goal) {
      const path: string[] = [];
      while (current) {
        path.unshift(current);
        current = cameFrom.get(current)!;
      }
      return path;
    }
    open.delete(current);
    visited.add(current);
    for (const e of graph.edges.get(current) || []) {
      if (!visited.has(e.to)) {
        cameFrom.set(e.to, current);
        open.add(e.to);
      }
    }
  }
  return [];
}

// BFS
export function bfs(graph: Graph, start: string): string[] {
	const visited = new Set<string>();
	const queue: string[] = [start];
	const order: string[] = [];
	visited.add(start);

	while (queue.length) {
		const v = queue.shift()!;
		order.push(v);
		for (const e of graph.edges.get(v) || []) {
			if (!visited.has(e.to)) {
				visited.add(e.to);
				queue.push(e.to);
			}
		}
	}

	return order;
}

// DFS
export function dfs(graph: Graph, start: string): string[] {
	const visited = new Set<string>();
	const order: string[] = [];

	function visit(v: string) {
		visited.add(v);
		order.push(v);
		for (const e of graph.edges.get(v) || []) {
			if (!visited.has(e.to)) visit(e.to);
		}
	}

	visit(start);
	return order;
}

// A* (using heuristic = Euclidean distance)
export function astar(graph: Graph, start: string, goal: string): string[] {
	const h = (u: Vertex, v: Vertex) => {
		const dx = u.x - v.x;
		const dy = u.y - v.y;
		return Math.hypot(dx, dy);
	};

	const open = new Set([start]);
	const cameFrom = new Map<string, string>();

	const gScore = new Map<string, number>();
	const fScore = new Map<string, number>();
	graph.vertices.forEach((_, id) => {
		gScore.set(id, Infinity);
		fScore.set(id, Infinity);
	});
	gScore.set(start, 0);
	fScore.set(start, h(graph.vertices.get(start)!, graph.vertices.get(goal)!));

	while (open.size) {
		// node in open with lowest fScore
		let current = Array.from(open).reduce((a, b) =>
			fScore.get(a)! < fScore.get(b)! ? a : b
		);
		if (current === goal) {
			const path: string[] = [];
			while (current) {
				path.unshift(current);
				current = cameFrom.get(current)!;
			}
			return path;
		}

		open.delete(current);
		for (const e of graph.edges.get(current) || []) {
			const tentative = gScore.get(current)! + e.weight;
			if (tentative < gScore.get(e.to)!) {
				cameFrom.set(e.to, current);
				gScore.set(e.to, tentative);
				fScore.set(
					e.to,
					tentative + h(graph.vertices.get(e.to)!, graph.vertices.get(goal)!)
				);
				open.add(e.to);
			}
		}
	}

	return []; // no path
}
