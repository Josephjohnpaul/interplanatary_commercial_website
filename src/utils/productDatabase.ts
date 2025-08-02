import { Product } from '../App';

const productDatabase: Product[] = [
  // Electronics
  { name: 'iPhone 15 Pro', emoji: '📱', basePrice: 90000, weight: 0.2, size: 0.0001, value: 8 },
  { name: 'MacBook Pro', emoji: '💻', basePrice: 187500, weight: 2.0, size: 0.002, value: 9 },
  { name: 'Gaming Console', emoji: '🎮', basePrice: 37500, weight: 4.5, size: 0.01, value: 7 },
  { name: 'Smart TV', emoji: '📺', basePrice: 60000, weight: 15.0, size: 0.05, value: 6 },
  { name: 'Wireless Headphones', emoji: '🎧', basePrice: 22500, weight: 0.3, size: 0.0005, value: 6 },
  
  // Food & Beverages
  { name: 'Pizza', emoji: '🍕', basePrice: 1875, weight: 1.0, size: 0.001, value: 3 },
  { name: 'Coffee', emoji: '☕', basePrice: 375, weight: 0.5, size: 0.0003, value: 2 },
  { name: 'Cheeseburger', emoji: '🍔', basePrice: 900, weight: 0.3, size: 0.0005, value: 2 },
  { name: 'Ice Cream', emoji: '🍦', basePrice: 600, weight: 0.2, size: 0.0002, value: 2 },
  { name: 'Champagne', emoji: '🍾', basePrice: 11250, weight: 1.5, size: 0.001, value: 5 },
  
  // Vehicles
  { name: 'Tesla Model S', emoji: '🚗', basePrice: 6000000, weight: 2100, size: 12, value: 10 },
  { name: 'Motorcycle', emoji: '🏍️', basePrice: 1125000, weight: 200, size: 2, value: 7 },
  { name: 'Bicycle', emoji: '🚲', basePrice: 37500, weight: 15, size: 0.5, value: 4 },
  { name: 'Helicopter', emoji: '🚁', basePrice: 150000000, weight: 1500, size: 25, value: 10 },
  
  // Household Items
  { name: 'Toothbrush', emoji: '🪥', basePrice: 375, weight: 0.02, size: 0.00005, value: 1 },
  { name: 'Washing Machine', emoji: '🧺', basePrice: 45000, weight: 70, size: 0.2, value: 5 },
  { name: 'Microwave', emoji: '📱', basePrice: 15000, weight: 15, size: 0.03, value: 4 },
  { name: 'Bed', emoji: '🛏️', basePrice: 60000, weight: 50, size: 4, value: 5 },
  
  // Luxury Items
  { name: 'Diamond Ring', emoji: '💎', basePrice: 375000, weight: 0.01, size: 0.000001, value: 10 },
  { name: 'Gold Watch', emoji: '⌚', basePrice: 1125000, weight: 0.1, size: 0.00005, value: 9 },
  { name: 'Designer Handbag', emoji: '👜', basePrice: 225000, weight: 1.0, size: 0.01, value: 8 },
  
  // Fun Items
  { name: 'Rubber Duck', emoji: '🦆', basePrice: 225, weight: 0.05, size: 0.0001, value: 1 },
  { name: 'Stuffed Animal', emoji: '🧸', basePrice: 1500, weight: 0.3, size: 0.002, value: 2 },
  { name: 'Board Game', emoji: '🎲', basePrice: 3750, weight: 1.5, size: 0.005, value: 3 },
  { name: 'Guitar', emoji: '🎸', basePrice: 60000, weight: 3.0, size: 0.1, value: 6 },
  
  // Sports & Fitness
  { name: 'Soccer Ball', emoji: '⚽', basePrice: 2250, weight: 0.4, size: 0.005, value: 2 },
  { name: 'Basketball', emoji: '🏀', basePrice: 1875, weight: 0.6, size: 0.007, value: 2 },
  { name: 'Tennis Racket', emoji: '🎾', basePrice: 11250, weight: 0.3, size: 0.05, value: 4 },
  { name: 'Dumbbell', emoji: '🏋️', basePrice: 7500, weight: 20, size: 0.01, value: 3 },
  
  // Clothing
  { name: 'Sneakers', emoji: '👟', basePrice: 9000, weight: 0.8, size: 0.005, value: 4 },
  { name: 'Jacket', emoji: '🧥', basePrice: 15000, weight: 1.2, size: 0.01, value: 4 },
  { name: 'Hat', emoji: '🎩', basePrice: 3750, weight: 0.2, size: 0.002, value: 2 },
  
  // Books & Media
  { name: 'Book', emoji: '📚', basePrice: 1125, weight: 0.5, size: 0.001, value: 3 },
  { name: 'Vinyl Record', emoji: '💿', basePrice: 1875, weight: 0.2, size: 0.001, value: 3 },
  
  // Tools & Equipment
  { name: 'Hammer', emoji: '🔨', basePrice: 1875, weight: 1.0, size: 0.002, value: 2 },
  { name: 'Drill', emoji: '🔧', basePrice: 11250, weight: 2.5, size: 0.01, value: 5 },
  { name: 'Toolbox', emoji: '🧰', basePrice: 7500, weight: 5.0, size: 0.02, value: 4 },
];

export function getRandomProducts(count: number): Product[] {
  const shuffled = [...productDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return productDatabase.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.emoji.includes(searchTerm)
  ).slice(0, 6); // Limit results to 6 items
}

export function getProductByName(name: string): Product | undefined {
  return productDatabase.find(product => 
    product.name.toLowerCase() === name.toLowerCase()
  );
}