"use client";
import { FeaturedProjectSpotlight } from "@/components/content/FeaturedProjectSpotlight";
import { useProjects } from "@/context/ProjectContext";
import { FilterBar } from "../content/FilterBar";
import PageHeader from "../content/Header";
import { ProjectsGrid } from "../content/ProjectsGrid";
import { CollectionFooter } from "../content/CollectionFooter";

export function ProjectsPage() {
  const {
    categories,
    featured,
    filtered,
    search,
    category,
    loading,
    hasMore,
    error,
    setSearch,
    setCategory,
    loadMore,
  } = useProjects();

  const handleReset = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <main className="min-h-screen pt-[88px]">
      {/* Header */}
      <PageHeader
        title="Projects Showcase"
        description="A browsable look at what the makerspace has built, newest first"
      ></PageHeader>
      {/* Featured spotlight */}
      {featured[0] && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedProjectSpotlight project={featured[0]} />
          </div>
        </section>
      )}
      {/* Filters */}
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search projects..."
        category={category}
        onCategoryChange={setCategory}
        options={categories}
        resultCount={filtered.length}
        resultLabel="project"
        includeAllOption
      />
      {/* Grid */}
      <section className="py-16 bg-grey-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={filtered} onClearFilters={handleReset} />

          {filtered.length > 0 && (
            <CollectionFooter
              error={error}
              loading={loading}
              collection="projects"
              hasMore={hasMore}
              onLoadMore={loadMore}
            ></CollectionFooter>
          )}
        </div>
      </section>
    </main>
  );
}
