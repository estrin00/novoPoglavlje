import React from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col flex-grow justify-center bg-yellow text-white px-6 sm:px-8 lg:px-16 min-h-screen">
      <div className="max-w-4xl w-full mx-auto bg-blue p-6 sm:p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-yellow">
          Kontaktirajte nas
        </h2>
        <p className="text-lg text-center text-white mb-4">
          Ako imate bilo kakvih pitanja, prijedloga ili problema – slobodno nam se obratite!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0">
          {/* Email Section */}
          <a
            href="mailto:novopoglavljehvar@gmail.com"
            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300 w-full sm:w-auto justify-center"
          >
            <FaEnvelope size={30} />
            <span className="text-lg">novopoglavljehvar@gmail.com</span>
          </a>

          {/* Facebook Section */}
          <a
            href="https://www.facebook.com/novopoglavlje"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300 w-full sm:w-auto justify-center"
          >
            <FaFacebook size={30} />
            <span className="text-lg">Pratite nas na Facebooku</span>
          </a>
        </div>

        <p className="text-center text-yellow font-bold mt-6 text-xl">
          Zajedno gradimo bolje sutra!
        </p>
      </div>
    </div>
  );
};

export default Contact;
