# Multi-Step Form Project
## Overview
This is a multi-step form project built using TypeScript, React, and Sass, now extended with an Express.js backend connected to MongoDB. The form allows users to input information over a series of steps, with the data from each step being validated and saved. At the final step, users can review the provided information and confirm their choices, which is then submitted to the backend for storage in MongoDB.

## Key Features:
1. **React Components**: Each step of the form is encapsulated in its own React component.
2. **Form Validation:** Simple client-side validation is implemented to ensure data integrity.
3. **State Management:** Form data is managed using React's useState hook.
4. **Reusable Components:** The form steps and navigation buttons are modular, allowing for easy scalability.
5. **Stylish UI:** The project uses Sass for styling, ensuring a clean and responsive design.
6. **Backend Integration:** An Express server with a MongoDB database is used to store form data.
7. **API Endpoint:** Data from the form is submitted to a /submit-data endpoint for storage.

## Installation

### Frontend (React App)

#### Clone the repository:
```bash
git clone https://github.com/Ratified/Fullstack-Multi-Step-Form-MERN-.git
cd multistep-form
```

#### Install dependencies:
```bash
pnpm install
```

#### Run the app:
``` bash
pnpm run dev
```

## Backend (Express App)
Go to the server directory (or create one if separate).

### Install the dependencies:
```bash
npm install express mongoose cors dotenv
```

Set up a .env file for your environment variables and include your PORT number:

```makefile
PORT=8080
MONGO_URL=mongodb+srv://<username>:<password>@backenddb.bwofx.mongodb.net/
```

### Run the backend:
```bash
node index.js
```

## Usage
The multi-step form is divided into four main steps:

1. **Step One:** Personal Information (Name, Email, Phone)
2. **Step Two:** Plan Selection (Choose a plan with pricing details)
3. **Step Three:** Add-ons (Select additional services or features)
4. **Step Four:** Review and Confirmation (Review your selections before submitting)
5. Users can navigate through the steps using Next and Go Back buttons.

When the form is completed and submitted, the data is sent to the backend’s /submit-data endpoint and saved to the MongoDB database.

## API Endpoints
**POST /submit-data**: Accepts form data in JSON format and saves it to MongoDB.


Example:
```bash
POST /submit-data
{
  "stepOneData": {
    "name": "Brielle Foley",
    "email": "todod@mailinator.com",
    "phone": "+1 (446) 905-8204"
  },
  "stepTwoData": {
    "name": "Advanced",
    "price": "12.00"
  },
  "stepThreeData": [
    {
      "name": "Larger Storage",
      "price": "2"
    },
    {
      "name": "Customizable Profile",
      "price": "3"
    }
  ]
}
```

## Technologies Used
### Frontend:
1. **TypeScript:** Strongly typed JavaScript for catching errors early in development.
2. **React:** A modern library for building interactive user interfaces.
3. **Sass:** Powerful CSS preprocessor for easier styling and maintaining a scalable codebase.


### Backend:
1. **Express.js:** A web application framework for Node.js.
2. **MongoDB:** A NoSQL database for storing form submissions.
3. **Mongoose:** An ODM library for MongoDB and Node.js.
4. **Cors:** For enabling Cross-Origin Resource Sharing.
5. **Dotenv:** For managing environment variables.

### Future Enhancements
1. **Validation:** Improve form validation with additional checks for fields like phone number formats.
2. **API Integration:** Further extend the API to handle form submission statuses or user authentication.
3. **Progress Bar:** Add a progress bar to visualize form completion status.
4. **Backend Features:** Implement authentication and a dashboard for viewing submitted data.
5. **Database:** Expand the data model to store multiple submissions per user and handle updates.

## License
This project is licensed under the MIT License.

