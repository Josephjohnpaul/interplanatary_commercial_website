import React, { useState } from 'react';
import HomePage from './components/HomePage';
import PlanetSelector from './components/PlanetSelector';
import ProductSearch from './components/ProductSearch';
import OrderSystem from './components/OrderSystem';
import { Rocket, ShoppingCart, Home } from 'lucide-react';

export type Planet = 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'sun';
export type SpaceAgency = 'nasa' | 'spacex' | 'blueorigin' | 'roscosmos' | 'esa';

export interface Product {
  name: string;
  emoji: string;
  basePrice: number;
  weight: number; // kg
  size: number; // cubic meters
  value: number; // relative value 1-10
}

export interface Order {
  id: string;
  product: Product;
  planet: Planet;
  agency: SpaceAgency;
  finalPrice: number;
  timestamp: Date;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search' | 'orders'>('home');
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>('mars');
  const [selectedAgency, setSelectedAgency] = useState<SpaceAgency>('spacex');
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders(prev => [...prev, order]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-xl font-bold text-white">Interplanetary Commerce Co.</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </button>
              <button
                onClick={() => setCurrentPage('search')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  currentPage === 'search'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                <Rocket className="h-4 w-4 mr-2" />
                Search
              </button>
              <button
                onClick={() => setCurrentPage('orders')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  currentPage === 'orders'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Orders ({orders.length})
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Planet and Agency Selector */}
      <PlanetSelector
        selectedPlanet={selectedPlanet}
        selectedAgency={selectedAgency}
        onPlanetChange={setSelectedPlanet}
        onAgencyChange={setSelectedAgency}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' && (
          <HomePage
            selectedPlanet={selectedPlanet}
            selectedAgency={selectedAgency}
            onAddOrder={addOrder}
          />
        )}
        {currentPage === 'search' && (
          <ProductSearch
            selectedPlanet={selectedPlanet}
            selectedAgency={selectedAgency}
            onAddOrder={addOrder}
          />
        )}
        {currentPage === 'orders' && <OrderSystem orders={orders} />}
      </main>
    </div>
  );
}

export default App;