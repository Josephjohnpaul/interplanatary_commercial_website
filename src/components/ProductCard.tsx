import React, { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import PriceBreakdownModal from './PriceBreakdownModal';
import SunWarningModal from './SunWarningModal';
import { Planet, SpaceAgency, Product, Order } from '../App';
import { calculatePrice } from '../utils/priceCalculator';

interface ProductCardProps {
  product: Product;
  selectedPlanet: Planet;
  selectedAgency: SpaceAgency;
  onAddOrder: (order: Order) => void;
}

function ProductCard({ product, selectedPlanet, selectedAgency, onAddOrder }: ProductCardProps) {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showSunWarning, setShowSunWarning] = useState(false);

  const { finalPrice, breakdown } = calculatePrice(product, selectedPlanet, selectedAgency);

  const handleOrderClick = () => {
    if (selectedPlanet === 'sun') {
      setShowSunWarning(true);
      return;
    }

    const order: Order = {
      id: Math.random().toString(36).substr(2, 9),
      product,
      planet: selectedPlanet,
      agency: selectedAgency,
      finalPrice,
      timestamp: new Date(),
    };

    onAddOrder(order);
  };

  return (
    <>
      <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all transform hover:scale-105">
        <div className="text-center mb-4">
          <div className="text-6xl mb-3">{product.emoji}</div>
          <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
          <div className="text-sm text-slate-400 space-y-1">
            <div>Weight: {product.weight}kg</div>
            <div>Size: {product.size}m³</div>
            <div>Earth Price: ₹{product.basePrice.toLocaleString()}</div>
          </div>
        </div>

        <div className="border-t border-slate-600/50 pt-4">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              ₹{finalPrice.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 capitalize">
              Delivered to {selectedPlanet}
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setShowBreakdown(true)}
              className="w-full flex items-center justify-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 rounded-lg transition-all"
            >
              <Info className="h-4 w-4 mr-2" />
              Price Breakdown
            </button>
            
            <button
              onClick={handleOrderClick}
              className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedPlanet === 'sun'
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {selectedPlanet === 'sun' ? 'Order (Risky!)' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {showBreakdown && (
        <PriceBreakdownModal
          product={product}
          planet={selectedPlanet}
          agency={selectedAgency}
          breakdown={breakdown}
          finalPrice={finalPrice}
          onClose={() => setShowBreakdown(false)}
        />
      )}

      {showSunWarning && (
        <SunWarningModal onClose={() => setShowSunWarning(false)} />
      )}
    </>
  );
}

export default ProductCard;