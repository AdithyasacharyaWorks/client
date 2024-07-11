// FoodItem.tsx
import React from 'react';

type FoodItemProps = {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
  };
  onAddToCart: (item: { id: number; name: string; price: number }) => void;
};

const FoodItem: React.FC<FoodItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-primary text-blue-500">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
        disabled={!item.available}
        className={`bg-black text-white font-bold py-2 px-4 rounded mt-2 ${item.available ? 'hover:bg-gray-800' : 'opacity-50 cursor-not-allowed'}`}
      >
        {item.available ? 'Add to Cart' : 'Not Available'}
      </button>
    </div>
  );
};

export default FoodItem;
