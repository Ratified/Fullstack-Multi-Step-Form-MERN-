import mongoose from "mongoose";

const stepThreeDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const formDataSchema = new mongoose.Schema({
  stepOneData: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },

  stepTwoData: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },

  stepThreeData: [stepThreeDataSchema],
});

const formData = mongoose.model("formData", formDataSchema);

export default formData;
