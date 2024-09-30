import { useState } from "react";
import Navbar from "./components/Navbar";
import StepTwo from "./components/StepTwo";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import Finish from "./components/Finish";

const App = () => {
  const [formData, setFormData] = useState({
    stepOneData: {},
    stepTwoData: {},
    stepThreeData: [],
  });

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Function to handle data submission from child components
  const updateFormData = (step: string, data: object) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: data,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  const submitData = async () => {  
    try{
      const response = await fetch('http://localhost:8080/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok){
        console.log(`An error occurred while trying to save to the database`)
      }

      const data = await response.json();
      console.log(data)
    } catch(error){
      console.error(error)
    }
    console.log("Data submitted successfully:", formData);
  };

  return (
    <div className="container">
      <Navbar />

      <div className="form-step">
        {currentStep === 1 && (
          <StepOne onNext={handleNextStep} updateFormData={updateFormData} />
        )}
        {currentStep === 2 && (
          <StepTwo
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            formData={formData}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            submitData={submitData}  
          />
        )}
        {currentStep > 4 && <Finish />}
      </div>

      {/* Debugging purpose: Only used this to check the format of my JSON*/}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default App;