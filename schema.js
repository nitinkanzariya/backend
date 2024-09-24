import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId:{
      type :Number,
      required:true,
      unique:true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    joinDate:{
      type:String,
      required:true,
    },
    salary:{
      type:Number,
      required:true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("employee", userSchema);

export { User };
