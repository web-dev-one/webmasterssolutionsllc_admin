import Image from "next/image";
import Button from "../Button";

export default function Hairdreams(props) {
  return (
    <div
      style={{ background: "#EDE6DD", maxWidth: "75.25rem" }}
      className="mx-auto mt-6 rounded shadow-lg flex flex-wrap"
    >
      <div className="lg:flex-1 w-full">
        <Image
          width={590}
          height={436}
          layout="responsive"
          loading={"eager"}
          priority={true}
          src={"/happy-dog.jpg"}
          alt="Hairdreams"
        />
      </div>

      <div className="flex-1 px-6 py-10">
        <h2 className="font-bold mb-4 text-xl">Our Dog Kennels</h2>
        <p className="mb-4">
        We are the Premier Predator Proof Kennel Builders in Arizona.
        </p>
        <h2 className="mb-4 font-semibold">
        It's our years of experience that sets us apart from other outdoor pet enclosure companies. Our extensive research and development has produced Exclusive Proprietary Designs to Guarantee your pets safety! We take Pride in our Commitment to The Very Best Quality Dog Kennels, Great Service, and Client Satisfaction. 
        </h2>
        <p>
        Since 2006 we have fabricated thousands of custom built predator proof pet enclosues.
        </p>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pet-safe-kennels.com"
        >
          <Button onClick={()=>console.log(":)")} className="mx-auto mt-6">Learn more</Button>
        </a>
      </div>
    </div>
  );
}
