import Layout from "@/components/Layout/Layout"
import Image from "next/image"
export default function ShoppingCart(){

    return (<>
            <Layout>
                <div className="flex justify-center cart">
                    <Image
                        src={"/red-shopping-cart-large.png"}
                        alt="Shopping Cart"
                        width={100}
                        height={100}
                    />
                </div>
            </Layout>
            </>)
}