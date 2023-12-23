import Layout from "../components/Layout/Layout";
import kennels from "../components/Services/services-boxkennels";
import Service from "../components/Services/Service";

export default function BoxKennel() {
  return (
    <Layout>
      <Service service={kennels} title="Box Kennels" />
    </Layout>
  );
}
