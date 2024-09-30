# Multi-Step Form Project
## Overview
This is a multi-step form project built using TypeScript, React, and Sass. The form allows users to input information over a series of steps, with the data from each step being validated and saved. At the final step, users can review the provided information and confirm their choices.

## Key Features:

1. **React Components**: Each step of the form is encapsulated in its own React component.
2. **Form Validation**: Simple client-side validation is implemented to ensure data integrity.
3. **State Management**: Form data is managed using React's useState hook.
4. **Reusable Components**: The form steps and navigation buttons are modular, allowing for easy scalability.
5. **Stylish UI**: The project uses Sass for styling, ensuring a clean and responsive design.

## Installation
Clone the repository:
```bash
  git clone https://github.com/Ratified/Multi-Step-Form.git
  cd multistep-form
```

## Install dependencies:
```bash
pnpm install
```

## Run the app:
```bash
pnpm run dev
```

## Usage
The multi-step form is divided into four main steps:

1. Step One: Personal Information (Name, Email, Phone)
2. Step Two: Plan Selection (Choose a plan with pricing details)
3. Step Three: Add-ons (Select additional services or features)
4. Step Four: Review and Confirmation (Review your selections before submitting)
5. Navigate through the steps using the Next and Go Back buttons.

## Technologies Used
1. **TypeScript**: Strongly typed JavaScript for catching errors early in development.
2. **React**: A modern library for building interactive user interfaces.
3. **Sass**: Powerful CSS preprocessor for easier styling and maintaining a scalable codebase.

## Future Enhancements
1. **Validation**: Improve form validation with additional checks for fields like phone number formats.
2. **API Integration**: Submit the form data to an external API once the form is completed.
3. **Progress Bar**: Add a progress bar to visualize form completion status.
4. **Backend**: Implement a backend to save form data to a database.

## License
This project is licensed under the MIT License.