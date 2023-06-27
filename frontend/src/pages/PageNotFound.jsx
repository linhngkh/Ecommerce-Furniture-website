import { Link } from "react-router-dom";
import ActionButton from "../shares/ActionButton";
import SharedBanner from "../shares/SharedBanner";
import NotFound from "/assets/notfound.png";
const PageNotFound = () => {
  return (
    <section className="mt-10 md:mt-20">
      <SharedBanner>404 Not Found</SharedBanner>
      <div className="mx-auto flex flex-col items-center justify-center">
        <img src={NotFound} alt="page not found" className="w-[50%]" />
        <Link to={"/"} className="mb-5">
          <ActionButton>Back To Home</ActionButton>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
