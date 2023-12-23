import Layout from "../components/Layout/Layout";
import haircare from "../components/Services/services-haircare";
import kennels from "../components/Services/services-boxkennels";
import dogparks from "../components/Services/services-dogparks";
import Service from "../components/Services/Service";

export default function DogPark() {
  return (
    <Layout>
      <Service service={dogparks} title="Dog Parks" />
    </Layout>
  );
}
