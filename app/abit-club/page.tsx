import PageHeader from "@/components/PageHeader";

export default function AbitClub() {
  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="ABIT Club"
        subtitle="The student club of the BICTE programme"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-stone sm:text-base">
            ABIT Club brings BICTE students together for workshops, bootcamps
            and tech events across the campus. Details coming soon.
          </p>
        </div>
      </section>
    </>
  );
}