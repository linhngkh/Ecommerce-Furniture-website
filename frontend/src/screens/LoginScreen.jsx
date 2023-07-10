import { useState } from "react";
import { Link } from "react-router-dom";
import SharedBanner from "../shares/SharedBanner";
import ActionButton from "../shares/ActionButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <section className="pt-20 md:pt-20">
      <SharedBanner>My Account</SharedBanner>
      <div className="mx-auto flex items-center justify-center px-20 py-20">
        <form
          onSubmit={submitHandler}
          className="W-[544px] flex h-[474px] flex-col space-y-4 p-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
        >
          <div className="">
            <h1 className="text-center font-jose text-2xl font-bold">Login</h1>
            <p className="text-center text-sm text-subtext1">
              Please login using account detail bellow.
            </p>
          </div>
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
            placeholder="Email Address"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          <p className="text-sm text-subtext1">Forgot your password?</p>
          <ActionButton>Sign In </ActionButton>
          <Link to="/register">
            <p className="text-center text-sm text-subtext1 hover:underline">
              Don’t have an Account? Create account
            </p>
          </Link>{" "}
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
