// Типизация для акций
export interface PromoItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Данные для акций
export const promoData: PromoItem[] = [
  {
    id: "promo1",
    title: "Бесплатная доставка",
    description:
      "При заказе от 1700 рублей доставка бесплатная! Акция действует при заказе через сайт или приложение.",
    imageUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "promo2",
    title: "Ролл в подарок",
    description:
      "Оставь фотоотзыв и получи ролл 'Калифорния' в подарок! Просто пришли фото своего заказа в соцсетях.",
    imageUrl:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "promo3",
    title: "Скидка имениннику 15%",
    description:
      "В день рождения и 3 дня после - скидка 15% на весь заказ! Просто предъявите документ, подтверждающий дату рождения.",
    imageUrl:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
];
