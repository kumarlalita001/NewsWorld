import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

export default function MaxwellLayout() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 NewsWorld Inc. All rights reserved.
          </p>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
