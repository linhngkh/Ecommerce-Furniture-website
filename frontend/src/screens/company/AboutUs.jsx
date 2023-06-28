import SharedBanner from "../../shares/SharedBanner";
import SharedText from "../../shares/SharedText";
import ActionButton from "../../shares/ActionButton";
import AboutUsImage from "/assets/about-us.png";
import Offers from "../../components/Offers";

const AboutUs = () => {
  return (
    <section className="mt-10 md:mt-20">
      <SharedBanner>About Us </SharedBanner>
      <div className="mx-auto flex w-full items-center justify-center md:gap-5 md:px-20 md:py-20">
        <div className="w-[50%]">
          <img src={AboutUsImage} alt="about-us" className=" object-contain" />
        </div>

        <div className="w-[50%] space-y-4">
          <h1 className="font-jose text-2xl font-extrabold text-blue">
            Know About Our Ecomerce <br /> Business, History
          </h1>
          <p className=" text-xs text-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <ActionButton>Contact us</ActionButton>
        </div>
      </div>

      <div className="w-full md:px-20">
        <SharedText>Our Features</SharedText>
        <Offers />
      </div>

      <div className="w-full bg-[#fbfbff] p-10 md:px-20">
        <SharedText>Our Client Say!</SharedText>
      </div>
    </section>
  );
};

export default AboutUs;
