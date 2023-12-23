import Layout from "../components/Layout/Layout";
import waxing from "../components/Services/services-waxing";
import aviaries from "../components/Services/services-avaries";
import Service from "../components/Services/Service";
export default function Waxing() {
  return (
    <Layout>
      <Service service={aviaries} title="Aviaries" />
    </Layout>
  );
}
