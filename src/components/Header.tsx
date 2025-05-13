import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Верхняя панель с акциями */}
      <div className="bg-sushi-orange/10 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex items-center text-sushi-dark mb-2 md:mb-0">
              <Icon name="Truck" size={16} className="mr-1 text-sushi-orange" />
              <span>Бесплатная доставка от 1700₽</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sushi-dark">
                <Icon
                  name="Camera"
                  size={16}
                  className="mr-1 text-sushi-green"
                />
                <span>Ролл в подарок за фотоотзыв</span>
              </div>
              <div className="flex items-center text-sushi-dark">
                <Icon name="Gift" size={16} className="mr-1 text-sushi-red" />
                <span>Скидка имениннику 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Основная шапка */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          {/* Логотип и название */}
          <div className="flex items-center mb-3 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="mr-2 text-sushi-red">
                <Icon name="Utensils" size={28} />
              </div>
              <h1 className="text-2xl font-bold text-sushi-dark">
                <span className="text-sushi-orange">Качмаз</span>
                <span className="text-sm text-gray-500">(тест)</span>
              </h1>
            </Link>
          </div>

          {/* Навигация (только desktop) */}
          <nav className="hidden md:flex items-center space-x-6 mx-4">
            <Link
              to="/"
              className="text-sushi-dark hover:text-sushi-orange transition-colors font-medium"
            >
              Главная
            </Link>
            <Link
              to="/menu"
              className="text-sushi-dark hover:text-sushi-orange transition-colors font-medium"
            >
              Меню
            </Link>
            <Link
              to="/promotions"
              className="text-sushi-dark hover:text-sushi-orange transition-colors font-medium"
            >
              Акции
            </Link>
            <Link
              to="/delivery"
              className="text-sushi-dark hover:text-sushi-orange transition-colors font-medium"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-sushi-dark hover:text-sushi-orange transition-colors font-medium"
            >
              Контакты
            </Link>
          </nav>

          {/* Контактная информация */}
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex items-center">
              <div className="mr-2 text-sushi-green">
                <Icon name="Phone" size={20} />
              </div>
              <a
                href="tel:+78001234567"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
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
              <Button className="ml-4 px-4 py-2 bg-sushi-orange text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Открыть меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t mt-3">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/menu"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
                Меню
              </Link>
              <Link
                to="/promotions"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
                Акции
              </Link>
              <Link
                to="/delivery"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className="text-sushi-dark hover:text-sushi-orange transition-colors"
              >
                Контакты
              </Link>
              <Button className="mt-2 w-full bg-sushi-orange text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
