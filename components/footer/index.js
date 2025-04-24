import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
            </svg>
            <span className="font-bold text-lg">Shop Bag</span>
          </div>
          <p className="text-sm text-gray-300">
            We are the best furniture platform. We are already working on
            thousands of future home projects. Trust us, you will surely be satisfied.
          </p>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Job board</li>
            <li>Career Advice</li>
            <li>Pricing</li>
            <li>Assessments</li>
            <li>Powered</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Career</li>
            <li>Internship</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-semibold mb-3">Help & Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Job Search</li>
            <li>Hello</li>
            <li>Hiring</li>
            <li>Talent Guide</li>
            <li>Online Test</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Hello@shopbag.com</li>
            <li>081437650889</li>
            <li className="flex space-x-4 mt-2">
              <span>🌐</span>
              <span>📘</span>
              <span>🐦</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <span>2023 © Shopbag - All rights reserved</span>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <span>Term of Service</span>
          <span>Privacy Policy</span>
          <span>Partners & Affiliates</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
