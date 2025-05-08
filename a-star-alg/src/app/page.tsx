import { GraphVisualizer } from "@/components/graph-visualizer";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col gap-[32px] justify-center items-center">
			<GraphVisualizer />
		</main>
	);
}
