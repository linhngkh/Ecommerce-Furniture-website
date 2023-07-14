import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useRegisterMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";

import ActionButton from "../shares/ActionButton";
import SharedBanner from "../shares/SharedBanner";
import Loader from "../shares/Loader";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>Register</SharedBanner>
      <div className="mx-auto flex items-center justify-center p-10">
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
          {/* loading */}
          {isLoading && <Loader isLoading={isLoading} />}

          <ActionButton>Sign Up </ActionButton>

          <p className="text-center text-sm text-subtext1 ">
            Already have an Account?{" "}
            <span>
              <Link to="/login">
                <span className="hover:underline">Log in</span>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterScreen;
