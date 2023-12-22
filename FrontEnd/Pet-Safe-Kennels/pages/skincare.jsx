import Layout from "../components/Layout/Layout";
import skincare from "../components/Services/services-skincare";
import kennels from "../components/Services/services-boxkennels";
import Service from "../components/Services/Service";

export default function Skincare() {
  return (
    <Layout>
      <Service service={kennels} title="Box Kennels" />
    </Layout>
  );
}
