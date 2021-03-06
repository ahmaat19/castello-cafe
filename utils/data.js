export const categories = [
  { name: 'Coffee', slug: 'coffee' },
  { name: 'Tea', slug: 'tea' },
  { name: 'Cold Coffee', slug: 'cold-coffee' },
  { name: 'Cold Tea', slug: 'cold-tea' },
  { name: 'Shakes', slug: 'shakes' },
  { name: 'Smoothies', slug: 'smoothies' },
  { name: 'Mojito', slug: 'majito' },
  { name: 'Frappe', slug: 'frappe' },
  { name: 'Juice', slug: 'juice' },
  { name: 'Cakes', slug: 'cakes' },
  { name: 'Fruits', slug: 'fruits' },
  { name: 'Ice Cream', slug: 'ice-cream' },
  { name: 'Burger', slug: 'burger' },
  { name: 'Sandwiches', slug: 'sandwiches' },
  { name: 'BBQ', slug: 'bbq' },
  { name: 'Main Dishes', slug: 'main-dishes' },
]

const imageUrl = 'https://castello.s3.us-west-004.backblazeb2.com'

const noImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
export const items = [
  {
    categorySlug: 'coffee',
    name: 'Espresso',
    price: '$1.5',
    image: `${imageUrl}/283A1664.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Macchiato',
    price: '$1.5',
    image: noImage,
  },
  {
    categorySlug: 'coffee',
    name: 'Americano',
    price: '$1.5',
    image: `${imageUrl}/283A1630.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Cappuccino',
    price: '$2',
    image: `${imageUrl}/283A1514.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Coffee Late',
    price: '$2',
    image: `${imageUrl}/283A1874.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Coffee Mocha',
    price: '$2',
    image: `${imageUrl}/283A1654.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Turkish Coffee',
    price: '$1.5',
    image: `${imageUrl}/283A1650.JPG`,
  },
  {
    categorySlug: 'coffee',
    name: 'Hot chocolate',
    price: '$2.5',
    image: noImage,
  },
  {
    categorySlug: 'tea',
    name: 'Castello tea',
    price: '$3.5',
    image: `${imageUrl}/283A1590.JPG`,
  },
  {
    categorySlug: 'tea',
    name: 'Turkish tea',
    price: '$5',
    image: `${imageUrl}/283A1629.JPG`,
  },
  {
    categorySlug: 'tea',
    name: 'Somali Tea',
    price: '$1',
    image: noImage,
  },
  {
    categorySlug: 'tea',
    name: 'Dawa tea',
    price: '$2',
    image: noImage,
  },
  {
    categorySlug: 'tea',
    name: 'Dhako jabiye tea',
    price: '$2',
    image: noImage,
  },
  {
    categorySlug: 'cold-coffee',
    name: 'Spanish tea',
    price: '$2.5',
    image: `${imageUrl}/283A1752.JPG`,
  },
  {
    categorySlug: 'cold-coffee',
    name: 'Carmel Late',
    price: '$2.5',
    image: `${imageUrl}/283A1777.JPG`,
  },
  {
    categorySlug: 'cold-coffee',
    name: 'Ice Caramel Mocha',
    price: '$2.5',
    image: `${imageUrl}/283A1764.JPG`,
  },
  {
    categorySlug: 'cold-tea',
    name: 'Peach iced tea',
    price: '$2',
    image: `${imageUrl}/283A1672.JPG`,
  },
  {
    categorySlug: 'cold-tea',
    name: 'Peach and Chai',
    price: '$2',
    image: noImage,
  },
  {
    categorySlug: 'cold-tea',
    name: 'Mango Iced Tea',
    price: '$2.5',
    image: `${imageUrl}/283A1674.JPG`,
  },

  {
    categorySlug: 'shakes',
    name: 'Vanilla shake',
    price: '$3',
    image: `${imageUrl}/283A1944.JPG`,
  },
  {
    categorySlug: 'shakes',
    name: 'Strawberry Shake',
    price: '$3.5',
    image: `${imageUrl}/283A1448.JPG`,
  },
  {
    categorySlug: 'shakes',
    name: 'Chocolate Shake',
    price: '$3.5',
    image: `${imageUrl}/283A1564.JPG`,
  },
  {
    categorySlug: 'shakes',
    name: 'Oreo Shake',
    price: '$3.5',
    image: `${imageUrl}/283A1495.JPG`,
  },
  {
    categorySlug: 'shakes',
    name: 'Lotus shake',
    price: '$3.5',
    image: `${imageUrl}/283A1401.JPG`,
  },

  {
    categorySlug: 'smoothies',
    name: 'Mango Smoothie',
    price: '$2',
    image: `${imageUrl}/283A1727.JPG`,
  },
  {
    categorySlug: 'smoothies',
    name: 'Kiwi Smoothie',
    price: '$0',
    image: noImage,
  },
  {
    categorySlug: 'smoothies',
    name: 'Bear passion smoothie',
    price: '$0',
    image: noImage,
  },

  {
    categorySlug: 'majito',
    name: 'Ice blueberry',
    price: '$2.5',
    image: `${imageUrl}/283A1387.JPG`,
  },
  {
    categorySlug: 'majito',
    name: 'Ice Strawberry',
    price: '$2.5',
    image: `${imageUrl}/283A1372.JPG`,
  },
  {
    categorySlug: 'majito',
    name: 'Mango green apple',
    price: '$2.5',
    image: `${imageUrl}/283A1380.JPG`,
  },

  {
    categorySlug: 'frappe',
    name: 'Caramel Frappuccino',
    price: '$3.5',
    image: noImage,
  },
  {
    categorySlug: 'frappe',
    name: 'Green Tea Frappuccino',
    price: '$3.5',
    image: noImage,
  },
  {
    categorySlug: 'frappe',
    name: 'Mocha Frappaccino',
    price: '$3.5',
    image: noImage,
  },
  {
    categorySlug: 'frappe',
    name: 'Hazelnut Frappaccino',
    price: '$3',
    image: noImage,
  },
  {
    categorySlug: 'frappe',
    name: 'Pistachio Frappe',
    price: '$3.5',
    image: noImage,
  },

  {
    categorySlug: 'juice',
    name: 'Avocado',
    price: '$2.5',
    image: `${imageUrl}/283A0316.JPG`,
  },
  {
    categorySlug: 'juice',
    name: 'Mango',
    price: '$2',
    image: `${imageUrl}/283A1535.JPG`,
  },
  {
    categorySlug: 'juice',
    name: 'Spermuto',
    price: '$2',
    image: `${imageUrl}/283A0058.JPG`,
  },
  {
    categorySlug: 'juice',
    name: 'Lemonade',
    price: '$1.5',
    image: noImage,
  },
  {
    categorySlug: 'juice',
    name: 'Orange Juice',
    price: '$3',
    image: noImage,
  },
  {
    categorySlug: 'juice',
    name: 'Castello Cocktail',
    price: '$3',
    image: `${imageUrl}/283A1540.JPG`,
  },
  {
    categorySlug: 'juice',
    name: 'Carrot Orange Juice',
    price: '$3',
    image: noImage,
  },
  {
    categorySlug: 'juice',
    name: 'Pomegranate Juice',
    price: '$2.5',
    image: noImage,
  },
  {
    categorySlug: 'juice',
    name: 'Banana berry with honey',
    price: '$2.5',
    image: `${imageUrl}/283A1742.JPG`,
  },
  {
    categorySlug: 'fruits',
    name: 'Castello Fruit',
    price: '$4',
    image: noImage,
  },

  {
    categorySlug: 'cakes',
    name: 'Chocolate cheese cake',
    price: '$4',
    image: `${imageUrl}/283A2508.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'White forest',
    price: '$3.5',
    image: `${imageUrl}/283A2452.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'brown cake',
    price: '$4',
    image: `${imageUrl}/283A2496.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Strawberry forest',
    price: '$3.5',
    image: `${imageUrl}/283A2428.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Orio cheese cake',
    price: '$4',
    image: `${imageUrl}/283A2325.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Orio forest',
    price: '$4',
    image: `${imageUrl}/283A2438.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Strawberry cheese cake',
    price: '$4',
    image: `${imageUrl}/283A0489.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Lotus cheese cake',
    price: '$4',
    image: `${imageUrl}/283A2321.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Pinaapple cheese cake',
    price: '$4',
    image: `${imageUrl}/283A0493.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'boddun',
    price: '2.5',
    image: `${imageUrl}/283A1956.JPG`,
  },
  {
    categorySlug: 'cakes',
    name: 'Black forest',
    price: '$3.5',
    image: `${imageUrl}/283A2414.JPG`,
  },

  {
    categorySlug: 'ice-cream',
    name: 'Castello Ice Cream',
    price: '$3',
    image: noImage,
  },
  {
    categorySlug: 'ice-cream',
    name: 'Ice Cream 3 Scope',
    price: '$2.5',
    image: noImage,
  },
  {
    categorySlug: 'ice-cream',
    name: 'Ice Cream 1 Scope',
    price: '$1',
    image: noImage,
  },

  {
    categorySlug: 'burger',
    name: 'Crisppy chicken burger',
    price: '$5',
    image: `${imageUrl}/283A0337.JPG`,
  },
  {
    categorySlug: 'burger',
    name: 'Brotien burger',
    price: '$5',
    image: `${imageUrl}/283A0418.JPG`,
  },

  {
    categorySlug: 'sandwiches',
    name: 'Crisspy sandwiches',
    price: '$4',
    image: `${imageUrl}/283A0309.JPG`,
  },
  {
    categorySlug: 'sandwiches',
    name: 'Meatball',
    price: '$4.5',
    image: `${imageUrl}/283A0320.JPG`,
  },
  {
    categorySlug: 'sandwiches',
    name: 'Chiccken wrappe',
    price: '$4',
    image: `${imageUrl}/283A0429.JPG`,
  },
  {
    categorySlug: 'sandwiches',
    name: 'Meat wrappe',
    price: '$4',
    image: `${imageUrl}/283A0365.JPG`,
  },
  {
    categorySlug: 'sandwiches',
    name: 'Shawarma',
    price: '$4',
    image: `${imageUrl}/283A0777.JPG`,
  },

  {
    categorySlug: 'bbq',
    name: 'Castello BBQ',
    price: '$20',
    image: `${imageUrl}/283A0095.JPG`,
  },
  {
    categorySlug: 'bbq',
    name: 'Castello BBQ',
    price: '$18',
    image: `${imageUrl}/283A0099.JPG`,
  },
  {
    categorySlug: 'bbq',
    name: 'Castello BBQ',
    price: '$10',
    image: `${imageUrl}/283A0105.JPG`,
  },

  {
    categorySlug: 'main-dishes',
    name: 'Garlic chicken steak with pasta',
    price: '$6',
    image: `${imageUrl}/283A0407.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Humus - meat',
    price: '$4.5',
    image: `${imageUrl}/283A0020.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Humus',
    price: '$3',
    image: noImage,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Oodkac ',
    price: '$5',
    image: noImage,
  },
  {
    categorySlug: 'main-dishes',
    name: 'french fries ',
    price: '$2',
    image: `${imageUrl}/283A0025.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Grilled shrimp',
    price: '$12',
    image: `${imageUrl}/283A0027.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Tuna pasta salad      ',
    price: '$6',
    image: `${imageUrl}/283A0063.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Snack plate ',
    price: '$8',
    image: `${imageUrl}/283A0095.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Grilled halloumi cheese',
    price: '$5',
    image: `${imageUrl}/283A0210.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Crisppy chicken ',
    price: '$5',
    image: `${imageUrl}/283A0172.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Chicken season salad',
    price: '$5',
    image: `${imageUrl}/283A0207.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'lentil soup ',
    price: '$2',
    image: `${imageUrl}/283A0218.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Fillet fish with rice ',
    price: '$8',
    image: `${imageUrl}/283A0229.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Chicken escalope                       ',
    price: '$8',
    image: `${imageUrl}/283A0245.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Penne polo alfreado  ',
    price: '$6',
    image: `${imageUrl}/283A0304.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Spagheti meat/fish',
    price: '$6',
    image: `${imageUrl}/283A0314.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Majbous fish                            ',
    price: '$8',
    image: `${imageUrl}/283A0621.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Chicken burger',
    price: '$5',
    image: `${imageUrl}/283A0643.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Beer',
    price: '$5',
    image: `${imageUrl}/283A0656.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Strawberry machito ',
    price: '$2.5',
    image: `${imageUrl}/283A0730.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Fassulia',
    price: '$4',
    image: `${imageUrl}/283A0744.JPG`,
  },
  {
    categorySlug: 'main-dishes',
    name: 'Family Breakfast',
    price: '$30',
    image: `${imageUrl}/283A0860.JPG`,
  },
]
