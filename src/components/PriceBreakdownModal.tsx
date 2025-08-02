import React from 'react';
import { X, DollarSign } from 'lucide-react';
import { Planet, SpaceAgency, Product } from '../App';

interface PriceBreakdownModalProps {
  product: Product;
  planet: Planet;
  agency: SpaceAgency;
  breakdown: any;
  finalPrice: number;
  onClose: () => void;
}

function PriceBreakdownModal({ product, planet, agency, breakdown, finalPrice, onClose }: PriceBreakdownModalProps) {
  const planetEmojis: Record<Planet, string> = {
    mercury: '☿️',
    venus: '♀️',
    mars: '♂️',
    jupiter: '♃',
    saturn: '♄',
    uranus: '♅',
    neptune: '♆',
    sun: '☀️',
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-3xl mr-3">{product.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                <p className="text-slate-400 capitalize">
                  {planetEmojis[planet]} {planet} via {agency.toUpperCase()}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-4">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Detailed Price Breakdown
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <span className="text-slate-300">Earth Base Price</span>
                  <span className="text-white font-mono">₹{product.basePrice.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Weight Surcharge</span>
                    <div className="text-xs text-slate-500">{breakdown.weightExplanation}</div>
                  </div>
                  <span className="text-yellow-400 font-mono">+₹{breakdown.weightCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Size Premium</span>
                    <div className="text-xs text-slate-500">{breakdown.sizeExplanation}</div>
                  </div>
                  <span className="text-yellow-400 font-mono">+₹{breakdown.sizeCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Value Insurance</span>
                    <div className="text-xs text-slate-500">{breakdown.valueExplanation}</div>
                  </div>
                  <span className="text-yellow-400 font-mono">+₹{breakdown.valueCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Distance Multiplier</span>
                    <div className="text-xs text-slate-500">{breakdown.distanceExplanation}</div>
                  </div>
                  <span className="text-orange-400 font-mono">×{breakdown.distanceMultiplier}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Agency Fee</span>
                    <div className="text-xs text-slate-500">{breakdown.agencyExplanation}</div>
                  </div>
                  <span className="text-orange-400 font-mono">×{breakdown.agencyMultiplier}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-600/50">
                  <div>
                    <span className="text-slate-300">Planetary Hazard Fee</span>
                    <div className="text-xs text-slate-500">{breakdown.hazardExplanation}</div>
                  </div>
                  <span className="text-red-400 font-mono">+₹{breakdown.hazardCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-t-2 border-purple-500/30 mt-4">
                  <span className="text-xl font-bold text-white">Total Price</span>
                  <span className="text-2xl font-bold text-green-400 font-mono">
                    ₹{finalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="text-purple-300 font-semibold mb-2">💡 Fun Fact</h4>
              <p className="text-purple-200 text-sm">{breakdown.funFact}</p>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
            >
              Close Breakdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceBreakdownModal;