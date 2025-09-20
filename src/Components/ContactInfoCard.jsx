import React from "react";
import ButtonGreen from "./ButtonGreen";

const ContactInfoCard = () => {
  return (
    <div className="bg-base-100 w-full shrink-0 shadow-lg flex-1 rounded-lg">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email*</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Business Name*</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message*</span>
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <ButtonGreen btnName={'Send Message'}/>
      </form>
    </div>
  );
};

export default ContactInfoCard;
