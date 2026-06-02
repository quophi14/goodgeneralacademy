import React from "react";
import Title from "./Title";

const Academics = () => {
  return (
    <div id="academics" className="py-16 bg-gray-50 dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Our Academic Program
        </h2>

        {/* GES Curriculum Levels */}
        <div 
        className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-blue-600 hover:scale-105 cursor-pointer transition-transform duration-500">
            <h3 className="font-bold text-xl mb-2">Creche & Nursery</h3>
            <p className="text-gray-600 text-sm">
              Foundational growth through play-based learning and sensory
              activities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-green-600 hover:scale-105 cursor-pointer transition-transform duration-500">
            <h3 className="font-bold text-xl mb-2">Primary School</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive GES curriculum focusing on literacy, numeracy, and
              science.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-yellow-600 hover:scale-105 cursor-pointer transition-transform duration-500">
            <h3 className="font-bold text-xl mb-2">Junior High (JHS)</h3>
            <p className="text-gray-600 text-sm">
              Rigorous academic training designed to excel in the BECE
              examinations.
            </p>
          </div>
        </div>

        {/* Extra-Curricular Highlight */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-blue-900">
              Holistic Development
            </h3>
            <p className="text-blue-800">
              We offer specialized training in <strong>Piano</strong>,{" "}
              <strong>Cooking</strong>, <strong>Beads Making</strong> and{" "}
              <strong>Ballet</strong> to nurture creativity.
            </p>
          </div>
          <span className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 cursor-pointer transition-transform duration-500">
            Extra-Curricular
          </span>
        </div>
      </div>
    </div>
  );
};

export default Academics;
