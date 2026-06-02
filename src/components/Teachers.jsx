import { teamData } from "../assets/assets";
import { motion } from "motion/react";


const Teachers = () => {
  

  return (
    <section className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
          initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6 }}
        viewport={{once: true}}
          className="text-4xl font-extrabold text-slate-900 mb-4 dark:text-gray-50">
            Meet The Hearts Behind the Classroom
          </motion.h2>
          <motion.p 
          initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:0.2 }}
        viewport={{once: true}}
          className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-gray-300">
            Meet the professional mentors shaping the next generation through excellence and innovation. Dedicated to nurturing every child from Creche to JHS with passion, discipline, and care..
          </motion.p>
        </div>

        {/* Teachers Grid */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 scrollbar-hide">
          {teamData.map((teacher, index) => (
  <div
    key={index}
    className="min-w-[280px] sm:min-w-0 snap-center bg-white p-5 rounded-xl border border-slate-100 shadow-sm dark:border-gray-700 dark:bg-gray-900 transition-transform duration-500 hover:scale-105 cursor-pointer text-center"
  >
    <div className="flex justify-center mb-4">
      <img
        src={teacher.image}
        className="w-32 h-32 object-cover rounded-full border-4 border-slate-100 dark:border-gray-700"
        alt={teacher.name}
      />
    </div>

    <h3 className="font-bold text-slate-900 text-lg dark:text-white">
      {teacher.name}
    </h3>

    <p className="text-blue-600 text-sm font-medium capitalize dark:text-gray-300 mt-1">
      {teacher.role}
    </p>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;