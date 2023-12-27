import Service from "@/components/Services/Service";
import Layout from "../components/Layout/Layout";
import servicescombo from "@/components/Services/services-combo";

export default function ComboKennel(){

    return(<Layout>
            <Service service={servicescombo} title="Combo Kennel" />
          </Layout>)
}