export default function MetricStrip({ items, className = "" }) {
  const gridClass =
    items.length >= 6
      ? "lg:grid-cols-6"
      : items.length === 5
      ? "lg:grid-cols-5"
      : items.length === 4
      ? "lg:grid-cols-4"
      : items.length === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-2";

  return (
    <div
      className={`
        grid
        overflow-hidden
        rounded-2xl
        border
        border-blue-100
        bg-white
        shadow-sm
        sm:grid-cols-2
        ${gridClass}
        ${className}
      `}
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              flex
              min-h-[140px]
              flex-col
              items-center
              justify-center
              gap-3
              border-b
              border-slate-100
              p-5
              text-center
              last:border-0
              sm:border-r
              lg:border-b-0
            "
          >
            {Icon && (
              <span
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-700
                "
              >
                <Icon size={21} />
              </span>
            )}

            <div>
              <div className="text-2xl font-black text-blue-800">
                {item.value}
              </div>

              <p className="mt-1 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}