import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPost, Project } from "@/types/content";
import { formatLongDate } from "../utils";

interface LatestSectionProps {
  post: BlogPost;
  projects: Project[]; // expects the 4 most recent
}

export function LatestSection({ post, projects }: LatestSectionProps) {
  console.log(projects[1].categories[0].name)
  return (
    <section className="w-full bg-grey-bg px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <h2>Latest from 3D Western</h2>
          <p className="mt-3 text-[15px] text-secondary-text sm:text-base">
            New exciting projects and blogs for tips, breakdowns, and more
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Blog post — left */}
          <Link
            href={`/blogs/${post.slug}`}
            className="clip-corners-lg group relative flex flex-col overflow-hidden bg-black-bg"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden lg:aspect-auto lg:flex-1">
              {post.coverImage?.url && (
                <Image
                  src={post.coverImage.url}
                  alt={post.coverImage.alt ?? post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "0 -30px 40px 0 #0B0D10 inset" }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <div className="text-sm font-medium text-purple-light">
                {formatLongDate(post.date)}
              </div>
              <h3 className="mt-2">{post.title}</h3>
              {post.excerpt && (
                <p className="mt-3 text-[15px] leading-relaxed text-secondary-text sm:text-base">
                  {post.excerpt}
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-text">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Projects — right, 2x2 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="clip-corners-sm group relative flex flex-col overflow-hidden bg-black-bg"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ boxShadow: "0 -30px 30px 0 #0B0D10 inset" }}
                  />
                  {project.categories[0] && (
                    <span
                      className="absolute top-2 right-2 flex px-2.5 py-1 items-center justify-center gap-2 rounded-sm text-[11px] font-medium gradient"
                    >
                      {project.categories[0].name.toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold ">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-secondary-text">
                    {project.creator}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
