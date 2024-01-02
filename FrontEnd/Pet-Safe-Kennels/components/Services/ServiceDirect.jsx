import React from "react";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import ServicesMap from "./ServicesMap";
import SectionTitle from "../SectionTitle";
import Service from "./Service";
import servicesoptions from './services-options'

export default function ServiceDirect(props){

    const [isMobile, setIsMobile] = React.useState(false);

    const width = () => {
      if (props.showMobile == true) {
        return 238;
      } else {
        return 550;
      }
    };
   
    return(<>
          <div 
            style={{background: "#ede6dd"}}
            className="grid items-center place-content-center pt-40 mx-auto sm:max-w-90">
            <SectionTitle title={props.title} showLink={true} isMobile={isMobile}/>
            <h1 className="flex place-content-center w-90 font-bold text-xl text-blue-600">Pet-Safe-Kennels Box Kennel</h1>
                      <ExportedImage
                    src={`${props.service[0].image}`}
                    width={width()}
                    height={props.showMobile ? 320 : 1250}
                    alt="Service image"
                    quality={50}
                    loading={"eager"}
                    priority={true}
                  />
       
        </div>
        <div className="flex-col max-w-90 mx-auto grid-flow-col grid-cols-6 mr-6 mt-5 mb-0">
       
          <p className="text-xl font-bold text-blue-500">Pet-Safe-Kennels introduces a versatile one-size-fits-all dog kennel designed to provide a secure and comfortable space for your furry companions.</p>
          <p className="text-xl font-bold text-blue-500">We offer Three online options that does not require a customization and installation.</p>

<Service service={servicesoptions} title="Options" />
<h2>Key Features:</h2>

<ul>
    <li><strong>Two Sizes:</strong> The Pet-Safe-Kennels pre-fab kennel is available in two sizes to accommodate a wide range of dog breeds, ensuring a comfortable space for both small and large dogs.</li>
    <li><strong>Roof Options:</strong> Choose between a wire top for enhanced visibility and airflow or a solid roof with a c-panel for shelter and protection from the elements. The c-panel option ensures your pet stays dry during rain or comfortable in shade.</li>
    <li><strong>Color Variety:</strong> Personalize your pet's space with our selection of 12 colors, allowing you to match the kennel with your home or outdoor environment. The color options include neutral tones and vibrant hues to suit various tastes.</li>
    <li><strong>Durable Construction:</strong> Crafted from high-quality materials, Pet-Safe-Kennels pre-fab kennels are built to withstand the elements and the playful antics of your pets. The durable construction ensures longevity and provides a secure enclosure for your dogs.</li>
    <li><strong>Easy Assembly:</strong> The kennel is designed for easy and quick assembly, making it convenient for pet owners. Clear instructions and a straightforward assembly process allow you to set up your pet's space without hassle.</li>
    <li><strong>Modular Design:</strong> The modular design of the kennel allows for flexibility in configuration, making it easy to adapt to different spaces and layouts. You can customize the kennel to fit your specific needs.</li>
    <li><strong>Safety Features:</strong> Pet-Safe-Kennels prioritizes the safety of your pets. The kennel includes features such as secure latches and smooth edges to prevent any harm to your furry friends.</li>
    <li><strong>Easy Maintenance:</strong> Keeping your pet's space clean is effortless with the easy-to-maintain design of the kennel. Removable panels and a durable finish simplify cleaning and upkeep.</li>
</ul>

<h2>Specifications:</h2>

<ul>
    <li><strong>Sizes:</strong>
        <ul>
            <li>Small: [Dimensions]</li>
            <li>Large: [Dimensions]</li>
        </ul>
    </li>
    <li><strong>Roof Options:</strong>
        <ul>
            <li>Wire Top</li>
            <li>Solid Roof with C-Panel</li>
        </ul>
    </li>
    <li><strong>Color Options:</strong>
        <ul>
            <li>[List of 12 Colors]</li>
        </ul>
    </li>
    <li><strong>Materials:</strong>
        <ul>
            <li>[Specify materials used for durability and weather resistance]</li>
        </ul>
    </li>
    <li><strong>Assembly Time:</strong>
        <ul>
            <li>Estimated [Time] for assembly</li>
        </ul>
    </li>
    <li><strong>Safety Features:</strong>
        <ul>
            <li>Secure latches</li>
            <li>Smooth edges</li>
        </ul>
    </li>
    <li><strong>Modular Components:</strong>
        <ul>
            <li>[List of modular components]</li>
        </ul>
    </li>
    <li><strong>Maintenance:</strong>
        <ul>
            <li>Easy to clean and maintain</li>
        </ul>
    </li>
</ul>

<h2>Conclusion:</h2>

<p>Pet-Safe-Kennels pre-fab one-size-fits-all dog kennel offers a blend of versatility, durability, and customization, providing your pets with a secure and stylish space. With multiple size options, roof configurations, and a variety of colors, our kennels are designed to meet the diverse needs and preferences of pet owners. Enjoy peace of mind knowing your furry friends have a comfortable and secure retreat in their Pet-Safe-Kennels enclosure.</p>

          
         
          <style jsx>{`
          .min-content {
            width: max-content;
          }
          @media (max-width: 1521px) {
            .slide-query {
              margin-right: auto;
            }
          }
          @media (max-width: 1052px) {
            .buttons {
              margin-right: auto;
              margin-left: auto;
              width: 100%;
            }
          }
        `}</style>
      </div>
      </>
          )
}