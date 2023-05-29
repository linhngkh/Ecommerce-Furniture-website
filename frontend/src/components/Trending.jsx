import { trendings } from "../../data";

const Trending = () => {
  return (
    <section className="mb-20 mt-20">
      <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
        Trending Products
      </h1>
      <div className="flex flex-row justify-center drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ">
        {trendings.map((trending) => (
          <div
            key={trending.index}
            className=" h-[340px] w-[270px] border-x-8 border-y-8  border-white 
          "
          >
            <div>
              <img src={trending.img} alt="chair" />
            </div>

            <div className=" flex flex-col items-center justify-center bg-white px-5 py-3">
              <p>{trending.name}</p>
              <div className="space-x-3">
                <span className="text-sm font-bold text-blueBold">
                  {trending.discount}
                </span>
                <span className="text-sm text-subtext line-through">
                  {trending.price}
                </span>
              </div>
            </div>
          </div>
        ))}
          </div>
          

          <div></div>
    </section>
  );
};

export default Trending;
