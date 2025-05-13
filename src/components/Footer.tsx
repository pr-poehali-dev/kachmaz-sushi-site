
import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-sushi-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Utensils" className="mr-2" />
              Качмаз
            </h3>
            <p className="text-gray-300">
              Вкусная еда из свежих продуктов с доставкой по всему городу.
              Попробуйте наши фирменные суши, роллы, пиццу и wok.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="flex items-center mb-2">
              <Icon name="Phone" className="mr-2" />
              <a href="tel:+78001234567" className="hover:text-sushi-orange transition-colors">8 (800) 123-45-67</a>
            </div>
            <div className="flex items-center mb-2">
              <Icon name="MapPin" className="mr-2" />
              <span>г. Москва, ул. Примерная, д. 123</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" />
              <a href="mailto:info@kachmaz.ru" className="hover:text-sushi-orange transition-colors">info@kachmaz.ru</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Режим работы</h3>
            <p className="mb-2">Пн-Пт: 10:00 - 22:00</p>
            <p className="mb-4">Сб-Вс: 11:00 - 23:00</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-sushi-orange transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-white hover:text-sushi-orange transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-white hover:text-sushi-orange transition-colors">
                <Icon name="Twitter" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>© 2025 Качмаз(тест). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
