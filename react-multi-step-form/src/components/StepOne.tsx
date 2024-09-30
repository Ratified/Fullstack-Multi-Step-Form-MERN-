import { useState } from "react";
import '../css/stepOne.css';

type StepOneProps = {
  onNext: () => void;
  updateFormData: (step: string, data: object) => void;
};

const StepOne: React.FC<StepOneProps> = ({ onNext, updateFormData }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!name) {
      newErrors.name = 'Please enter your name';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone || phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, pass data back to parent and move to the next step
    updateFormData('stepOneData', { name, email, phone });
    onNext();
    setErrors({}); // Clear errors if form is valid
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2 className="form-step_title">Personal Information</h2>
        <p className="form-step_subtitle">Please provide your name, email address and phone number</p>
      </div>

      <div className="form-groups">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
      </div>

      <div className="form-submitButton">
        <button type="submit" className="next-btn">Next</button>
      </div>
    </form>
  );
};

export default StepOne;