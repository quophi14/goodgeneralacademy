import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mrs. Felecia Boateng",
    role: "JHS 2 Parent",
    image: "/images/mummy_2.png",
    stars: 4,
    comment: "The transition from Primary to JHS was seamless. The teachers really care about the individual progress of each child."
  },
  {
    name: "Mr. David Mensah",
    role: "Creche Parent",
    image: "/images/daddy_1.png",
    stars: 5,
    comment: "I love the 'learning through play' approach. My daughter looks forward to school every single morning!"
  },
  {
    name: "Mrs. Elena Quansah",
    role: "Primary 4 Parent",
    image: "/images/mummy_3.png",
    stars: 5,
    comment: "The extra-curricular ballet classes have greatly improved my daughter's confidence and posture. Highly recommended!"
  },
  {
    name: "Mrs. Harriet Adjei",
    role: "Primary 4 Parent",
    image: "/images/mummy_4.png",
    stars: 5,
    comment: "As a single parent, you want the best for your child without financial strain. This school provides a top-tier holistic education at competitive rates, proving that excellence doesn't always have to come with an exorbitant price tag."
  },
  {
    name: "Mr Anthony Nelson",
    role: "JHS 3 Parent",
    image: "/images/daddy_3.png",
    stars: 4,
    comment: "Finding a school that offers both the GES curriculum and professional ballet at such a reasonable investment was a blessing. They haven't compromised on quality, yet they remain deeply considerate of family budgets."
  }
  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  }, []);

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-12 uppercase">
          Parental Feedback
        </h2>

        <div className="relative group">
          {/* Main Card */}
          <div className={`bg-white dark:bg-slate-800 p-8 md:p-12 rounded-4xl shadow-2xl shadow-blue-100 dark:shadow-none transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex flex-col items-center">
              
              {/* Image with Professional Rounded Frame */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full shadow-lg">
                  <Quote size={14} className="text-white" />
                </div>
              </div>

              {/* Gold Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed mb-8 max-w-2xl">
                "{testimonials[currentIndex].comment}"
              </p>

              {/* Attribution */}
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mt-1 uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Manual Controls */}
          <button onClick={prevSlide} className="absolute -left-5 md:-left-17.5 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-blue-600 transition-all">
            <ChevronLeft size={44} strokeWidth={1.5} />
          </button>
          <button onClick={nextSlide} className="absolute -right-5 md:-right-17.5 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-blue-600 transition-all">
            <ChevronRight size={44} strokeWidth={1.5} />
          </button>

          {/* Interactive Progress Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-blue-600 w-10' : 'bg-slate-300 dark:bg-slate-700 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
