import React from "react";

const Pages = () => {
  return (
    <section className=" md:pt-20">
      <div className="mx-auto flex h-[200px] w-full items-center bg-primary px-20">
        <h1 className="font-jose text-2xl font-extrabold">Shop Grid Default</h1>
      </div>
      <div className="flex h-full w-full bg-white px-20">
        <div className="mt-20">
          <div className="flex justify-around gap-10">
            <div className="flex">
              <h1>Ecommerce Acceories & Fashion item</h1>
            </div>
            <div className="flex items-end justify-end gap-10">
              <div>
                Per Page:
                <input className="w-20 border-2" />
              </div>
              <div>
                Sort By: <select className="w-20 border-2"></select>
              </div>
              <div>View</div>
            </div>
            {/* product grid */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
