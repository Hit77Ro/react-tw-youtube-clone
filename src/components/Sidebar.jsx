/* eslint-disable react/prop-types */
import { categories } from "../utils";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="top-[70px] z-10 flex gap-4 overflow-auto bg-black-gradient-2 p-2 sm:pt-6 py-6 sm:fixed left-0 sm:h-[calc(100vh-70px)] sm:w-[200px] sm:flex-col">
      {categories.map((cat) => (
        <button
          className={`flex items-center gap-4 rounded-lg p-2 whitespace-nowrap sm:py-3 text-white ${
            selectedCategory === cat.name ? "bg-red-500" : ""
          }`}
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span> {cat.icon} </span>
          <span> {cat.name} </span>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
