export default function HandyInfo() {
  return (
    <div
      className="w-1/4 ml-auto slide-query"
      style={{ background: "#F1E9E8" }}
    >
      <div className="max-w-90 mx-auto">
        <h2 className="text-center font-bold text-black mt-10 mb-8">
          Handy info
        </h2>
       
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/png" srcSet="/welding-kennel.png" />
            <img src="/welding-kennel.png" alt="Welding Kennel" />
          </picture>
          <div className="col-span-4">
            <p className="inline">
              Welding at the jobsite is common.
            </p>
          </div>
        </div>
        
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/png" srcSet="/construction.png" />
            <img src="construction.png" alt="construction" />
          </picture>
          <div className="col-span-4">
            <p className="inline">
              Installation includes a construction crew.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 h-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="/callus.webp" />
            <source type="image/png" srcSet="/callus.png" />
            <img src="callus.png" alt="Contact" />
          </picture>
        
          <div className="col-span-4">
            <p className="inline">
              To schedule, change or cancel your appointmet please call us at
              520-730-7020.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="/info.webp" />
            <source type="image/png" srcSet="/info.png" />
            <img src="info.png" alt="info" />
          </picture>
         
          <div className="col-span-4">
            <p className="inline">
              Cancellations less than 24 hours in advance may result in a fee.
            </p>
          </div>
        </div>
     
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/png" srcSet="/pets.png" />
            <img src="pets.png" alt="pets" />
          </picture>
          <div className="col-span-4">
            <p className="inline">
              Secure your pets prior to our arrival at your home.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        p {
          font-size: 15px;
          color: black;
        }
        .slide-query {
          height: 600px;
        }
        @media (max-width: 1521px) {
          .slide-query {
            margin-right: auto;
            width: auto;
            height: auto;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
