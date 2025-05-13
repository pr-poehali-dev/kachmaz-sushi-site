import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { promoData } from "@/data/promoData";

const PromoSlider: React.FC = () => {
  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {promoData.map((promo) => (
              <CarouselItem key={promo.id}>
                <div
                  className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${promo.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Тёмный оверлей для улучшения читаемости текста */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

                  <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {promo.title}
                    </h3>
                    <p className="text-xl mb-6 max-w-xl">{promo.description}</p>
                    <Button className="w-max bg-sushi-orange hover:bg-sushi-orange/90 text-white">
                      <Icon name="Gift" className="mr-2" />
                      Получить
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2 md:-left-12 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 md:-right-12 bg-white/80 hover:bg-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PromoSlider;
