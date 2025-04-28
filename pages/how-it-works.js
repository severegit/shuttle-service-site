import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="text-center p-10 bg-blue-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold"
        >
          How to Use Your Shuttle Ticket
        </motion.h1>
        <p className="mt-4 text-lg">Your simple step-by-step guide</p>
      </header>

      <main className="p-8 max-w-3xl mx-auto">
        <ol className="list-decimal list-inside text-gray-700 space-y-6">
          <li>
            <strong>Reserve Your Ticket:</strong> Choose the correct shuttle departure time and purchase your ticket securely online.
          </li>
          <li>
            <strong>Check Your Email:</strong> After payment, you will receive a confirmation email. Save it for boarding.
          </li>
          <li>
            <strong>Arrive Early:</strong> Please arrive at Ave Maria Town Center at least 10 minutes before your scheduled departure.
          </li>
          <li>
            <strong>Show Your Confirmation:</strong> Present your confirmation email (or printed version) to the shuttle driver.
          </li>
          <li>
            <strong>Board and Ride:</strong> Find your seat and enjoy a comfortable trip to Sunrise Park & Ride!
          </li>
        </ol>

        <div className="text-center mt-12">
          <Link href="/">
            <a className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300">Return to Home</a>
          </Link>
        </div>
      </main>

      <footer className="text-center text-gray-500 mt-16 p-4">
        © {new Date().getFullYear()} Ave Maria Shuttle Service. All rights reserved.
      </footer>
    </div>
  );
}
