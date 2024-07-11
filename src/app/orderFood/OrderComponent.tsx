'use client'
import React from 'react';
import FoodCategory from '@/app/orderFood/FoodCatogory'; // Assuming a component for food categories
import FoodItem from '@/app/orderFood/FoodItem'; // Assuming a component for individual food items
import { useState } from 'react';

const OrderComponent = () => {
  // Mock data for food categories and items (replace with actual data or API calls)
  const categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];
  
  // Mock data for Indian food items with availability
  const foodItems = [
    { id: 1, name: 'Paneer Tikka', description: 'Spicy grilled cottage cheese cubes', price: 10.99, category: 'Starters', available: true },
    { id: 2, name: 'Chicken Biryani', description: 'Fragrant rice dish with chicken and spices', price: 12.99, category: 'Main Course', available: true },
    { id: 3, name: 'Gulab Jamun', description: 'Deep-fried dough balls in sugar syrup', price: 6.99, category: 'Desserts', available: true },
    { id: 4, name: 'Masala Chai', description: 'Indian spiced tea with milk', price: 3.49, category: 'Beverages', available: false }, // Example of unavailable item
    { id: 5, name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes', price: 5.49, category: 'Starters', available: true },
    { id: 6, name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 14.99, category: 'Main Course', available: true },
    { id: 7, name: 'Rasgulla', description: 'Spongy Indian dessert soaked in sugar syrup', price: 7.99, category: 'Desserts', available: true },
    { id: 8, name: 'Lassi', description: 'Refreshing yogurt-based drink', price: 4.99, category: 'Beverages', available: true },

  ];

  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([]);

  // Function to add item to cart
  const handleAddToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems([...cartItems, item]);
  };

  // Function to handle category filtering
  const handleCategoryFilter = (category: string | null) => {
    setFilteredCategory(category);
  };

  // Filter food items based on selected category
  const filteredItems = filteredCategory ? foodItems.filter(item => item.category === filteredCategory) : foodItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar or tabs for categories */}
      <div className="col-span-1">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {/* All category option */}
          <FoodCategory key="all" name="All" onClick={() => handleCategoryFilter(null)} />
          {/* Render each category */}
          {categories.map((category, index) => (
            <FoodCategory key={index} name={category} onClick={() => handleCategoryFilter(category)} />
          ))}
        </ul>
      </div>

      {/* Food items display */}
      <div className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render filtered food items */}
          {filteredItems.map((item) => (
            <FoodItem key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default OrderComponent;
