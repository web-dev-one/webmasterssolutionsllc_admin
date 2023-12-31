import Layout from "@/components/Layout/Layout"
import Image from "next/image"
import { CartProvider } from "./Context/context.js";
import { useContext, useState, useEffect } from "react"
import { CartContext } from "./Context/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default function ShoppingCart({id, price}){
    
    const {items, addToCart, removeFromCart} = useContext(CartContext)
    console.log("CartContext",CartContext.addToCart);
    const [exists, setExists] = useState(false);

    useEffect(() => {
      const inCart = items.find((item) => item.id === id);
    
      if (inCart) {
          setExists(true);
      } else {
          setExists(false);
      } 
    }, [items, id]);


    return (<>
            <Layout>
                <div
                 style={{background: "#ede6dd"}}
                 className="flex-col justify-between cart">
                    <div className="w-60 space-x-16 mx-auto">
                    <Image
                        src={"/red-shopping-cart-large.png"}
                        alt="Shopping Cart"
                        width={100}
                        height={100}
                        style={{"margin": "auto"}}
                        />
                        <h1>{items}</h1>
                    </div>
                    <div className="flex-col mx-auto justify-center Cart-Container">
                    {
     exists
     ? <button className="addtocart product mx-auto" onClick={() => removeFromCart(id)}>Remove from Cart</button>
     : <button className="addtocart product mx-auto del" onClick={() => addToCart({id, price})}>Add to Cart</button>
   }
                    </div>
                
              
   </div>
            </Layout>
            </>)
}