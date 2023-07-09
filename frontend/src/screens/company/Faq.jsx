import ActionButton from "../../shares/ActionButton";
import SharedBanner from "../../shares/SharedBanner";

const Faq = () => {
  return (
    <section className="pt-10 md:pt-20 ">
      <SharedBanner>FAQ</SharedBanner>
      <div className="flex  flex-col px-10  py-20 md:flex-row md:px-20">
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
          <div className="w-[600px] space-y-4 leading-loose">
            <p className="font-jose text-sm font-bold text-blue">
              Magna bibendum est fermentum eros.
            </p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div className="w-[600px] space-y-4 leading-loose">
            <p className="font-jose text-sm font-bold text-blue">
              Odio muskana hak eris conseekin sceleton?
            </p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div className="w-[600px] space-y-4 leading-loose">
            <p className="font-jose text-sm font-bold text-blue">
              Elit id blandit sabara boi velit gua mara?
            </p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col bg-secondary md:flex-col">
          <h3 className="mt-10 px-10 font-jose text-xl font-bold">
            Ask a Question
          </h3>
          <form
            action=""
            className="flex flex-col space-y-6 px-10 py-10 md:h-[538px] md:w-[566px] "
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
