import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="border-t border-gray-500 dark:border-gray-600 mt-8 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Image Boost AI. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Powered by Advanced AI Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
