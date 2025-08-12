import React from "react";
import Link from "next/link";

const FiveStarComponent = () => {
  return (
    <section>
      <div className="h-[100px] border-y flex justify-center items-center font-nunito font-semibold lg:text-[40px]  ">
        Supplying a Five Star Service Throughout Australia &nbsp;   
        | <Link href="/quote-section " className="font-normal">&nbsp; REQUEST QUOTE</Link>
      </div>
    </section>
  );
};

export default FiveStarComponent;
