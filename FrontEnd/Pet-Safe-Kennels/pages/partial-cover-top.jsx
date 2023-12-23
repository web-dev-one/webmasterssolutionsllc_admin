import Service from "@/components/Services/Service";
import Layout from "../components/Layout/Layout";
import servicesBoxKennels from "@/components/Services/services-boxkennels";

export default function PartialCoverTop(){

    return(<Layout>
            <Service service={servicesBoxKennels} title="Partial Hard Top" />
          </Layout>)
}
