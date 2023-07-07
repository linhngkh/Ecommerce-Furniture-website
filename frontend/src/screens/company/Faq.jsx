import ActionButton from "../../shares/ActionButton";
import SharedBanner from "../../shares/SharedBanner";
import SharedText from "../../shares/SharedText";

const Faq = () => {
  return (
    <section className="pt-10 md:pt-20 ">
      <SharedBanner>FAQ</SharedBanner>
      <div className="flex px-10 pt-10 ">
        <div className="flex-1 pb-3">
          <SharedText>General Information</SharedText>
          <div className="space-y-4">
            <p className="font-jose text-sm font-bold text-blue">
              Eu dictumst cum at sed euismood condimentum?
            </p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <form action="" className="flex flex-col">
            <input type="text" name="name" id="name" placeholder="Your Name*" />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject*"
            />
            <textarea />
            <ActionButton>Send Mail</ActionButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Faq;
