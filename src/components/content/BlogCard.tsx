'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/components/data/blogs';

interface BlogCardProps {
	post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
	return (
		<article className="flex flex-col sm:flex-row gap-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
			{/* Thumbnail */}
			<div className="relative w-full sm:w-72 shrink-0 min-h-[220px] sm:min-h-0">
				<Image
					src={post.image}
					alt={post.alt}
					fill
					sizes="(max-width: 640px) 100vw, 288px"
					className="object-cover"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center gap-3 py-6 pr-6 pl-6 sm:pl-0">
				{/* Date */}
				<span className="text-xs text-slate-400">{post.date}</span>

				{/* Title */}
				<h3 className="text-2xl font-bold leading-tight text-slate-900">
					{post.title}
				</h3>

				{/* Text */}
				<p className="text-sm text-slate-500 leading-relaxed line-clamp-4">
					{post.excerpt}
				</p>

				{/* CTA */}
				<Link
					href={post.href}
					className="inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-2 text-slate-800 hover:text-slate-600 transition-colors w-fit mt-1"
				>
					Read Post
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.22 14.78a.75.75 0 0 1 0-1.06L11.44 7.5H6.75a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V8.56l-6.22 6.22a.75.75 0 0 1-1.06 0Z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>
		</article>
	);
}