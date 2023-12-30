export default function ShippingInfo() {
    return (
      <div
        className="w-1/4 ml-auto slide-query"
        style={{ background: "#F1E9E8" }}
      >
        <div className="max-w-90 mx-auto">
          <h2 className="text-center font-bold text-black mt-10 mb-8">
            Shipping info
          </h2>
    
          <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
            <picture className="w-10 h-10 mx-auto inline">
              <source type="image/png" srcSet="ShippingIcon.png" />
              <img src="/ShippingIcon.png" alt="Welding Kennel" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                Due to demand it can be 2 weeks until your kennel is shipped.
              </p>
            </div>
          </div>
          
          <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
            <picture className="w-10 h-10 mx-auto inline">
              <source type="image/png" srcSet="caution.png" />
              <img src="caution.png" alt="caution" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                A Kennel can weigh 150-200lbs.
              </p>
            </div>
          </div>
          {/* warning */}
          <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
            <picture className="w-10 mx-auto inline my-auto">
              <source type="image/webp" srcSet="caution.png" />
              <source type="image/png" srcSet="caution.png" />
              <img src="info.png" alt="info" />
            </picture>
            {/* Cancellations */}
            <div className="col-span-4">
              <p className="inline">
                All sales are final.
              </p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
            <picture className="w-10 h-8 mx-auto inline my-auto">
              <source type="image/webp" srcSet="callus.webp" />
              <source type="image/png" srcSet="callus.png" />
              <img src="callus.png" alt="Contact" />
            </picture>
            {/* Contact */}
            <div className="col-span-4">
              <p className="inline">
                Please call us if you have questions 520-730-7020.
              </p>
            </div>
          </div>
         
          {/* Payment */}
          <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
            <picture className="w-10 h-10 mx-auto inline">
              <source type="image/png" srcSet="change.png" />
              <img src="change.png" alt="pets" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                You may update your order one week after is has been placed.
                If your kennel has been built you cannot cancel you order.
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
  