export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  titleClassName = "",
}) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2
        className={`mt-3 text-3xl font-black sm:text-4xl ${titleClassName}`}
      >
        {title}

        {highlight && (
          <span className="block text-orange-400">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}