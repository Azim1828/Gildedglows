"use client";

import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-indigo-100 text-gray-800 border-t-4 border-gray-200">
      <div className="container mx-auto py-12">
        <div className="grid gap-8  lg:grid-cols-3">
          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm">
              <p>Phone: +86 16538038632</p>
              <p className="font-medium">
                SuChengQuZhongYangZhenFanPengCunHuWeiZu29Hao,
                JiangSuShengSuQianShi, 223800, China
              </p>
              <p>baisdejacqui233784@outlook.com</p>
            </div>
          </div>
          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">
              Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-indigo-500">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-indigo-500">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-indigo-500">
                  FAQs Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Departments */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">
              Shop Departments
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/computers" className="hover:text-indigo-500">
                  Computers & Accessories
                </Link>
              </li>
              <li>
                <Link href="/smartphones" className="hover:text-indigo-500">
                  Smartphones & Tablets
                </Link>
              </li>
              <li>
                <Link href="/tv-video" className="hover:text-indigo-500">
                  TV, Video & Audio
                </Link>
              </li>
              <li>
                <Link href="/cameras" className="hover:text-indigo-500">
                  Cameras, Photo & Video
                </Link>
              </li>
              <li>
                <Link href="/headphones" className="hover:text-indigo-500">
                  Headphones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-indigo-100">
        <div className="container mx-auto flex flex-col items-center justify-between py-6 md:flex-row">
          <div className="mb-4 flex items-center space-x-4 md:mb-0">
            <span className="text-sm text-gray-600">We Accept:</span>
            <div className="flex space-x-2">
              {[
                "Visa",
                "Mastercard",
                "American Express",
                "PayPal",
                "Diners Club",
              ].map((card) => (
                <div
                  key={card}
                  className="h-8 rounded bg-white px-4 flex justify-center items-center py-2"
                  title={card}
                >
                  <h1 className="text-sm text-gray-400">{card}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Follow Us On:</span>
            <div className="flex space-x-2">
              <Link
                href="#"
                className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-600"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-600"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-600"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-indigo-500 p-3 text-white shadow-lg transition-colors hover:bg-indigo-600"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}
