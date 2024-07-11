// FoodCategory.tsx
import React from 'react';

type FoodCategoryProps = {
  name: string;
  onClick: () => void;
};

const FoodCategory: React.FC<FoodCategoryProps> = ({ name, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer text-sm px-3 py-2 md:py-1 rounded-md text-center bg-gray-100 text-gray-800 mb-2 md:mb-0 md:mr-2 md:inline-block transition-colors duration-300 hover:bg-gray-200"
    >
      {name}
    </li>
  );
};

export default FoodCategory;
