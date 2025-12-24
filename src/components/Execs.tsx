"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Exec = {
	// duplicated this to avoid execssive importing down the component tree.
	name: string;
	title: string;
	src: string;
	alt: string;
	url: string;
	bgColor: string;
};

export default function Execs({ execs }: { execs: Exec[] }) {
	return (
		<div className="flex flex-wrap justify-center items-center mx-auto col w-full">
			{execs.map((data: Exec, index) => (
				<div key={index}>
					<Tilt
						glareEnable={true}
						glareColor={data.bgColor}
						scale={1.5}
						transitionSpeed={600}
						tiltMaxAngleX={25}
						tiltMaxAngleY={25}
						className="flex-shrink-0 m-10 rounded-xl"
					>
						{data.url ? (
							<a
								className="flex z-50 flex-col justify-center items-center"
								href={"https://" + data.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									width={100}
									height={100}
									alt={data.alt}
									src={data.src || "/blank.webp"}
									unoptimized={true}
									className="object-cover my-2 w-40 h-40 text-black rounded-xl"
								/>
								<div className="p-1 my-3 text-center text-black">
									<h1 className="block text-3xl font-semibold">{data.name}</h1>
									<h2 className="px-3 pt-1 mt-1 text-lg leading-tight text-center">
										{data.title}
									</h2>
								</div>
							</a>
						) : (
							<div className="flex z-50 flex-col justify-center items-center">
								<Image
									width={240}
									height={320}
									alt={data.alt}
									src={data.src || "/blank.webp"}
									className="object-cover my-2 w-40 h-40 text-black rounded-xl"
								/>
								<div className="p-1 my-3 text-center text-black">
									<h1 className="block text-2xl font-semibold">{data.name}</h1>
									<h2 className="px-3 pt-1 mt-1 text-lg leading-tight text-center">
										{data.title}
									</h2>
								</div>
							</div>
						)}
					</Tilt>
				</div>
			))}
		</div>
	);
}
