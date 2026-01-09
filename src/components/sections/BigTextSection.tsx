import { bigstats } from "@/components/data/bigtext";
import { koulen } from "@/lib/fonts";

export default function BigTextSection() {
	return (
		<section className="flex w-screen min-h-screen flex-col items-center text-center py-20 gap-y-20">
			<div className="mx-auto flex flex-col items-center justify-center gap-y-10 sm:gap-y-20">
				<h1 className={`text-5xl sm:text-7xl md:text-9xl ${koulen.className}`}>3D WESTERN</h1>
				<div className="font-bold text-black/50 p-4 w-5/6 sm:w-4/6 mx-auto text-center sm:text-left flex flex-col items-start justify-center space-y-6 md:space-y-12 ">
					<p className="text-lg sm:text-xl md:text-2xl">{bigstats.description}</p>
					<p className="text-lg sm:text-xl md:text-2xl">{bigstats.details}</p>
				</div>
			</div>

			<div className="w-full flex flex-row items-center justify-center gap-y-10">
				<div className="w-full text-center">
					<p className={`text-4xl sm:text-6xl md:text-8xl font-bold ${koulen.className}`}>{bigstats.projects}</p>
					<span className="text-xl sm:text-2xl md:text-3xl">Projects Made</span>
				</div>
				<div className="w-full text-center">
					<p className={`text-4xl sm:text-6xl md:text-8xl font-bold ${koulen.className}`}>{bigstats.events}</p>
					<span className="text-xl sm:text-2xl md:text-3xl">Events Held</span>
				</div>
				<div className="w-full text-center">
					<p className={`text-4xl sm:text-6xl md:text-8xl font-bold ${koulen.className}`}>{bigstats.visits}</p>
					<span className="text-xl sm:text-2xl md:text-3xl">Active Visits</span>
				</div>
			</div>
		</section>
	);
}
