import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <h2 ref={ref} className="text-[72px] font-bold text-[#fdf0d5] leading-none">
      {count}
      {suffix}
    </h2>
  );
}

export default function Static() {
  return (
    <section className="w-full bg-[#003049] py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <Counter end={15} suffix="+" />
          <p className="text-[20px] text-[#669bbc] font-semibold mt-3">
            Years of Experience
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Counter end={100} suffix="%" />
          <p className="text-[20px] text-[#669bbc] font-semibold mt-3">
            MARA Registered (MARN 0957235)
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Counter end={500} suffix="+" />
          <p className="text-[20px] text-[#669bbc] font-semibold mt-3">
            Families Reunited
          </p>
        </div>
      </div>
    </section>
  );
}
