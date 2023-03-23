import React from "react";

const SendForm = () => {
  return (
    <section className="">
      <div className="">
        <form action="" className="flex flex-col space-y-2">
          <label htmlFor="name">Amount</label>
          <input
            className="w-[300px] h-[40px]  md:w-[482px] md:h-[50px] lg:w-[420px] rounded-md indent-3"
            type="text"
            name="name"
            id="name"
            placeholder="D200"
          />
          <label htmlFor="name">Receiver</label>
          <input
            className="w-[300px] md:w-[482px] lg:w-[420px] md:h-[50px]  h-[40px] rounded-md indent-3"
            type="text"
            name="name"
            id="name"
            placeholder="receiver name"
          />
          <button className="w-[300px] h-[40px] rounded-md bg-orange-400 top-4 hover:bg-white hover:cursor-pointer hover:text-blue-900 relative  md:w-[482px] md:h-[50px] lg:w-[420px]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendForm;
