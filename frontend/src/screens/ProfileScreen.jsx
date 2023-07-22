import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../slices/userApiSlice";

import ActionButton from "../shares/ActionButton";
import SharedBanner from "../shares/SharedBanner";

import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import Loader from "../shares/Loader";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateUser({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        toast.success("Profile Updated");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>Update Profile User</SharedBanner>
      <div className="mx-auto flex items-center justify-center p-10">
        <form
          onSubmit={submitHandler}
          className="W-[544px] flex h-[600px] flex-col space-y-4 p-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
        >
          <div className="">
            <h1 className="text-center font-jose text-2xl font-bold">
              Update Profile User
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

          <ActionButton>Update</ActionButton>
        </form>
      </div>
    </section>
  );
};

export default ProfileScreen;
