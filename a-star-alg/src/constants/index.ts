import { Vertex, Edge } from "@/types";

export const startVertex: Vertex = {
	id: "RaziUniversity",
	x: -1100,
	y: -300,
	h: 1.4,
};
export const goalVertex: Vertex = { id: "FerdowsiSquare", x: 0, y: 0, h: 1.8 };

export const vertices: Vertex[] = [
	startVertex,
	{ id: "AzadeganSquare", x: 100, y: 0, h: 0.7 },
	{ id: "Mahidasht", x: 200, y: 0, h: 1.2 },
	{ id: "SarabGhanbar", x: 300, y: 0, h: 3.2 },
	{ id: "Delgosha", x: 400, y: 0, h: 14.6 },
	{ id: "AshrafiEsfahani", x: -100, y: -100, h: 18.2 },
	{ id: "Beltway", x: 600, y: 0, h: 16 },
	{ id: "Halashi", x: 700, y: 0, h: 2.3 },
	{ id: "Pirozi", x: 800, y: 0, h: 0.2 },
	{ id: "ImamKhomaini", x: 900, y: 0, h: 0.5 },
	{ id: "SayadShirazi", x: 1000, y: 0, h: 2.6 },
	{ id: "ZakariayRazi", x: 1100, y: 0, h: 9.3 },
	{ id: "Rodaki", x: 1300, y: 0, h: 1.2 },
	{ id: "Kashani", x: 1400, y: 0, h: 0.3 },
	{ id: "Rajaee", x: 1500, y: 0, h: 2.3 },
	{ id: "Jalalieh", x: 1600, y: 0, h: 2.6 },
	goalVertex,
];

export const edges: Edge[] = [
	{ from: "FerdowsiSquare", to: "AzadeganSquare", weight: 1.8 },
	{ from: "AzadeganSquare", to: "Mahidasht", weight: 0.7 },
	{ from: "Mahidasht", to: "SarabGhanbar", weight: 1.2 },
	{ from: "SarabGhanbar", to: "Delgosha", weight: 3.2 },
	{ from: "Delgosha", to: "AshrafiEsfahani", weight: 14.6 },
	{ from: "AshrafiEsfahani", to: "Beltway", weight: 18.2 },
	{ from: "Beltway", to: "Halashi", weight: 16 },
	{ from: "Halashi", to: "Pirozi", weight: 2.3 },
	{ from: "Pirozi", to: "ImamKhomaini", weight: 0.2 },
	{ from: "ImamKhomaini", to: "SayadShirazi", weight: 0.5 },
	{ from: "SayadShirazi", to: "ZakariayRazi", weight: 2.6 },
	{ from: "ZakariayRazi", to: "RaziUniversity", weight: 0.3 },
	{ from: "RaziUniversity", to: "Rodaki", weight: 1.4 },
	{ from: "Rodaki", to: "Kashani", weight: 1.2 },
	{ from: "Kashani", to: "Rajaee", weight: 0.3 },
	{ from: "Rajaee", to: "Jalalieh", weight: 2.3 },
];
