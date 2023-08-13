// src/App.tsx
import React from 'react';
import RecipeCard from './RecipeCard';

const Header: React.FC = () => {
  const recipes = [
    {
      name: 'Chocolate Chip Cookies',
      costInNaira: 1500,
      exchangeRate: 440,
      image: 'path/to/chocolate-chip-cookies.jpg', // Replace with actual image path
      calories: 150,
    },
    // Add more recipes here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Cost Converter</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            costInNaira={recipe.costInNaira}
            exchangeRate={recipe.exchangeRate}
            image={recipe.image}
            calories={recipe.calories}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
