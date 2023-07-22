import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SharedBanner from "../shares/SharedBanner";
import ActionButton from "../shares/ActionButton";

import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../shares/Loader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fire off mutation
  const [login, { isLoading }] = useLoginMutation();

  //get user data
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      //unwrap the promise
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>My Account</SharedBanner>
      <div className="mx-auto flex items-center justify-center p-10">
        <form
          onSubmit={submitHandler}
          className="W-[544px] flex h-[474px] flex-col space-y-4 p-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
          method="POST"
          target="_blank"
        >
          <div className="">
            <h1 className="text-center font-jose text-2xl font-bold">Log in</h1>
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
            placeholder="Password"
            className="w-[400px] border-2 px-3 py-3 text-sm text-subtext1"
          />
          {/* loading */}
          {isLoading && <Loader isLoading={isLoading} />}
          {/* loading */}

          <p className="text-sm text-subtext1">Forgot your password?</p>
          <ActionButton>Sign In </ActionButton>

          <p className=" text-center text-sm text-subtext1">
            Don’t have an Account?
            <span className="ml-1">
              <Link to="/register">
                <span className=" hover:underline">Create account</span>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
