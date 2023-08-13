// src/components/RecipeCard.tsx
import React from 'react';

interface RecipeCardProps {
  name: string;
  costInNaira: number;
  exchangeRate: number;
  image: string;
  calories: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, costInNaira, exchangeRate, image, calories }) => {
  const calculateCostInUSD = (): number => {
    return costInNaira / exchangeRate;
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <img className="w-full h-48 object-cover mb-2 rounded" src={image} alt={name} />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-2">Calories: {calories}</p>
      <p className="mt-2">Cost in Naira: ₦{costInNaira}</p>
      <p className="mt-2">Cost in USD: ${calculateCostInUSD().toFixed(2)}</p>
      <button className="mt-4 py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click to see USD price
      </button>
    </div>
  );
};

export default RecipeCard;
