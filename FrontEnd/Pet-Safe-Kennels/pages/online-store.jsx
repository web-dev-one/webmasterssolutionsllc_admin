import Layout from "../components/Layout/Layout";
import readymade from '../components/Services/services-readymade'

import ServiceDirect from "../components/Services/ServiceDirect";

export default function DirectSale() {
  
  return (
    <Layout>
      <ServiceDirect service={readymade} title="Ready-Made" />
    </Layout>
  );
}
