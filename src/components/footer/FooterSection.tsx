interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSecton({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col text-small justify-between gap-2 sm:gap-6">
      <span className="text-base text-secondary-text">{title}</span>
      {children}
    </div>
  );
}
