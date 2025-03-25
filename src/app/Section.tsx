import React from "react";

export default function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <>
      <h3 className="uppercase font-bold text-sm px-8 py-4 mb-8 w-screen sticky top-0 backdrop-blur lg:hidden">
        {title}
      </h3>
      <div className="px-8">{content}</div>
    </>
  );
}
