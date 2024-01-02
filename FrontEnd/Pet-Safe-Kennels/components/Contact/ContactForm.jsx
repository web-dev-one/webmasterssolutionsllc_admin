import React, {useRef} from "react";
import SectionTitle from "../SectionTitle";
import emailjs from "emailjs-com";
import ContactFormResponse from "./ContactFormResponse";
import { useForm } from "../Hooks/useForm";
import Button from "../Button";

export default function ContactForm() {
  const form = useRef();
  const [showResponse, setShowResponse] = React.useState({
    display: false,
    code: null,
  });
  const { values, handleChange, reset } = useForm({
    to_name: "",
    reply_to: "",
    phone: "",
    message: "",
    from_name: "Pet-Safe-Kennels",
  });
  function sendEmail(event) {
    event.preventDefault()
    let e = event;
   
   emailjs
      .sendForm(
        // "default_service",
        process.env.NEXT_PUBLIC_userid,
        process.env.NEXT_PUBLIC_templateid,
        e.target,
        // form,
        process.env.NEXT_PUBLIC_publickey,
      )
      .then(
        (result) => {
          console.log("res", result.text);
          handleSubmit(200);
        },
        (error) => {
          // console.log(error.text);
          handleSubmit(404);
        }
      );
  }
  const handleSubmit = (code) => {
    debugger
   console.log("code",code)
    setShowResponse(() => ({ display: true, code: code }));
    reset();
  };
  const responseCode = showResponse.code;
  return (
    <div className="container mx-auto max-w-sm">
      <SectionTitle title={"Get in touch"} />

      <div className="mx-auto lg:w-1/2 sm:w-3/4 w-11/12">
        <p className="italic text-gray-500 text-sm mb-4">
          Please do not change or cancel appointments over email. To modify your
          appointment call salon directly at 520-730-7020
        </p>
        <form
          id="FORM"
          ref={form}
          action="sumbit"
          className="mx-auto inline-block text-left w-full flex flex-col gap-4 pb-24"
          autoComplete="on"
          onSubmit={sendEmail}
        >
          <div className="w-full">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-1 px-4"
              type="text"
              id="to_name"
              name="to_name"
              placeholder="Joe Doe"
              required
              value={values.to_name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full py-1 px-4"
              type="text"
              id="reply_to"
              name="reply_to"
              placeholder="example@smth.com"
              required
              value={values.reply_to}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="phone">
              Phone number
            </label>

            <input
              className="w-full py-1 px-4"
              type="text"
              id="phone"
              placeholder="***-***-****"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full py-1 px-4"
              type="text"
              id="message"
              name="message"
              required
              rows="8"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <Button
            onClick={(e)=>sendEmail(e)}
            type="submit" className="px-24 mx-auto"
            >
            Send
          </Button>
        </form>
      </div>
      <ContactFormResponse
        setShowResponse={setShowResponse}
        responseCode={responseCode}
        showResponse={showResponse.display}
      />
      <style jsx>{`
        input,
        textarea {
          background: rgba(229, 229, 229, 0.5);
          vertical-align: middle;
          display: inline-block;
        }
        label:after {
          content: "*";
          color: red;
          font-size: 0.8rem;
          vertical-align: top;
        }
      `}</style>
    </div>
  );
}

// emailjs id service_0g854z1

// emailjs.sendForm("default_service",NEXT_PUBLIC_templateid,{to_name: "yO",reply_to: "randyisbusy@gmail.com",phone: "6029997756",message: "yo",from_name: "Pet-Safe-Kennels"},NEXT_PUBLIC_userid).then((result)=>{console.log("res", result.text);console.log(200);})

        