import '../css/stepFour.css';

type StepFourProps = {
  onNext: () => void;
  onPrevious: () => void;
  formData: {
    stepOneData: { name: string; email: string; phone: string };
    stepTwoData: { name: string; price: string };
    stepThreeData: { name: string; price: string }[];
  };
  submitData: () => void;  // Add this prop
}

const StepFour: React.FC<StepFourProps> = ({ formData, onPrevious, onNext, submitData }) => {

  const { stepTwoData, stepThreeData } = formData;

  // Calculate total price
  const totalPrice = parseFloat(stepTwoData.price) + stepThreeData.reduce((acc, addOn) => acc + parseFloat(addOn.price), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitData();  // Call submitData when confirming
    onNext();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2 className="form-step_title">Finishing Up</h2>
        <p className="form-step_subtitle">Double-check everything looks OK before confirming</p>
      </div>

      <div className="choices">
        {/* Plan */}
        <div className="plan">
          <h3>{stepTwoData.name} (Monthly)</h3>
          <h3>${stepTwoData.price}/mo</h3>
        </div>

        <hr />

        {/* Add-ons */}
        <div className="add-ons">
          <ul>
            {stepThreeData.map((addOn) => (
              <li key={addOn.name}>
                <p>{addOn.name}</p>
                <p>${addOn.price}/mo</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
      {/* Total */}
      <div className="total">
        <h3>Total (per month):</h3>
        <p>${totalPrice.toFixed(2)}/mo</p>
      </div>

      <div className="form-buttons">
        <a href="#" onClick={onPrevious}>Go Back</a>
        <button type="submit" className='btn-medium'>Confirm</button>
      </div>
    </form>
  )
}

export default StepFour;