// Типизация для элементов меню
export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  rating?: number;
  pieces?: number;
}

// Данные для меню
export const menuData: MenuItem[] = [
  // Суши
  {
    id: "sushi1",
    category: "sushi",
    name: "Суши с лососем",
    description: "Нежный лосось на рисе с васаби",
    price: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 40,
  },
  {
    id: "sushi2",
    category: "sushi",
    name: "Суши с угрем",
    description: "Копченый угорь под соусом унаги",
    price: 160,
    imageUrl:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 45,
  },
  {
    id: "sushi3",
    category: "sushi",
    name: "Суши с креветкой",
    description: "Отварная тигровая креветка на рисе",
    price: 140,
    imageUrl:
      "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 42,
  },
  {
    id: "sushi4",
    category: "sushi",
    name: "Суши с тунцом",
    description: "Свежий тунец на рисе с васаби",
    price: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 44,
  },

  // Роллы
  {
    id: "roll1",
    category: "rolls",
    name: "Филадельфия",
    description: "Лосось, сливочный сыр, огурец, авокадо",
    price: 460,
    imageUrl:
      "https://images.unsplash.com/photo-1616431575367-aaa872648a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 250,
  },
  {
    id: "roll2",
    category: "rolls",
    name: "Калифорния",
    description: "Крабовое мясо, авокадо, огурец, тобико",
    price: 420,
    imageUrl:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 230,
  },
  {
    id: "roll3",
    category: "rolls",
    name: "Дракон",
    description: "Угорь, огурец, сливочный сыр, авокадо, соус унаги",
    price: 520,
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 280,
  },
  {
    id: "roll4",
    category: "rolls",
    name: "Аляска",
    description: "Лосось, сливочный сыр, авокадо, огурец, икра тобико",
    price: 490,
    imageUrl:
      "https://images.unsplash.com/photo-1602535296330-3e37ef0fb5d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 260,
  },

  // Сеты
  {
    id: "set1",
    category: "sets",
    name: "Сет 'Филадельфия'",
    description:
      "Филадельфия (8 шт), Калифорния (8 шт), Аляска (8 шт), Дракон (8 шт)",
    price: 1790,
    imageUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 945,
    rating: 9.7,
    pieces: 32,
  },
  {
    id: "set2",
    category: "sets",
    name: "Сет 'Запеченный'",
    description:
      "Запеченный лосось (8 шт), Запеченный краб (8 шт), Запеченный угорь (8 шт), Запеченная креветка (8 шт)",
    price: 1599,
    imageUrl:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 985,
    rating: 8.5,
    pieces: 32,
  },
  {
    id: "set3",
    category: "sets",
    name: "Сет 'Микс'",
    description:
      "Филадельфия (4 шт), Калифорния (4 шт), Аляска (4 шт), Дракон (4 шт), Суши с лососем (2 шт), Суши с угрем (2 шт)",
    price: 1599,
    imageUrl:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 850,
    rating: 9.5,
    pieces: 20,
  },
  {
    id: "set4",
    category: "sets",
    name: "Сет 'Любимый'",
    description:
      "Ролл с копченой курицей (8 шт), Ролл с креветкой (8 шт), Ролл с огурцом (8 шт), Ролл с лососем (8 шт)",
    price: 1399,
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 860,
    rating: 9.3,
    pieces: 32,
  },

  // Супы
  {
    id: "soup1",
    category: "soups",
    name: "Мисо суп",
    description:
      "Классический японский суп на основе пасты мисо с водорослями, тофу и зеленым луком",
    price: 220,
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 300,
  },
  {
    id: "soup2",
    category: "soups",
    name: "Том ям",
    description:
      "Острый тайский суп с креветками, грибами, помидорами и кокосовым молоком",
    price: 380,
    imageUrl:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 350,
  },
  {
    id: "soup3",
    category: "soups",
    name: "Суп рамен",
    description:
      "Насыщенный бульон с пшеничной лапшой, яйцом, свининой и зеленью",
    price: 420,
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 450,
  },
  {
    id: "soup4",
    category: "soups",
    name: "Суимоно",
    description: "Прозрачный рыбный бульон с морепродуктами и рисовой лапшой",
    price: 360,
    imageUrl:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 320,
  },

  // Салаты
  {
    id: "salad1",
    category: "salads",
    name: "Салат Чука",
    description: "Маринованные водоросли с ореховым соусом и кунжутом",
    price: 280,
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 150,
  },
  {
    id: "salad2",
    category: "salads",
    name: "Салат с крабом",
    description:
      "Крабовое мясо, свежие огурцы, авокадо, икра тобико, заправка спайси",
    price: 420,
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 200,
  },
  {
    id: "salad3",
    category: "salads",
    name: "Салат с лососем",
    description: "Слабосоленый лосось, микс салатов, помидоры черри, соус юдзу",
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 180,
  },
  {
    id: "salad4",
    category: "salads",
    name: "Овощной микс",
    description:
      "Свежие огурцы, томаты, болгарский перец, листья салата, имбирная заправка",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 200,
  },

  // Напитки
  {
    id: "drink1",
    category: "drinks",
    name: "Зеленый чай",
    description: "Классический японский зеленый чай",
    price: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c1c1e76aae43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 350,
  },
  {
    id: "drink2",
    category: "drinks",
    name: "Маття латте",
    description: "Молочный напиток с японским порошковым чаем маття",
    price: 280,
    imageUrl:
      "https://images.unsplash.com/photo-1545221855-edc3dcef5be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 400,
  },
  {
    id: "drink3",
    category: "drinks",
    name: "Лимонад юдзу",
    description: "Освежающий лимонад на основе японского цитруса",
    price: 240,
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 450,
  },
  {
    id: "drink4",
    category: "drinks",
    name: "Кола",
    description: "Классическая кока-кола",
    price: 160,
    imageUrl:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 500,
  },

  // Соусы
  {
    id: "sauce1",
    category: "sauces",
    name: "Соус терияки",
    description: "Сладковатый соевый соус с карамельным вкусом",
    price: 80,
    imageUrl:
      "https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 50,
  },
  {
    id: "sauce2",
    category: "sauces",
    name: "Соус унаги",
    description: "Соус на основе соевого соуса и рисового вина мирин",
    price: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 50,
  },
  {
    id: "sauce3",
    category: "sauces",
    name: "Спайси соус",
    description: "Острый соус на основе майонеза и чили",
    price: 70,
    imageUrl:
      "https://images.unsplash.com/photo-1581516379334-230077b9dfe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 50,
  },
  {
    id: "sauce4",
    category: "sauces",
    name: "Соевый соус",
    description: "Классический соевый соус",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 50,
  },

  // Топпинги
  {
    id: "topping1",
    category: "toppings",
    name: "Васаби",
    description: "Японский хрен для суши и роллов",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1632839217575-2ac968e16f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 30,
  },
  {
    id: "topping2",
    category: "toppings",
    name: "Имбирь",
    description: "Маринованный имбирь для суши и роллов",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1573414386623-c489ec8a5a88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 30,
  },
  {
    id: "topping3",
    category: "toppings",
    name: "Икра тобико",
    description: "Икра летучей рыбы для украшения и добавления в роллы",
    price: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1584278433203-6f1fe5561689?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 40,
  },
  {
    id: "topping4",
    category: "toppings",
    name: "Кунжут",
    description: "Жареные семена кунжута для украшения роллов",
    price: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 20,
  },
];
