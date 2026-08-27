export default function CategoryPill({
  title,
  handleCategory,
  category,
}: {
  title: string;
  handleCategory: (value: string) => void;
  category: string;
}) {
  return (
    <button
      onClick={() => handleCategory(title)}
      aria-pressed={category === title}
      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide
                    transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-purple-400
                    ${
                      category === title
                        ? "gradient"
                        : "bg-black-bg text-secondary-text hover:bg-purple-dark/30"
                    }`}
    >
      {title}
    </button>
  );
}
