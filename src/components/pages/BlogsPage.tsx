'use client';

import { koulen } from "@/lib/fonts";
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogs';
import { BlogCard } from '../BlogCard';

export function BlogsPage() {
	return (
		<main className="min-h-screen pt-[88px]">
			{/* Header */}
			<section className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className={`text-3xl sm:text-4xl lg:text-5xl mb-4 ${koulen.className}`}
					>
						Blog
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="text-xl text-muted-foreground max-w-2xl"
					>
						Articles, guides, and updates on technology
					</motion.p>
				</div>
			</section>

			{/* Blog Posts List */}
			<section className="py-16 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-8">
						{blogPosts.map((post, index) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<BlogCard post={post} />
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}