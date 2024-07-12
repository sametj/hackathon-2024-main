const MENU_COFFEE = [
  {
    name: "Latte",
    price: "$4.75(H)/$5.25(C)",
  },
  {
    name: "Cortado",
    price: "$4.25(H)/$4.75(C)",
  },
  {
    name: "Drip Coffee",
  },
  {
    name: "Cafe Au Lait",
    price: "$3.25(H)",
  },
  {
    name: "Cappuccino",
    price: "$4.50(H)",
  },
  {
    name: "Mocha",
    price: "$5.75(H)/$4.75(C)",
  },
  {
    name: "Red Eye",
    price: "$4.50(H)/$4.75(C)",
  },
  {
    name: "Americano",
    price: "$3.75(H)/$4.25(C)",
  },
];

const MENU_SPECIALTY_DRINKS = [
  {
    name: "Matcha Latte",
    price: "$5.25(H)/$5.75(C)",
  },
  {
    name: "Hot Chocolate",
    price: "$4.50(H)/S'mores: $5.50",
  },
  {
    name: "Nutella Latte",
    price: "$5.75(H)/$6.25(C)",
  },
  {
    name: "Chai",
    price: "$5.00(H)/$5.50(C)",
  },
  {
    name: "Dirty Chai",
    price: "$6.25(H)/$6.75(C)",
  },
  {
    name: "Lavender Latte",
    price: "$5.75(H)/$6.25(C)",
  },
  {
    name: "Rose Latte",
    price: "$5.75(H)/$6.25(C)",
  },
  {
    name: "Brown Sugar Latte",
    price: "$5.75(H)/$6.25(C)",
  },
  {
    name: "Bumblebee Latte",
    price: "$5.75(H)/$6.25(C)",
  },
];

const MENU_BOBA = [
  {
    name: "The OG",
    price: "Medium: $4.25 / Large: $5.25 / Hot: $5.25",
    info: "Classic milk tea",
  },
  {
    name: "Brown Sugar Boba",
    price: "Medium: $4.75 / Large: $5.75 / Hot: $5.75",
    info: "Caffeine free",
  },
  {
    name: "Taro Boba Coconut Boba",
    price: "Medium: $4.25 / Large: $5.25 / Hot: $5.25",
    info: "Caffeine free, dairy free",
  },
  {
    name: "Fruit Green/Black Tea",
    price: "Medium: $4.25 / Large: $5.25",
    info: "Comes in a variety of flavors: mango / strawberry / passionfruit / peach / green apple / lychee / kiwi. Feel free to mix and match!",
  },
  {
    name: "Fruit Black Tea",
    price: "Medium: $4.25 / Large: $5.25",
    info: "Comes in the flavors: peach / strawberry. Feel free to mix and match!",
  },
  {
    name: "Jasmine Milk Tea | Wintermelon Milk Tea",
    price: "Medium: $4.25 / Large: $5.25 / Hot: $5.25",
    info: "Dairy free",
  },
  {
    name: "Toppings",
    price: "+$0.50",
    info: "Tapioca pearls / lychee jelly / mixed jelly / grass jelly / pop strawberry / pop passionfruit / mango stars",
  },
];

const MENU_HOT_BITES = [
  {
    name: "Chicken Poppers",
    price: "$6.00",
  },
  {
    name: "Mozz Sticks",
    price: "$7.00",
  },
  {
    name: "Pigs in a Blanket",
    price: "$7.00",
  },
  {
    name: "Tater Tots",
    price: "$5.00",
  },
  {
    name: "Chicken Tenders",
    price: "$8.00",
  },
  {
    name: "Onion Rings",
    price: "$5.00",
  },
  {
    name: "Fries",
    price: "$5.00",
  },
  {
    name: "Sweet Potato Fries",
    price: "$6.00",
  },
];

const MENU_SANDWICHES = [
  {
    name: "Beyond Bussin Sandwich",
    price: "$15.00",
    info: "Our new VEGAN sandwich highlighting the beyond burger and our house-made vegan chipotle aioli alongside lettuce, onion, and avocado. Comes with a side of our house-made chipotle aioli and chips.",
  },
  {
    name: "Spicy Chicken Sandwich",
    price: "$13.00",
    info: "Spicy mayo, grilled chicken, crispy bacon, and avocado on Italian herb focaccia. Comes with chips.",
  },
  {
    name: "Italian Panini",
    price: "$11.00",
    info: "Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy (pesto contains pine nuts). Comes with chips.",
  },
  {
    name: "Tuna Melt",
    price: "$11.00",
    info: "House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (can be spicy on request). Comes with chips.",
  },
  {
    name: "Zesto Chicken Sandwich",
    price: "$13.00",
    info: "Basil pesto, grilled chicken, fresh mozzarella, and lemon zest on Italian herb focaccia (pesto contains pine nuts). Comes with chips.",
  },
  {
    name: "Turkey Club",
    price: "$11.00",
    info: "Roast turkey, lettuce, tomato, crispy bacon, and American cheese on sourdough. Comes with chips.",
  },
  {
    name: "Grilled Cheese",
    price: "$6.50",
    info: "Comes with chips. + Bacon/Tomato/Turkey $1.50",
  },
  {
    name: "Mixed Green Salad",
    price: "$6.50",
    info: "With tomato, vegan",
    extras: [
      { name: "smoked salmon", price: "$5.00" },
      { name: "boiled egg", price: "$1.00" },
      { name: "avocado", price: "$1.50" },
    ],
  },
  {
    name: "Cobb Salad",
    price: "$10.00",
    info: "Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed with ranch",
  },
  {
    name: "Pizza Panini",
    price: "$11.00",
    info: "Pepperoni, fresh mozzarella, marinara, and olive oil on Italian herb focaccia and pressed to perfection! Comes with chips",
  },
  {
    name: "Smoked Salmon Tartine",
    price: "$11.00",
    info: "Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad",
  },
  {
    name: "Avocado Toast",
    price: "$10.00",
    info: "Avocado mashed with salt, pepper, lemon juice, and olive oil on toasted heritage wheat. Comes with a side salad",
    extras: [{ name: "egg", price: "$1.00" }],
  },
];

const MENU_SEASONAL = [
  {
    name: "Pina Colada",
    price: "Medium: $4.75, Large: $5.75",
    info: "Our coconut boba with pineapple flavor!",
  },
  {
    name: "Matcha Lemonade",
    price: "Medium: $5.00, Large: $6.00",
    info: "Our freshly squeezed lemonade with a balance of an earthy shot of matcha",
  },
  {
    name: "Yuzu-Ade",
    price: "Large: $5.25",
    info: "Popular in South Korea, Yuzu-Ade is a carbonated drink with yuzu marmalade. Yuzu is a citrus with a tart and fragrant flavor of orange and grapefruit.",
  },
  {
    name: "Freshly Squeezed Lemonade",
    price: "Medium: $4.00, Large: $5.00",
    info: "Real lemons with our signature recipe = amazing lemonade",
  },
  {
    name: "Matcha Lavender Oat",
    price: "$6.50",
    info: "Lavender infused into our oatmilk steamed over a matcha shot.",
  },
  {
    name: "Berry Lavender Lemonade",
    price: "Medium: $5.25, Large: $6.25",
    info: "Made with real bourbon and definitely the drink we're most excited for this fall.",
  },
  {
    name: "Citrus Boba (Grapefruit or Orange)",
    price: "Large: $6.00",
    info: "Made with real fruit juice and fruit slices!",
  },
  {
    name: "Rotating Beer/Wine Program",
    info: "Check out our beer and wine at the front of our store! We're constantly rotating out product from local breweries!",
  },
];

export {
  MENU_COFFEE,
  MENU_SPECIALTY_DRINKS,
  MENU_BOBA,
  MENU_HOT_BITES,
  MENU_SANDWICHES,
  MENU_SEASONAL,
};
