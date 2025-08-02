import React, { useState } from 'react';
import { Package, Calendar, MapPin, Building2, Truck, CheckCircle } from 'lucide-react';
import { Order } from '../App';

interface OrderSystemProps {
  orders: Order[];
}

function OrderSystem({ orders }: OrderSystemProps) {
  const [confirmedOrders, setConfirmedOrders] = useState<Set<string>>(new Set());

  const handleConfirmOrder = (orderId: string) => {
    setConfirmedOrders(prev => new Set(prev).add(orderId));
  };

  const planetEmojis = {
    mercury: '☿️',
    venus: '♀️',
    mars: '♂️',
    jupiter: '♃',
    saturn: '♄',
    uranus: '♅',
    neptune: '♆',
    sun: '☀️',
  };

  const getRandomDeliveryTime = () => {
    const times = [
      '6-8 months',
      '2-3 years',
      '47 years (traffic on Jupiter)',
      '6 months (if Mars aligns properly)',
      '12-847 years (depends on solar winds)',
      '∞ years (package stuck in asteroid belt)',
      '3 years (waiting for launch window)',
    ];
    return times[Math.floor(Math.random() * times.length)];
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-purple-500/20">
          <Package className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">No Orders Yet</h2>
          <p className="text-slate-400 mb-6">
            Your interplanetary shopping cart is empty. Start exploring our 
            ridiculously expensive catalog!
          </p>
          <div className="text-6xl mb-2">🛒</div>
          <p className="text-sm text-purple-300">
            Fun fact: You could buy a house in Mumbai for the price of shipping 
            a candy bar to Neptune!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          📦 Your Interplanetary Orders
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Track your astronomically expensive deliveries across the solar system.
          Total Orders: {orders.length} | Total Spent: ₹{orders.reduce((sum, order) => sum + order.finalPrice, 0).toLocaleString()}
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => {
          const isConfirmed = confirmedOrders.has(order.id);
          
          return (
            <div
              key={order.id}
              className={`bg-slate-800/30 backdrop-blur-sm border rounded-2xl p-6 transition-all ${
                isConfirmed 
                  ? 'border-green-500/50 bg-green-900/10' 
                  : 'border-purple-500/20 hover:border-purple-400/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Product Info */}
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{order.product.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{order.product.name}</h3>
                    <div className="text-sm text-slate-400 space-y-1">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Destination: {planetEmojis[order.planet]} {order.planet}
                      </div>
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        Agency: {order.agency.toUpperCase()}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Ordered: {order.timestamp.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="space-y-3">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      ₹{order.finalPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-400">Total Price</div>
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-300">
                    <Truck className="h-4 w-4 mr-2 text-blue-400" />
                    Est. Delivery: {getRandomDeliveryTime()}
                  </div>
                  
                  <div className="text-xs text-slate-500">
                    Order ID: {order.id.toUpperCase()}
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-center lg:justify-end">
                  {isConfirmed ? (
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-2" />
                      <div className="text-green-400 font-semibold">Order Confirmed!</div>
                      <div className="text-xs text-green-300 mt-1">
                        Spacecraft has been launched*
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        *May explode during takeoff
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConfirmOrder(order.id)}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      Confirm Order
                    </button>
                  )}
                </div>
              </div>

              {/* Humorous Disclaimer */}
              {isConfirmed && (
                <div className="mt-6 pt-4 border-t border-slate-600/50">
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                    <p className="text-yellow-200 text-xs text-center">
                      🚀 Your package is now hurtling through space at incredible speeds! 
                      Please note: We are not responsible for packages being intercepted by aliens, 
                      getting lost in wormholes, or being used as fuel by desperate astronauts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-4 text-center">💰 Order Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400">{orders.length}</div>
            <div className="text-sm text-slate-400">Total Items</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              ₹{orders.reduce((sum, order) => sum + order.finalPrice, 0).toLocaleString()}
            </div>
            <div className="text-sm text-slate-400">Total Spent</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">{confirmedOrders.size}</div>
            <div className="text-sm text-slate-400">Confirmed Orders</div>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-slate-500">
          Remember: All sales are final in this solar system. Refunds only available in parallel universes.
        </div>
      </div>
    </div>
  );
}

export default OrderSystem;