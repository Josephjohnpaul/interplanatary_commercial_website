import React from 'react';
import { X, Flame, AlertTriangle, Briefcase } from 'lucide-react';

interface SunWarningModalProps {
  onClose: () => void;
}

function SunWarningModal({ onClose }: SunWarningModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-orange-900 to-red-900 border-2 border-orange-500 rounded-2xl max-w-2xl w-full animate-pulse">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Flame className="h-16 w-16 text-orange-400 animate-bounce mr-4" />
              <AlertTriangle className="h-16 w-16 text-red-400 animate-bounce" />
            </div>
            <h2 className="text-3xl font-bold text-orange-200 mb-2">⚠️ EXTREME DELIVERY ZONE ⚠️</h2>
            <p className="text-xl text-orange-300">Wait... You're still alive?!</p>
          </div>

          {/* Warning Content */}
          <div className="bg-black/30 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-red-300 mb-4">🔥 SUN DELIVERY STATUS UPDATE 🔥</h3>
            
            <div className="space-y-4 text-orange-200">
              <p className="text-lg">
                <strong>Dear Impossibly Heat-Resistant Customer,</strong>
              </p>
              
              <p>
                We're absolutely BAFFLED that you're still alive to place this order! 
                Our delivery statistics for the Sun are quite concerning:
              </p>

              <div className="bg-red-900/30 rounded-lg p-4 my-4">
                <h4 className="font-bold text-red-300 mb-2">📊 Sun Delivery Stats:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Delivery Attempts: 47,382</li>
                  <li>• Successful Deliveries: 0</li>
                  <li>• Delivery Drivers Returned: 0</li>
                  <li>• Melted Packages: 47,382</li>
                  <li>• Vaporized Spacecraft: 47,382</li>
                </ul>
              </div>

              <p>
                Since you appear to have superhuman heat resistance, we have a 
                <strong className="text-yellow-300"> SPECIAL JOB OFFER</strong> for you!
              </p>
            </div>
          </div>

          {/* Job Offer */}
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
              <Briefcase className="h-6 w-6 mr-2" />
              🌟 EXCLUSIVE CAREER OPPORTUNITY! 🌟
            </h3>
            
            <div className="text-yellow-200 space-y-3">
              <p className="text-lg font-semibold">
                Position: Chief Sun Delivery Officer
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-yellow-300">Benefits:</h4>
                  <ul className="space-y-1">
                    <li>• Unmatched base salary: ♾️ million/year</li>
                    <li>• Unlimited vacation days*</li>
                    <li>• Free sunscreen (industrial grade)</li>
                    <li>• Life insurance: $0.01</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300">Requirements:</h4>
                  <ul className="space-y-1">
                    <li>• Heat immunity</li>
                    <li>• Ability to survive 5,778K temperatures</li>
                    <li>• Own fire-proof spaceship</li>
                    <li>• No fear of certain death</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-yellow-400 italic">
                *Vacation days may be permanently extended due to molecular disintegration
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all flex items-center justify-center"
            >
              <X className="h-5 w-5 mr-2" />
              Nevermind, I Choose Life
            </button>
            
            <button
              onClick={() => {
                alert("🔥 CONGRATULATIONS! 🔥\n\nYou've been hired as our Chief Sun Delivery Officer!\n\nPlease report to our launch pad immediately. \n\nP.S. - We'll send your salary to your next of kin.");
                onClose();
              }}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition-all flex items-center justify-center animate-pulse"
            >
              <Flame className="h-5 w-5 mr-2" />
              I Accept This Job!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunWarningModal;