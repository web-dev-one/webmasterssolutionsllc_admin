import Service from "./ServiceMenuItem";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="/boxkennel" passHref>
          
           <Service service={"Box Kennels"} background={"custom_roof_2"} />
          
        </Link>
        <Link href="/dogpark" passHref>
          
            <Service service={"Dog Parks"} background={"Tucson-DogRun-Large"} />
          
        </Link>
        <Link href="/dogrun" passHref>
        
            <Service service={"Dog Runs"} background={"Large-Wall-Kennel-Glendale-entrance"} />
          
        </Link>
        <Link href="/aviary" passHref>
        
            <Service service={"Aviaries"} background={"aviary"} />
          
        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}
