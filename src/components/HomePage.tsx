import React from 'react';
import ProductCard from './ProductCard';
import { Planet, SpaceAgency, Order } from '../App';
import { getRandomProducts } from '../utils/productDatabase';

interface HomePageProps {
  selectedPlanet: Planet;
  selectedAgency: SpaceAgency;
  onAddOrder: (order: Order) => void;
}

function HomePage({ selectedPlanet, selectedAgency, onAddOrder }: HomePageProps) {
  const randomProducts = getRandomProducts(8);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl backdrop-blur-sm border border-purple-500/20">
        <h1 className="text-5xl font-bold text-white mb-4">
          🚀 Welcome to Interplanetary Commerce! 🌌
        </h1>
        <p className="text-xl text-purple-200 mb-6 max-w-3xl mx-auto">
          The universe's most expensive shipping service! Get Earth's finest items delivered 
          to any planet in our solar system. Warning: Prices may cause financial bankruptcy.
        </p>
        <div className="text-lg text-yellow-300 font-semibold">
          Currently shipping to: <span className="capitalize">{selectedPlanet}</span> via {selectedAgency.toUpperCase()}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🌟 Today's Featured Interplanetary Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              selectedPlanet={selectedPlanet}
              selectedAgency={selectedAgency}
              onAddOrder={onAddOrder}
            />
          ))}
        </div>
      </div>

      {/* Warning Notice */}
      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
        <h3 className="text-2xl font-bold text-red-400 mb-2">⚠️ DISCLAIMER ⚠️</h3>
        <p className="text-red-200">
          Interplanetary Commerce Co. is not responsible for items arriving as space dust, 
          being intercepted by aliens, or spontaneously combusting during atmospheric entry. 
          Delivery times may vary from 6 months to 847 years. No refunds in this solar system.
        </p>
      </div>
    </div>
  );
}

export default HomePage;