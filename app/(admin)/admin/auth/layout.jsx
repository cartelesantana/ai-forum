import React from "react";

export default function Layout(props) {
  return (
    <section className="section-gutter fixed inset-0 flex flex-col items-center justify-center overflow-y-auto">
      {props?.children}
    </section>
  );
}
