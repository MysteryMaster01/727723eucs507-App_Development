import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Plan.css';

// Sample data
const plans = [
  {
    name: 'Basic Plan',
    price: '$10/month',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ]
  },
  {
    name: 'Standard Plan',
    price: '$20/month',
    features: [
      'Feature A',
      'Feature B',
      'Feature C'
    ]
  },
  {
    name: 'Premium Plan',
    price: '$30/month',
    features: [
      'Feature X',
      'Feature Y',
      'Feature Z'
    ]
  }
];

// Header component
const Header = () => (
  <header className="header">
    <h1>Our Plans</h1>
  </header>
);

const Plan = () => {
  const navigate = useNavigate(); // Correctly initialize useNavigate

  const handlePurchase = (plan) => {
    navigate('/pay', { state: { plan } }); // Pass the plan data via state
  };

  return (
    <>
      <Header />
      <div className="plan-details-container">
        <div className="plan-grid">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <div className="plan-card-inner">
                <div className="plan-card-front">
                  <h2>{plan.name}</h2>
                  <p className="price">{plan.price}</p>
                </div>
                <div className="plan-card-back">
                  <h3>Features</h3>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button onClick={() => handlePurchase(plan)} className="purchase-button">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plan;
