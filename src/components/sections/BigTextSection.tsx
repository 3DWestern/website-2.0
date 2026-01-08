import { bigstats } from "@/components/data/bigtext";
import { koulen } from "@/lib/fonts";

export default function BigTextSection() {
	return (
		<section className="flex w-screen min-h-screen flex-col items-center justify-between text-center py-20">
			<div className="mx-auto flex flex-col items-center justify-center gap-y-10">
				<h1 className={`text-9xl ${koulen.className}`}>3D WESTERN</h1>
				<div className="p-4 w-4/5 mx-auto text-left flex flex-col items-start justify-center space-y-6 ">
					<p className="font-bold text-black/50 text-2xl">{bigstats.description}</p>
					<p className="font-bold text-black/50 text-2xl">{bigstats.details}</p>
				</div>
			</div>

			<div className="w-full flex flex-row items-center justify-center gap-y-10">
				<div className="w-full text-center">
					<p className={`text-8xl font-bold ${koulen.className}`}>{bigstats.projects}</p>
					<span className="text-3xl">Projects Made</span>
				</div>
				<div className="w-full text-center">
					<p className={`text-8xl font-bold ${koulen.className}`}>{bigstats.events}</p>
					<span className="text-3xl">Events Held</span>
				</div>
				<div className="w-full text-center">
					<p className={`text-8xl font-bold ${koulen.className}`}>{bigstats.visits}</p>
					<span className="text-3xl">Active Visits</span>
				</div>
			</div>
		</section>
	);
}
