
import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Логотип и название */}
          <div className="flex items-center mb-3 md:mb-0">
            <div className="mr-2 text-sushi-red">
              <Icon name="Utensils" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-sushi-dark">
              <span className="text-sushi-orange">Качмаз</span>
              <span className="text-sm text-gray-500">(тест)</span>
            </h1>
          </div>

          {/* Контактная информация */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center">
              <div className="mr-2 text-sushi-green">
                <Icon name="Phone" size={20} />
              </div>
              <a href="tel:+78001234567" className="text-sushi-dark hover:text-sushi-orange transition-colors">
                8 (800) 123-45-67
              </a>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-sushi-orange">
                <Icon name="MapPin" size={20} />
              </div>
              <span className="text-sushi-dark">
                г. Москва, ул. Примерная, д. 123
              </span>
            </div>
            <div className="hidden md:flex items-center">
              <button className="ml-4 px-4 py-2 bg-sushi-orange text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
