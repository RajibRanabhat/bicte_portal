import PageHeader from "@/components/PageHeader";

export default function MajorActivities() {
  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Major Activities"
        subtitle="Events, workshops and achievements of the BICTE programme"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-stone sm:text-base">
            From bootcamps and excursions to recognition and awards, this is
            where BICTE life happens. Details coming soon.
          </p>
        </div>
      </section>
    </>
  );
}