import { bigstats } from "@/components/data/bigtext";
import { koulen } from "@/lib/fonts";

export default function BigTextSection() {
	return (
		<section className="flex w-screen min-h-screen bg-blue-700 flex-col items-center justify-start text-center gap-y-5">
			<h1 className={`my-10 text-9xl ${koulen.className}`}>3D WESTERN</h1>
			<p className={`text-3xl ${koulen.className}`}>{bigstats.description}</p>

			<div className="w-full flex flex-row items-end justify-center gap-x-5">
				<span><p>{bigstats.projects}</p> Projects Made</span>
				<span><p>{bigstats.projects}</p> Projects Made</span>
				<span><p>{bigstats.projects}</p> Projects Made</span>
			</div>
		</section>
	);
}
