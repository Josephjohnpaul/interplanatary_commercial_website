import React from 'react';
import { Planet, SpaceAgency } from '../App';

interface PlanetSelectorProps {
  selectedPlanet: Planet;
  selectedAgency: SpaceAgency;
  onPlanetChange: (planet: Planet) => void;
  onAgencyChange: (agency: SpaceAgency) => void;
}

const planets = [
  { id: 'mercury' as Planet, name: 'Mercury', emoji: '☿️', description: 'Closest to sun, expensive cooling' },
  { id: 'venus' as Planet, name: 'Venus', emoji: '♀️', description: 'Acid rain insurance required' },
  { id: 'mars' as Planet, name: 'Mars', emoji: '♂️', description: 'Red planet, moderate pricing' },
  { id: 'jupiter' as Planet, name: 'Jupiter', emoji: '♃', description: 'Gas giant, floating delivery' },
  { id: 'saturn' as Planet, name: 'Saturn', emoji: '♄', description: 'Ring navigation fees apply' },
  { id: 'uranus' as Planet, name: 'Uranus', emoji: '♅', description: 'Sideways gravity surcharge' },
  { id: 'neptune' as Planet, name: 'Neptune', emoji: '♆', description: 'Windiest planet, extra packaging' },
  { id: 'sun' as Planet, name: 'The Sun', emoji: '☀️', description: '⚠️ EXTREME CONDITIONS' },
];

const agencies = [
  { id: 'spacex' as SpaceAgency, name: 'SpaceX', emoji: '🚀', multiplier: '1.2x' },
  { id: 'nasa' as SpaceAgency, name: 'NASA', emoji: '🛰️', multiplier: '1.5x' },
  { id: 'blueorigin' as SpaceAgency, name: 'Blue Origin', emoji: '🔵', multiplier: '1.8x' },
  { id: 'roscosmos' as SpaceAgency, name: 'Roscosmos', emoji: '🇷🇺', multiplier: '1.3x' },
  { id: 'esa' as SpaceAgency, name: 'ESA', emoji: '🇪🇺', multiplier: '1.4x' },
];

function PlanetSelector({ selectedPlanet, selectedAgency, onPlanetChange, onAgencyChange }: PlanetSelectorProps) {
  return (
    <div className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Planet Selection */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🌍 Select Destination Planet</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {planets.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => onPlanetChange(planet.id)}
                  className={`p-3 rounded-lg text-center transition-all transform hover:scale-105 ${
                    selectedPlanet === planet.id
                      ? 'bg-purple-600 text-white ring-2 ring-purple-400'
                      : planet.id === 'sun'
                      ? 'bg-orange-600/20 text-orange-300 border border-orange-500/30 hover:bg-orange-600/30'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  <div className="text-2xl mb-1">{planet.emoji}</div>
                  <div className="font-semibold text-sm">{planet.name}</div>
                  <div className="text-xs opacity-75">{planet.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Agency Selection */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🚀 Select Space Agency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {agencies.map((agency) => (
                <button
                  key={agency.id}
                  onClick={() => onAgencyChange(agency.id)}
                  className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                    selectedAgency === agency.id
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{agency.emoji}</span>
                      <div>
                        <div className="font-semibold">{agency.name}</div>
                        <div className="text-sm opacity-75">Cost multiplier: {agency.multiplier}</div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetSelector;