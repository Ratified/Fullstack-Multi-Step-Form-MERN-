import { useState } from 'react';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import '../css/main.css';
import '../css/stepTwo.css';

type StepTwoProps = {
  onNext: () => void;
  onPrevious: () => void;
  updateFormData: (step: string, data: object) => void;
};

const StepTwo: React.FC<StepTwoProps> = ({ onNext, onPrevious, updateFormData }) => {
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  const handleSelectPlan = (name: string, price: string) => {
    setSelectedPlan({ name, price });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData('stepTwoData', selectedPlan);  // Pass data to parent
    onNext();  // Move to the next step
  };

  const getBorderStyle = (planName: string) => {
    return selectedPlan.name === planName ? '2px solid hsl(213, 96%, 18%)' : '1px solid hsl(229, 24%, 87%)';
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='stepTwoForm'>
        <div className="form-heading">
          <h2 className="form-step_title">Select Your Plan</h2>
          <p className="form-step_subtitle">
            You have the option for monthly or yearly billing.
          </p>
        </div>

        <div className="billingOptions-cards">
          <div
            className="billingOptions-card arcade"
            onClick={() => handleSelectPlan('Arcade', '16')}
            style={{ border: getBorderStyle('Arcade') }}
          >
            <img src={arcade} alt="Arcade billing option card" />
            <h2 className="billing-title">Arcade</h2>
            <p className="billing-price">
              <span className="price">$16.00</span> / month
            </p>
          </div>

          <div
            className="billingOptions-card advanced"
            onClick={() => handleSelectPlan('Advanced', '12.00')}
            style={{ border: getBorderStyle('Advanced') }}
          >
            <img src={advanced} alt="Advanced billing option card" />
            <h2 className="billing-title">Advanced</h2>
            <p className="billing-price">
              <span className="price">$12.00</span> / month
            </p>
          </div>

          <div
            className="billingOptions-card pro"
            onClick={() => handleSelectPlan('Pro', '15.00')}
            style={{ border: getBorderStyle('Pro') }}
          >
            <img src={pro} alt="Pro billing option card" />
            <h2 className="billing-title">Pro</h2>
            <p className="billing-price">
              <span className="price">$15.00</span> / month
            </p>
          </div>
        </div>

        <div className="form-buttons">
          <a href="#" onClick={onPrevious}>Go Back</a>
          <button type="submit" className='btn-medium'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default StepTwo;