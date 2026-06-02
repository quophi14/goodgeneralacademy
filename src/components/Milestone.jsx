import React, { useEffect, useRef, useState } from 'react'

const Countup = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // 👁️ Detect when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 }, // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Count animation
  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, end, duration]);

  return <span ref={ref}>{count}</span>;
};




const Milestone = () => {
    const data = [
        {number: 300, label: "Students Enrolled", suffix: "+"},
        {number: 7, label: "Years in Operations", suffix: "+"},
        {number: 250, label: "Happy Parents", suffix: "+"},
    ]
  return (
    <div className='py-10  bg-secondary dark:bg-[#f3f4f6] mt-5'>
        <div className='flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-8 text-center'>
            {data.map((item, index) => (
                <div key={index} className='p-8'>
                    <h2 className='text-4xl text-white font-bold dark:text-[#1e3a8a]'>
                        <Countup end={item.number} />
                        {item.suffix}
                    </h2>
                    <p className='mt-2 text-gray-300 dark:text-gray-600'>{item.label}</p>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Milestone