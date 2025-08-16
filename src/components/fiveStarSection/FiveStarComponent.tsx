import React from "react";
import Link from "next/link";
import Image from "next/image";

const FiveStarComponent = () => {
  return (
    <section>
      <div className="h-[100px] gap-4 text-[#033286]  border-y-2 flex justify-center items-center font-poppins font-medium bg-gradient-to-l from-transparent  to-[#afecdc] px-4 text-[14px] md:text-[20px] lg:text-[24px] xl:text-[30px]  ">
        <Image src="/images/review.svg" alt="review" width={40} height={40} />
        <div>
          Supplying a Five Star Service Throughout Australia &nbsp; | &nbsp;
          <Link href="/quote-section " className="font-normal underline">
            {" "}
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FiveStarComponent;
