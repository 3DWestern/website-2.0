'use client';


import { useId, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { koulen } from '@/lib/fonts';
import { blogPosts, ALL_CATEGORIES } from '../data/blogs';
import type { Category } from '../data/blogs';
import { BlogGrid } from '../content/BlogGrid';

const PAGE_SIZE = 4;

export function BlogsPage() {
	const searchId = useId();
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState<Category>('All');
	const [page, setPage] = useState(1);

	// Reset to page 1 whenever filters change
	const handleSearch = (value: string) => {
		setSearch(value);
		setPage(1);
	};
	const handleCategory = (value: Category) => {
		setCategory(value);
		setPage(1);
	};

	// Filter + search
	const filtered = useMemo(() => {
		const q = search.toLowerCase().trim();
		return blogPosts.filter((p) => {
			const matchesCategory = category === 'All' || p.category === category;
			const matchesSearch =
				!q ||
				p.title.toLowerCase().includes(q) ||
				p.excerpt.toLowerCase().includes(q) ||
				p.tags?.some((t) => t.toLowerCase().includes(q));
			return matchesCategory && matchesSearch;
		});
	}, [search, category]);

	// Paginate
	const visible = filtered.slice(0, page * PAGE_SIZE);
	const hasMore = visible.length < filtered.length;

	return (
		<main className="min-h-screen pt-[88px]">
			{/* ── Header ── */}
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
						transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="text-xl text-muted-foreground max-w-2xl"
					>
						Articles, guides, and updates on technology
					</motion.p>
				</div>
			</section>

			{/* ── Filter bar ── */}
			<section className="bg-white border-t border-slate-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

						{/* Search input */}
						<div className="relative w-full sm:w-72">
							<label htmlFor={searchId} className="sr-only">
								Search posts
							</label>
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
								aria-hidden="true"
							/>
							<input
								id={searchId}
								type="text"
								placeholder="Search posts…"
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-slate-200 bg-white
								           placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400
								           focus:border-transparent transition"
							/>
							{search && (
								<button
									onClick={() => handleSearch('')}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
									aria-label="Clear search"
								>
									<X className="w-4 h-4" />
								</button>
							)}
						</div>

						{/* Category pills */}
						<div
							role="group"
							aria-label="Filter by category"
							className="flex flex-wrap gap-2"
						>
							{ALL_CATEGORIES.map((cat) => (
								<button
									key={cat}
									onClick={() => handleCategory(cat as Category)}
									aria-pressed={category === cat}
									className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide
									            transition-colors focus-visible:outline-none focus-visible:ring-2
									            focus-visible:ring-slate-400
									            ${category === cat
										? 'bg-slate-900 text-white'
										: 'bg-slate-100 text-slate-600 hover:bg-slate-200'
									}`}
								>
									{cat}
								</button>
							))}
						</div>

						{/* Result count */}
						<span className="ml-auto text-xs text-slate-400 whitespace-nowrap hidden sm:block">
							{filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
						</span>
					</div>
				</div>
			</section>

			{/* ── Post list ── */}
			<section className="py-16 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<BlogGrid posts={visible} />

					{/* Load more */}
					{hasMore && (
						<div className="mt-12 flex justify-center">
							<button
								onClick={() => setPage((p) => p + 1)}
								className="px-8 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold
								           hover:bg-slate-700 active:scale-95 transition-all focus-visible:outline-none
								           focus-visible:ring-2 focus-visible:ring-slate-400"
							>
								Load more posts
							</button>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}