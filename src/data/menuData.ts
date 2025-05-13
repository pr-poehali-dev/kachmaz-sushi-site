
// Типизация для элементов меню
export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
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
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 40
  },
  {
    id: "sushi2",
    category: "sushi",
    name: "Суши с угрем",
    description: "Копченый угорь под соусом унаги",
    price: 160,
    imageUrl: "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 45
  },
  {
    id: "sushi3",
    category: "sushi",
    name: "Суши с креветкой",
    description: "Отварная тигровая креветка на рисе",
    price: 140,
    imageUrl: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 42
  },
  {
    id: "sushi4",
    category: "sushi",
    name: "Суши с тунцом",
    description: "Свежий тунец на рисе с васаби",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 44
  },
  
  // Роллы
  {
    id: "roll1",
    category: "rolls",
    name: "Филадельфия",
    description: "Лосось, сливочный сыр, огурец, авокадо",
    price: 460,
    imageUrl: "https://images.unsplash.com/photo-1616431575367-aaa872648a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 250
  },
  {
    id: "roll2",
    category: "rolls",
    name: "Калифорния",
    description: "Крабовое мясо, авокадо, огурец, тобико",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 230
  },
  {
    id: "roll3",
    category: "rolls",
    name: "Дракон",
    description: "Угорь, огурец, сливочный сыр, авокадо, соус унаги",
    price: 520,
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 280
  },
  {
    id: "roll4",
    category: "rolls",
    name: "Аляска",
    description: "Лосось, сливочный сыр, авокадо, огурец, икра тобико",
    price: 490,
    imageUrl: "https://images.unsplash.com/photo-1602535296330-3e37ef0fb5d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 260
  },
  
  // Пицца
  {
    id: "pizza1",
    category: "pizza",
    name: "Маргарита",
    description: "Томатный соус, моцарелла, базилик, оливковое масло",
    price: 490,
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 450
  },
  {
    id: "pizza2",
    category: "pizza",
    name: "Пепперони",
    description: "Томатный соус, моцарелла, пепперони",
    price: 560,
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 480
  },
  {
    id: "pizza3",
    category: "pizza",
    name: "Четыре сыра",
    description: "Томатный соус, моцарелла, горгонзола, пармезан, рикотта",
    price: 620,
    imageUrl: "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 470
  },
  {
    id: "pizza4",
    category: "pizza",
    name: "Гавайская",
    description: "Томатный соус, моцарелла, ветчина, ананас",
    price: 540,
    imageUrl: "https://images.unsplash.com/photo-1617343586681-331b32a7df9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 490
  },
  
  // WOK
  {
    id: "wok1",
    category: "wok",
    name: "Удон с курицей",
    description: "Лапша удон, курица, овощи, соус терияки",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 350
  },
  {
    id: "wok2",
    category: "wok",
    name: "Рис с говядиной",
    description: "Рис, говядина, овощи, соус кимчи",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 380
  },
  {
    id: "wok3",
    category: "wok",
    name: "Соба с морепродуктами",
    description: "Лапша соба, креветки, кальмары, овощи, устричный соус",
    price: 490,
    imageUrl: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 360
  },
  {
    id: "wok4",
    category: "wok",
    name: "Фунчоза с овощами",
    description: "Фунчоза, цукини, морковь, перец, грибы, соевый соус",
    price: 340,
    imageUrl: "https://images.unsplash.com/photo-1625938145744-e6e537f49de6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    weight: 320
  }
];
