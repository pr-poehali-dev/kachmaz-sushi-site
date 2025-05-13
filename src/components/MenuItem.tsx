
import React from "react";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  weight,
}) => {
  return (
    <div className="menu-item">
      <div className="relative overflow-hidden rounded-lg mb-3 h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-sushi-dark mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">
        {description}
      </p>
      <div className="text-sm text-gray-500 mb-3">{weight} г</div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-sushi-orange">{price} ₽</div>
        <Button className="bg-sushi-green hover:bg-sushi-green/90 text-white">
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
