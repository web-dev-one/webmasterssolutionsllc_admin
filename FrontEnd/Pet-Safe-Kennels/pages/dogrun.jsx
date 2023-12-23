import Layout from "../components/Layout/Layout";
import nails from "../components/Services/services-nails";
import dogruns from '../components/Services/services-dogruns'

import Service from "../components/Services/Service";

export default function DogRun() {
  return (
    <Layout>
      <Service service={dogruns} title="Dog Runs" />
    </Layout>
  );
}
