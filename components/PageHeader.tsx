import Image from "next/image";

export default function PageHeader({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative py-24 text-center text-white">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-white/85 sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}