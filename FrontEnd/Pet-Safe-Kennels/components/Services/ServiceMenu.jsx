import Service from "./ServiceMenuItem";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="/haircare" passHref>
          
            <Service service={"Hair care"} background={"haircare"} />
          
        </Link>
        <Link href="/skincare" passHref>
          
            <Service service={"Skin care"} background={"skincare"} />
          
        </Link>
        <Link href="/nails" passHref>
        
            <Service service={"Nails"} background={"nails"} />
          
        </Link>
        <Link href="/waxing" passHref>
        
            <Service service={"Waxing"} background={"waxing"} />
          
        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}
