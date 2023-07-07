import ActionButton from "../../shares/ActionButton";
import SharedBanner from "../../shares/SharedBanner";
import SharedText from "../../shares/SharedText";

const Faq = () => {
  return (
    <section className="pt-10 md:pt-20 ">
      <SharedBanner>FAQ</SharedBanner>
      <div className="flex  px-10  py-10 md:px-20">
        <div className=" w-[50%] space-y-10 pb-3">
          <h1 className="font-jose text-3xl font-bold text-blue">
            General Information
          </h1>
          <div className="w-[600px] space-y-4 leading-loose">
            <p className="font-jose text-sm font-bold text-blue">
              Eu dictumst cum at sed euismood condimentum?
            </p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col bg-secondary ">
          <h3 className="mt-10 px-10 font-jose text-xl font-bold">
            Ask a Question
          </h3>
          <form
            action=""
            className="flex h-[738px] w-[566px] flex-col space-y-6 px-10 py-10"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="w-full border-2 p-2 text-sm"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject*"
              className="w-full border-2 p-2 text-sm"
            />
            <textarea
              cols="10"
              rows="6"
              className="w-full border-2 p-2 text-sm"
              placeholder="Type Your Messages"
            />
            <ActionButton>Send Mail</ActionButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Faq;
