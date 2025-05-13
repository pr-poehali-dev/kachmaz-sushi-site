
import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Состояние для активной категории
  const [activeCategory, setActiveCategory] = useState("sushi");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="py-8 bg-gradient-to-r from-sushi-orange/10 to-sushi-green/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sushi-dark">
              Добро пожаловать в <span className="text-sushi-orange">Качмаз</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы готовим лучшие суши, роллы, пиццу и вок в городе. 
              Заказывайте онлайн или приходите к нам!
            </p>
          </div>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <MenuSection category={activeCategory} />
        
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="bg-gradient-to-r from-sushi-red/10 to-sushi-orange/10 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-sushi-dark">
              Бесплатная доставка при заказе от 1500 ₽
            </h3>
            <p className="text-gray-600 mb-4">
              Заказывайте сейчас, и мы доставим вашу еду в течение 60 минут!
            </p>
            <button className="px-6 py-3 bg-sushi-orange text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold">
              Оформить заказ
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
