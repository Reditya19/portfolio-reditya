function SectionTitle({ eyebrow, children }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
    </div>
  );
}

export default SectionTitle;
