import { Product, Planet, SpaceAgency } from '../App';

interface PriceBreakdown {
  weightCost: number;
  weightExplanation: string;
  sizeCost: number;
  sizeExplanation: string;
  valueCost: number;
  valueExplanation: string;
  distanceMultiplier: number;
  distanceExplanation: string;
  agencyMultiplier: number;
  agencyExplanation: string;
  hazardCost: number;
  hazardExplanation: string;
  funFact: string;
}

const planetDistances: Record<Planet, number> = {
  mercury: 77.3, // million km average
  venus: 41.4,
  mars: 78.3,
  jupiter: 628.7,
  saturn: 1434.5,
  uranus: 2870.9,
  neptune: 4495.1,
  sun: 149.6, // Special case - closer but infinitely more dangerous
};

const agencyMultipliers: Record<SpaceAgency, number> = {
  spacex: 1.2,
  nasa: 1.5,
  blueorigin: 1.8,
  roscosmos: 1.3,
  esa: 1.4,
};

const agencyExplanations: Record<SpaceAgency, string> = {
  spacex: "Elon's premium 'making life multiplanetary' tax",
  nasa: "Government bureaucracy and Tang development fees",
  blueorigin: "Jeff Bezos needs another yacht fund surcharge",
  roscosmos: "Vodka-powered rocket fuel premium",
  esa: "European Union multi-language instruction manual costs",
};

const planetHazards: Record<Planet, { cost: number; explanation: string }> = {
  mercury: {
    cost: 3750000,
    explanation: "Extreme temperature protection: -290°F to 800°F swings require quantum thermostat"
  },
  venus: {
    cost: 5625000,
    explanation: "Acid rain umbrella insurance and pressure suit rated for 1300°F and 90x Earth atmosphere"
  },
  mars: {
    cost: 1875000,
    explanation: "Dust storm navigation and low-gravity package securing systems"
  },
  jupiter: {
    cost: 7500000,
    explanation: "Anti-gravity anchoring to prevent package from floating away in gas giant atmosphere"
  },
  saturn: {
    cost: 9000000,
    explanation: "Ring navigation insurance and ice chunk deflection shields"
  },
  uranus: {
    cost: 11250000,
    explanation: "Sideways gravity compensation and methane atmosphere breathing apparatus for delivery crew"
  },
  neptune: {
    cost: 15000000,
    explanation: "1200 mph wind resistance gear and diamond rain protective coating"
  },
  sun: {
    cost: 74999999925,
    explanation: "Impossible delivery surcharge: 27 million degrees Fahrenheit survival equipment (doesn't exist)"
  },
};

const funFacts: Record<Planet, string> = {
  mercury: "Fun fact: Your package will experience sunrise every 88 Earth days, giving it plenty of time to contemplate its expensive journey!",
  venus: "Fun fact: The delivery box will be stronger than the surface pressure that can crush a submarine - talk about premium packaging!",
  mars: "Fun fact: Your item will be the most expensive thing on Mars, making it automatically qualify for Martian luxury tax!",
  jupiter: "Fun fact: If dropped, your package would fall for about 12 hours before reaching the planet's core (where it would be crushed into a diamond)!",
  saturn: "Fun fact: Your delivery will have the best view in the solar system - those rings aren't just pretty, they're a premium scenic route!",
  uranus: "Fun fact: Your package will be delivered sideways because Uranus rotates on its side - premium orientation service included!",
  neptune: "Fun fact: The delivery winds are so strong, your package could theoretically fly back to Earth without a rocket!",
  sun: "Fun fact: Your package would be vaporized in 0.0001 seconds, making it the fastest delivery AND destruction in our service history!",
};

export function calculatePrice(product: Product, planet: Planet, agency: SpaceAgency): { finalPrice: number; breakdown: PriceBreakdown } {
  const basePrice = product.basePrice;
  
  // Weight-based costs (more weight = more fuel)
  const weightCost = product.weight * 75000; // ₹75,000 per kg
  const weightExplanation = `Rocket fuel costs ₹37,500/kg to escape Earth's gravity, plus ₹37,500/kg for interplanetary maneuvering thrusters`;
  
  // Size-based costs (larger items need bigger rockets)
  const sizeCost = product.size * 3750000; // ₹37,50,000 per cubic meter
  const sizeExplanation = `Custom cargo bay modifications and aerodynamic recalculations for ${product.size}m³ payload`;
  
  // Value-based insurance
  const valueCost = basePrice * (product.value / 10) * 2; // Higher value items need more insurance
  const valueExplanation = `Space pirate insurance and cosmic ray damage protection for high-value items (${product.value}/10 risk rating)`;
  
  // Distance multiplier
  const distance = planetDistances[planet];
  const distanceMultiplier = 1 + (distance / 1000); // Base multiplier based on distance
  const distanceExplanation = `Fuel costs increase exponentially over ${distance.toFixed(1)} million km journey through vacuum of space`;
  
  // Agency multiplier
  const agencyMultiplier = agencyMultipliers[agency];
  const agencyExplanation = agencyExplanations[agency];
  
  // Planetary hazard costs
  const hazardInfo = planetHazards[planet];
  const hazardCost = hazardInfo.cost;
  const hazardExplanation = hazardInfo.explanation;
  
  // Calculate final price
  const subtotal = basePrice + weightCost + sizeCost + valueCost;
  const afterDistance = subtotal * distanceMultiplier;
  const afterAgency = afterDistance * agencyMultiplier;
  const finalPrice = Math.round(afterAgency + hazardCost);
  
  const breakdown: PriceBreakdown = {
    weightCost,
    weightExplanation,
    sizeCost,
    sizeExplanation,
    valueCost,
    valueExplanation,
    distanceMultiplier,
    distanceExplanation,
    agencyMultiplier,
    agencyExplanation,
    hazardCost,
    hazardExplanation,
    funFact: funFacts[planet],
  };
  
  return { finalPrice, breakdown };
}