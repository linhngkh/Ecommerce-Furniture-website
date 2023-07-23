import mongoose from "mongoose";
import bcript from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//middleware:pre before saving to db
userSchema.pre("save", async function (next) {
  //if !user.create
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcript.genSalt(10);
  //hash password before saving to db
  this.password = await bcript.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcript.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
