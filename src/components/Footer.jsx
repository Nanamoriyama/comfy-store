import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly bg-orange-100 p-6 items-center">
        <div className="font-bold text-3xl mb-4 md:mb-0 text-center md:text-left">
          Fancy winning $100 to spend at <br />
          Comfy Store?
        </div>
        <div className="w-full md:w-auto">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 text-center md:text-left"
            >
              Subscribe here!
            </label>
            <div className="flex w-full md:w-auto">
              <input
                id="email"
                placeholder="Enter your email address"
                className="flex-grow p-3 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-orange-200 sm:text-sm w-2/3"
              />
              <button className="p-3 bg-orange-300 text-white w-1/6.5">
                <IoIosSend />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly m-4 mx-3 p-4">
        {[
          {
            title: "About us",
            links: [
              { name: "Our company", url: "#our-company" },
              { name: "Sustainability", url: "#sustainability" },
              { name: "Visit showroom", url: "#visit-showroom" },
              { name: "Blog", url: "#blog" },
            ],
          },
          {
            title: "Customer care",
            links: [
              { name: "Return & refunds", url: "#return-refunds" },
              { name: "Track my order", url: "#track-order" },
              { name: "Help & FAQs", url: "#help-faqs" },
              { name: "Contact Us", url: "#contact-us" },
            ],
          },
          {
            title: "Shopping with us",
            links: [
              { name: "Delivery information", url: "#delivery-info" },
              { name: "Payment & Security", url: "#payment-security" },
            ],
          },
          {
            title: "Shop by Product",
            links: [
              { name: "Chairs", url: "#chairs" },
              { name: "Tables", url: "#tables" },
              { name: "Sofas", url: "#sofas" },
              { name: "Lighting", url: "#lighting" },
            ],
          },
        ].map((section, index) => (
          <div key={index} className="p-2 md:w-auto md:my-6">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection(index)}
            >
              <span className="font-bold">{section.title}</span>
              <span className="md:hidden">
                {openSection === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <hr className="block md:hidden my-2" />
            <div
              className={`${
                openSection === index ? "block" : "hidden"
              } md:block`}
            >
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-1">
                    <a
                      href={link.url}
                      className="font-extralight hover:underline cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-xs mt-10">
        <span>
          Copyright &copy; 2023 Comfy-Store
          <br className="nonepc" />
          All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
