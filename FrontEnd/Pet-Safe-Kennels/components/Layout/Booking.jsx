import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Backdrop from "../Backdrop";
import Schedule from "../Schedule";
import React from "react";
import Link from "next/link";


export default function Booking(props) {
  return (
    <div className="justify-center flex fixed z-50 inset-x-0">
      <div className={`absolute sm:w-max z-50 bg-white container top-0 my-24`}>
        <div className="mx-auto">
          <div className="py-4 px-8 border-b-2 relative flex justify-between items-center">
            <h2 className="text-xl font-bold">Consultation Policy</h2>
            <span
              className="cursor-pointer text-3xl"
              onClick={() => props.setShowBooking(false)}
            >
              &times;
            </span>
          </div>
          <div className="flex gap-4 flex-col py-6 px-8 content">
            <p className="font-bold">Sold by appointment only</p>
            <p>
              Welcome to owing the safest Dog Kennel in America. All buyers must call {" "}
              <a href={`tel:${props.number}`} className="font-bold">
                {props.number}{" "}
              </a>
              in order for us to properly assess your service needs and provide
              the best possible product.
            </p>
            <p className="font-bold">Important to Know</p>
            <p>These are Crafted by Hand. </p>
            <ol className="list-decimal	px-6">
              <li>
              Pet-Safe-Kennels builds custom kennels by hand with wielders. These craftsmen will build the perfect kennel for you, your home, and your pet. The minimum price per Kennel is <span className="font-bold text-red-600">${props.cost}</span>. However that is also the price of a purebred pitbull. These kennels will outlast your car.
              </li>
              <li>
              After our consultation, if our proposal is satisfactory, we only ask for half of the cost as a deposit and the remaining half upon completion. If you have not yet moved into a home you can reserve a dog kennel to be installed anywhere the greater Phoenix area 30 to 60 days in advance.
              </li>
              <li className="text-red-500">
                If you feel your pet's saftey is worth the price and are willing to wait up to a month for installation call us <span className="font-bold">{props.number}</span>. 
              </li>
            </ol>
            <p className="font-bold">Appointment Cancellations</p>
            <p>
              We require 24 hours advance notice to cancel or reschedule any
              consultation. Otherwise, you will be bumped to the back of the list of current appointments.
            </p>
            <p className="font-bold">Methods of Payment</p>
            <p>
              We accept all major credit cards and cash.
            </p>
            <p className="font-bold">Your Pets</p>
            <p>
              Your furry friends are not required to be present while we discuss the kennel to be installed.
            </p>
            <p className="font-bold">Consultation</p>
            <p>
            After an introductory phone call we will physically need to see the area and take measurements. This will typically take 40 minutes.
            </p>
          </div>
          <div className="border-t-2">
               <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "contact" },
                  }}
                >
              <button 
              className="cursor-pointer text-3xl block mx-auto hover:opacity-75 shadow-lg my-3"
              onClick={() => props.setShowBooking(false)}
              >
                Book Apointment{" "}
              </button>
              </Link>
          
          </div>
        </div>
      </div>
      <Backdrop
        toggle={props.showBooking}
        onClick={() => props.setShowBooking(false)}
        blur={true}
      />
      <style jsx>{`
        button {
          background-color: #895b4a;
          border-radius: 1rem;
          padding: 0.8rem 3rem;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }
        .content {
          height: 60vh;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
}
