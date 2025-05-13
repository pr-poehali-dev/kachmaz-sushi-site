import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  rating?: number;
  pieces?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  weight,
  rating,
  pieces,
}) => {
  return (
    <div className="menu-item">
      <div className="relative overflow-hidden rounded-lg mb-3 h-48">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        {rating && (
          <div className="absolute top-2 left-2 bg-sushi-orange text-white rounded-md px-2 py-1 text-sm font-medium flex items-center">
            <Icon name="Star" className="mr-1 text-yellow-300" size={16} />
            {rating}
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-sushi-dark mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">
        {description}
      </p>
      <div className="flex gap-2 text-sm text-gray-500 mb-3">
        <span>{weight} г</span>
        {pieces && <span>• {pieces} шт</span>}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-sushi-orange">{price} ₽</div>
        <Button className="bg-sushi-green hover:bg-sushi-green/90 text-white">
          <Icon name="ShoppingCart" className="mr-2" size={16} />В корзину
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
