import { useState } from "react";
import '../css/main.css';
import '../css/stepThree.css';

type StepThreeProps = {
  onNext: () => void;
  onPrevious: () => void;
  updateFormData: (step: string, data: object) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onPrevious, onNext, updateFormData }) => {

  const [selectedAddOns, setSelectedAddOns] = useState<{ name: string; price: string }[]>([]);

  // Toggles add-on selection
  const handleSelectedAddOn = (name: string, price: string) => {
    setSelectedAddOns(prevAddOns => {
      const isSelected = prevAddOns.some(addOn => addOn.name === name);
      
      if (isSelected) {
        return prevAddOns.filter(addOn => addOn.name !== name);
      } else {
        return [...prevAddOns, { name, price }];
      }
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData('stepThreeData', selectedAddOns);
    onNext();
  }

  const isAddOnSelected = (name: string) => {
    return selectedAddOns.some(addOn => addOn.name === name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2 className="form-step_title">Pick add-ons</h2>
        <p className="form-step_subtitle">Add-ons help enhance your gaming experience</p>
      </div>

      <div className="add-ons">
        <div 
          className={`add-on ${isAddOnSelected('Online Service') ? 'add-on--selected' : ''}`}
          onClick={() => handleSelectedAddOn('Online Service', '1')}
        >
          <input
            type="checkbox"
            checked={isAddOnSelected('Online Service')}
            onChange={() => {}}
          />
          <div className="add-on__description">
            <h3>Online Service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <div className="add-on__price">
            <p>+$1/mo</p>
          </div>
        </div>

        <div 
          className={`add-on ${isAddOnSelected('Larger Storage') ? 'add-on--selected' : ''}`}
          onClick={() => handleSelectedAddOn('Larger Storage', '2')}
        >
          <input
            type="checkbox"
            checked={isAddOnSelected('Larger Storage')}
            onChange={() => {}}
          />
          <div className="add-on__description">
            <h3>Larger Storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="add-on__price">
            <p>+$2/mo</p>
          </div>
        </div>

        <div 
          className={`add-on ${isAddOnSelected('Customizable Profile') ? 'add-on--selected' : ''}`}
          onClick={() => handleSelectedAddOn('Customizable Profile', '3')}
        >
          <input
            type="checkbox"
            checked={isAddOnSelected('Customizable Profile')}
            onChange={() => {}}
          />
          <div className="add-on__description">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <div className="add-on__price">
            <p>+$3/mo</p>
          </div>
        </div>
      </div>

      <div className="form-buttons">
        <a href="#" onClick={onPrevious}>Go Back</a>
        <button type="submit" className='btn-medium'>Submit</button>
      </div>
    </form>
  )
}

export default StepThree;