import React from "react";
import { FaServer } from "react-icons/fa"; // Icon for the backend card
import GradientText from "../Ui_components/GradiantText";

const Service = () => {
  return (
    <div className="py-16 bg-black lg:h-screen" id="services_section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-gray-400 text-4xl font-bold text-center lg:text-5xl mb-12">
        <GradientText
      colors={["#9CA3AF", "#6B7280", "#4B5563"]} // Light gray gradient shades
      animationSpeed={3}
      showBorder={false}
        className="custom-class"
>
      Services
          </GradientText>
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Backend Development Card */}
          <div
            className="bg-primary-100 shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-105"
            data-aos="slide-right"
          >
            <div className="flex items-center justify-center mb-6">
              <FaServer className="text-5xl text-secondary-100" />
            </div>
            <h3 className="text-2xl font-bold text-third-100 text-center mb-4">
              Backend Development
            </h3>
            <p className="text-secondary-100 text-center mb-6">
              Offering robust and scalable backend development services using Java Spring Boot, MySQL, and RESTful APIs for seamless data management and high-performance systems.
            </p>
            <div className="text-center">
              <a
                className="bg-secondary-100 text-black font-semibold py-2 px-6 rounded-lg hover:bg-white transition-colors"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
