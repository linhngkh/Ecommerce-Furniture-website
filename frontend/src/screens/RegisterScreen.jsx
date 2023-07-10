import { useState } from "react";
import { Link } from "react-router-dom";
import ActionButton from "../shares/ActionButton";
import SharedBanner from "../shares/SharedBanner";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <section className="pt-20 md:pt-20">
      <SharedBanner>Register</SharedBanner>
      <div className="mx-auto flex items-center justify-center px-20 py-20">
        <form
          onSubmit={submitHandler}
          className="W-[544px] flex h-[600px] flex-col space-y-4 p-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
        >
          <div className="">
            <h1 className="text-center font-jose text-2xl font-bold">
              Sign up
            </h1>
          </div>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          <input
            name="confirm_password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          <p className="text-sm text-subtext1">Forgot your password?</p>
          <ActionButton>Sign Up </ActionButton>

          <p className="text-center text-sm text-subtext1 ">
            Already have an Account?
            <Link to="/login">
              <span className="hover:underline">Log in</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterScreen;
