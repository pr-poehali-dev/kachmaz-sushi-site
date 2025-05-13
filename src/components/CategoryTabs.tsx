import React from "react";
import Icon from "@/components/ui/icon";

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: "sushi", name: "Суши", icon: "Fish" },
  { id: "rolls", name: "Роллы", icon: "CircleDot" },
  { id: "sets", name: "Сеты", icon: "PackageOpen" },
  { id: "soups", name: "Супы", icon: "Soup" },
  { id: "salads", name: "Салаты", icon: "Salad" },
  { id: "drinks", name: "Напитки", icon: "Coffee" },
  { id: "sauces", name: "Соусы", icon: "Droplets" },
  { id: "toppings", name: "Топпинги", icon: "Sparkles" },
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="w-full mb-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-start overflow-x-auto pb-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-tab ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <Icon name={category.icon} className="mr-2" size={20} />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
