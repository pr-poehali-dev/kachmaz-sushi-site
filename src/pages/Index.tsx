import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import PromoSlider from "@/components/PromoSlider";

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
              Добро пожаловать в{" "}
              <span className="text-sushi-orange">Качмаз</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы готовим лучшие суши, роллы, сеты и другие блюда японской кухни.
              Заказывайте онлайн или приходите к нам!
            </p>
          </div>
        </div>

        {/* Добавляем слайдер с акциями */}
        <PromoSlider />

        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <MenuSection category={activeCategory} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
