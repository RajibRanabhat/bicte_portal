"use client";

import { useState } from "react";
import Image from "next/image";
import { User, X } from "lucide-react";
import { faculty, type FacultyMember } from "@/data/faculty";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

export default function Faculty() {
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  return (
    <>
      <PageHeader
        image="/campus.jpg"
        title="Faculty"
        subtitle="Meet the educators behind the BICTE programme"
      />

      {/* Faculty Groups */}
      {faculty.map((group, idx) => (
        <section
          key={group.title}
          className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <Reveal>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                {group.title}
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <button
                    key={member.name}
                    onClick={() => member.photo && setSelected(member)}
                    className={`flex flex-col items-center rounded-lg border border-stone/10 bg-white p-6 text-center shadow-sm transition-transform ${
                      member.photo ? "hover:scale-[1.03] cursor-pointer" : ""
                    }`}
                  >
                    {member.photo ? (
                      <div className="relative h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 text-stone/40">
                        <User className="h-16 w-16" />
                      </div>
                    )}
                    <h3 className="mt-4 font-semibold text-navy">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary">
                      {member.designation}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* Lightbox */}
      {selected && selected.photo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/80 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.photo}
              alt={selected.name}
              className="max-h-[75vh] w-auto rounded-lg border-2 border-white/20 object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {selected.name}
              </h3>
              <p className="text-sm text-white/80">{selected.designation}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}