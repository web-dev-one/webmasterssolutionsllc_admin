import Service from "@/components/Services/Service";
import Layout from "../components/Layout/Layout";
import servicesHardtops from "@/components/Services/services-partialhardtop";

export default function PartialCoverTop(){

    return(<Layout>
            <Service service={servicesHardtops} title="Partial Hard Top" />
          </Layout>)
}
