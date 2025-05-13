
import React from "react";
import MenuItem from "./MenuItem";

// Импортируем данные для меню
import { menuData } from "@/data/menuData";

interface MenuSectionProps {
  category: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  // Фильтруем данные по активной категории
  const items = menuData.filter((item) => item.category === category);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="menu-grid">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            weight={item.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
