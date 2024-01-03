import Buttons from "../Buttons";
import Refferal from "./Refferal";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Backdrop from "../Backdrop";
import React from "react";
import Link from "next/link";
export default function ServicesMap(props) {
 
  const list = props.list;
  // state of popup and id of item clicked to show relevant popup info
  const [showInfo, setShowInfo] = React.useState({
    display: false,
    id: "",
  });
  const node = React.useRef();

 function Description(props){
    

    let {des} = props.list.filter(e=>e.des)[0]

      return(<div className="flex justify-center">
                <br/>
                <p className="text-red-400 font-bold">{des}</p>
              </div>)
 }
  // Info popup container
  function InfoNote(props) {
    let infoText = null;
    let infoPic = null;
    list.filter((item) => {
      // matching id of clicked service with corresponding object id
      if (item.id === showInfo.id) {
        infoText = item.info;
        if (item.img){
          infoPic = <img src={item.img} alt="options" />
        }
      } 
     
    });
    return (
      <div
        onClick={() => handleClick()}
        className={`${
          showInfo.display ? "block" : "hidden"
        } absolute bg-white  z-20 h-auto flex items-start ${
          props.showMobile ? "flex-col max-w-90 p-9" : "flex-row max-w-1/2 p-10"
        }`}
        style={{
          top: props.showMobile ? "40%" : "20%",
          right: props.showMobile ? "4%" : "1%",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <img
          src="info.png"
          style={{ width: "36px", height: "36px" }}
          className={`${props.showMobile ? "mx-auto mb-3" : "mr-6 mb-auto"}  `}
        />
        <p className="text-black lg:text-left text-center">{infoText}</p>
        {infoPic}
      </div>
    );
  }

  // click handler for info popup
  const handleClick = (id) => {
    setShowInfo(() => ({ id: id, display: !showInfo.display }));
  };

  // mapping service box with data
  const mapServices = list.map((item, index) => {
    // checking if service has additional info data
    let check = `info` in item;

    return (<>
      <div
        ref={node}
        key={index}
        className={`flex-col max-w-90 mx-auto grid ${
          props.showBoxOptions ? "grid-flow-row" : "grid-flow-col grid-cols-6"
        } mb-4`}
      >
        <p
          // if item has additional info it opens popup on click
          onClick={() => (check ? handleClick(item.id) : null)}
          style={{
            fontSize: "16px",
            textAlign: "left",
            color: check ? "#895B4A" : "normal",
          }}
          className={`text-black ${
            props.showBoxOptions ? "" : "col-start-1 col-end-5"
          } mr-auto ${check ? "cursor-pointer hover:opacity-75" : ""}`}
        >
          {item.service}
          &nbsp;&nbsp;<Link className="flex-col justify-center font-bold text-red-500" href={`${item.link}`}><h3>{item.linktext}</h3></Link>
        </p>
        <p
          style={{ fontSize: "16px" }}
          className={`${"mr-auto"}`}
        >
          {item.price}
        </p>
      </div>
        </>
    );
  });
  // shows additional logo for skin care services
  // const skinCareLogo = (
  //   <div
  //     className={`${props.showMobile ? "flex" : ""} ${
  //       props.showSkinCare ? "block" : "hidden"
  //     } max-w-90 mx-auto text-left justify-evenly`}
  //   >
  //     <p className="mb-3 mt-auto">We Use The Rezâge Skin Care Line</p>
  //     <picture>
  //       <source type="image/webp" srcSet="rezage-logo.webp" />
  //       <source type="image/png" srcSet="rezage-logo.png" />
  //       <img
  //         src="rezage-logo.png"
  //         style={{ width: "60px", height: "60px" }}
  //         alt="We Use The Rezâge Skin Care Line"
  //       />
  //     </picture>
  //   </div>
  // );
  // handle width of image
  const width = () => {
    if (props.showSkinCare == true) {
      return props.showMobile ? 190 : 670;
    } else if (props.showMobile == true) {
      return 238;
    } else {
      return 550;
    }
  };
  return (
    <div
      className={`flex ${props.showMobile ? "flex-col" : ""}`}
      style={{
        background: "#EDE6DD",
        height: props.showMobile ? "auto" : "600px",
      }}
    >
      {/* image */}
      <div className="flex">
        <ExportedImage
          src={`${list[0].image}`}
          width={width()}
          height={props.showMobile ? 320 : 1250}
          alt="Service image"
          quality={50}
          loading={"eager"}
          priority={true}
        />
        {/* rendering navigation for services */}
        <div
          className={`${props.renderNav} ${
            props.showMobile ? "inline-block" : "hidden"
          }  mt-6 w-40 mx-3`}
        >
          {props.mapNav}
        </div>
      </div>

      {/* description */}
      <div className={`w-full ${props.showMobile ? "my-8" : "my-auto"}`}>
        {mapServices}
        <InfoNote showMobile={props.showMobile} />
      { !!props.list.filter(x=>x.des).length &&
        <Description {...props} /> 
      }
      
        
        {props.showMobile ? (
          <Buttons mobile={props.showMobile} />
        ) : (
          <Refferal />
        )}
      </div>
      <style jsx>{`
        .bottom {
          position: absolute;
          bottom: 20px;
          left: 13%;
        }
      `}</style>
      <Backdrop
        toggle={showInfo.display}
        onClick={() =>
          setShowInfo(() => ({ ...showInfo, display: !showInfo.display }))
        }
        blur={false}
      />
    </div>
  );
}
