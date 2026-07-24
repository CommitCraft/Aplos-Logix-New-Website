import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter — counts up from 0 to `end` when the element scrolls into view.
 * Supports integer values (no decimals) and decimal values (1 decimal place).
 *
 * @param {number}  end      - Target number to count to
 * @param {string}  suffix   - Text appended after the number (e.g. "+", "%", "K+")
 * @param {number}  duration - Animation duration in milliseconds (default 2000)
 */
export default function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);
  const isDecimal = !Number.isInteger(end);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: decelerates near the end
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            setDisplay(
              isDecimal ? current.toFixed(1) : Math.floor(current).toString()
            );

            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(isDecimal ? end.toFixed(1) : end.toString());
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, isDecimal]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}
