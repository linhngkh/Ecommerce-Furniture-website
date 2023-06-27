import SharedBanner from "../shares/SharedBanner";
import Ellipse1 from "/assets/accessories/Ellipse44.png";
import Ellipse2 from "/assets/accessories/Ellipse45.png";
import Ellipse3 from "/assets/accessories/Ellipse46.png";
import Ellipse4 from "/assets/accessories/Group97.png";
import Ellipse5 from "/assets/accessories/Group94.png";
import AboutUs from "/assets/accessories/aboutus.png";
import ActionButton from "../shares/ActionButton";
const Contact = () => {
  return (
    <section className="pt-20 md:pt-20">
      <SharedBanner>Contact Us</SharedBanner>
      <div className="px-20 py-20">
        <div className="flex">
          <div className="flex w-[50%] flex-col space-y-3">
            <h1 className="font-jose text-2xl font-extrabold">
              Information About us
            </h1>
            <p className="w-[500px] text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <img src={Ellipse5} alt="ecllipse" className="w-10" />
          </div>

          <div className="flex w-[50%] flex-col gap-5">
            <h1 className="font-jose text-2xl font-extrabold">Contact Way</h1>
            <div className="flex gap-5">
              <div className=" flex flex-row gap-3">
                <div>
                  <img src={Ellipse1} alt="ecllipse" className="w-8" />
                </div>

                <div className=" text-sm text-subtext">
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className=" flex flex-row gap-3">
                <div>
                  <img src={Ellipse2} alt="ecllipse" className="w-8" />
                </div>

                <div className="text-sm text-subtext">
                  <p>
                    Support Forum <br />
                    For over 24hr
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" flex flex-row gap-3">
                <div>
                  <img src={Ellipse3} alt="ecllipse" className="w-8" />
                </div>

                <div className="text-sm text-subtext">
                  <p>
                    20 Margaret st, London <br />
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>

              <div className=" flex flex-row  gap-3">
                <div>
                  <img src={Ellipse4} alt="ecllipse" className="w-8" />
                </div>

                <div className=" text-sm text-subtext">
                  <p>
                    Free standard shipping <br />
                    on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex">
            <div className="w-[50%] space-y-4">
              <h1 className="font-jose text-2xl font-extrabold">
                Get In Touch
              </h1>
              <p className="w-[600px] text-sm text-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>

              {/* form */}
              <form className="space-y-6 pt-7">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    className="w-[50%] border-2 p-2 text-sm"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your E-mail"
                    className="w-[50%] border-2 p-2 text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your E-mail"
                  className="w-full border-2 p-2 text-sm"
                />
                <textarea
                  name="Type Your Messages"
                  placeholder="Type Your Messages"
                  id=""
                  cols="20"
                  rows="8"
                  className="w-full border-2 p-2 text-sm"
                />
                <ActionButton>Send Mail</ActionButton>
              </form>
            </div>

            <div className="flex w-[50%] items-center justify-center">
              <img src={AboutUs} alt="aboutus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
