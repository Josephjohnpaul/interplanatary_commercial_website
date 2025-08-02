import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';
import { Planet, SpaceAgency, Order, Product } from '../App';
import { searchProducts } from '../utils/productDatabase';

interface ProductSearchProps {
  selectedPlanet: Planet;
  selectedAgency: SpaceAgency;
  onAddOrder: (order: Order) => void;
}

function ProductSearch({ selectedPlanet, selectedAgency, onAddOrder }: ProductSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const results = searchProducts(searchTerm);
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          🔍 AI-Powered Product Search
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Our advanced AI analyzes Earth's marketplace to find the perfect items for your 
          interplanetary delivery needs. Prices calculated using quantum economics!
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for any Earth item... (e.g., pizza, laptop, rubber duck)"
            className="w-full px-6 py-4 pl-12 bg-slate-800/50 border border-purple-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
          <button
            onClick={handleSearch}
            disabled={!searchTerm.trim() || isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all flex items-center"
          >
            {isSearching ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                AI Analyzing...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="text-center py-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <Loader2 className="animate-spin h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Processing...</h3>
            <p className="text-slate-300">
              Analyzing quantum market fluctuations and calculating interplanetary logistics...
            </p>
          </div>
        </div>
      )}

      {!isSearching && hasSearched && (
        <>
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                🎯 Found {searchResults.length} items for "{searchTerm}"
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product, index) => (
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
          ) : (
            <div className="text-center py-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
                <p className="text-slate-300">
                  Our AI couldn't find "{searchTerm}" in the Earth marketplace. 
                  Try searching for common items like "coffee", "phone", or "toothbrush"!
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {!hasSearched && (
        <div className="text-center py-12">
          <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-purple-500/20">
            <div className="text-6xl mb-4">🤖🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Search!</h3>
            <p className="text-slate-300 mb-4">
              Enter any Earth item above and our AI will find it for you. Popular searches include:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Pizza', 'iPhone', 'Coffee', 'Car', 'Rubber Duck', 'Diamond Ring'].map((item) => (
                <button
                  key={item}
                  onClick={() => setSearchTerm(item)}
                  className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm hover:bg-purple-600/50 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSearch;