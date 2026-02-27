"use client";
import { useState } from "react";
const DropdownModule = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleDropdown = ({ index }: { index: number }) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const dropdownData = [
    {
      title: "Reparation, underhåll och återbruk",
      content:
        "This product has been transported through several stages of the supply chain — from raw material sourcing to manufacturing and final delivery. Each step adds to the total distance traveled.",
    },
    {
      title: "Material och tillverkning:",
      content:
        "Transport contributes significantly to carbon emissions. Understanding the journey of products helps consumers make more environmentally conscious choices.",
    },
    {
      title: "Potential för återvinning",
      content:
        "Modern supply chains often span multiple countries and continents, involving raw material extraction, processing, manufacturing, warehousing, and distribution before reaching the end consumer.",
    },
    {
      title: "Miljöpåverkan",
      content:
        "Modern supply chains often span multiple countries and continents, involving raw material extraction, processing, manufacturing, warehousing, and distribution before reaching the end consumer.",
    },
    {
      title: "Socialt Ansvar",
      content:
        "Modern supply chains often span multiple countries and continents, involving raw material extraction, processing, manufacturing, warehousing, and distribution before reaching the end consumer.",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-2">
      {dropdownData.map((item, index) => (
        <div key={index} className="mb-3 rounded-xl overflow-hidden shadow-md">
          <button
            onClick={() => toggleDropdown({ index })}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-4 flex justify-between items-center transition-colors duration-300"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span
              className={`text-xl transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`bg-emerald-50 transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-96 py-6 px-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-800 text-base leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownModule;
