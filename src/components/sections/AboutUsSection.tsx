import Image from "next/image";
import Link from "next/link";

export function AboutUsSection() {
  return (
    <section className="w-full bg-[#151A20] px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Image — top on mobile, right on desktop */}
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <div className="clip-corners relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/morrissette.png"
              alt="Rendering of the 3D Western makerspace building"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text — bottom on mobile, left on desktop */}
        <div className="order-2 flex flex-col items-start text-left lg:order-1 lg:w-1/2">
          <div className="mb-4 flex items-center gap-3 text-sm font-medium tracking-wider text-purple-light uppercase">
            <span className="h-px w-6 bg-purple-light" />
            Who We Are
          </div>

          <h2 className="text-white">3D Western</h2>

          <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--base-text)] sm:text-base">
            We&apos;re a student-run organization built on one idea: the
            tools to prototype, fabricate, and build shouldn&apos;t be
            locked away. Originally founded as a 3D printing club, we&apos;ve
            grown into a full makerspace.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--base-text)] sm:text-base">
            Partnered with Morrissette Entrepreneurship at Western, we now
            offer CNC, laser cutting, water jet, and woodworking — free to
            access for any student on campus.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
}