"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { koulen } from "@/lib/fonts";
import {
  projects as allProjects,
  categories,
  type ProjectCategory,
} from "@/components/data/projects";
import ProjectShowcaseCard from "@/components/content/ProjectShowcaseCard";
import { FeaturedProjectSpotlight } from "@/components/content/FeaturedProjectSpotlight";
import { ProjectFilterBar } from "@/components/content/ProjectFilterBar";

const PAGE_SIZE = 9;

function ProjectCardSkeleton({ tall }: { tall?: boolean }) {
  return (
    <div className="mb-6 break-inside-avoid rounded-xl bg-white shadow-sm overflow-hidden animate-pulse">
      <div className={`w-full ${tall ? "h-72" : "h-48"} bg-slate-200`} />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-5 w-3/4 bg-slate-200 rounded" />
        <div className="h-3 w-1/2 bg-slate-200 rounded" />
        <div className="h-3 w-full bg-slate-200 rounded" />
        <div className="h-3 w-5/6 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [page, setPage] = useState(1);

  // Mimics the delay that will come from Sam's real fetch layer once it lands.
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Newest first, everywhere on this page.
  const sortedProjects = useMemo(
    () =>
      [...allProjects].sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
      ),
    [],
  );

  const featured = useMemo(
    () => sortedProjects.filter((p) => p.featured),
    [sortedProjects],
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategory = (value: ProjectCategory) => {
    setCategory(value);
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return sortedProjects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.creator.toLowerCase().includes(q) ||
        p.contributors?.some((c) => c.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [sortedProjects, search, category]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setPage(1);
  };

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
            Projects Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            A browsable look at what the makerspace has built, newest first
          </motion.p>
        </div>
      </section>

      {/* Featured spotlight */}
      {!isLoading && featured.length > 0 && (
        <section className="bg-white pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
            {featured.slice(0, 2).map((project, i) => (
              <FeaturedProjectSpotlight key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <ProjectFilterBar
        search={search}
        onSearchChange={handleSearch}
        category={category}
        onCategoryChange={handleCategory}
        categories={categories}
        resultCount={filtered.length}
      />

      {/* Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} tall={i % 2 === 0} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {visible.map((project) => (
                    <ProjectShowcaseCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </div>
              {hasMore && (
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="px-8 py-3 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  >
                    Load more projects
                  </button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-24 gap-4"
            >
              <PackageSearch className="w-10 h-10 text-slate-300" aria-hidden="true" />
              <p className="text-slate-500 max-w-sm">
                No projects match those filters. Try a different category or search term.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}