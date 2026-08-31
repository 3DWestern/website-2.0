import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative shrink-0 w-45 h-10 ">
      <Image
        src="/full-logo.png"
        alt="Makerspaces"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
        className="object-cover"
        loading="eager"
      ></Image>
    </div>
  );
}
