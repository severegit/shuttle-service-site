import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function ShuttleServicePage() {
  const shuttleSchedule = [
    { time: "5:30 AM", from: "Ave Maria", to: "Sunrise Park & Ride" },
    { time: "7:10 AM", from: "Sunrise Park & Ride", to: "Ave Maria" },
    { time: "8:50 AM", from: "Ave Maria", to: "Sunrise Park & Ride" },
    { time: "10:30 AM", from: "Sunrise Park & Ride", to: "Ave Maria" },
    { time: "12:10 PM", from: "Ave Maria", to: "Sunrise Park & Ride" },
    { time: "1:50 PM", from: "Sunrise Park & Ride", to: "Ave Maria" },
    { time: "3:30 PM", from: "Ave Maria", to: "Sunrise Park & Ride" },
    { time: "5:10 PM", from: "Sunrise Park & Ride", to: "Ave Maria" },
    { time: "6:50 PM", from: "Ave Maria", to: "Sunrise Park & Ride" },
    { time: "7:30 PM", from: "Sunrise Park & Ride", to: "Ave Maria" }
  ];

  const router = useRouter();

  const handlePayment = (url) => {
    setTimeout(() => {
      router.push("/thank-you");
    }, 1000);
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="text-center mb-12 p-8 bg-blue-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          Ave Maria to Sunrise Shuttle Service
        </motion.h1>
        <p className="text-lg">
          Your direct connection from Ave Maria to the Sunrise Park & Ride, linking you to Miami via 95 Express and Tri-Rail.
        </p>
      </header>

      <main className="grid gap-10 p-8">
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Service</h2>
          <p className="text-gray-600 mb-4">
            We offer a reliable and comfortable shuttle between Ave Maria, FL and the Sunrise Park & Ride.
          </p>
          <p className="text-gray-600">
            Departures from Ave Maria are timed to align with major 95 Express departures.
          </p>
        </div>

        <div className="bg-gray-100 shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Future Schedule</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            {shuttleSchedule.map((item, index) => (
              <li key={index}>
                {item.time} - Depart {item.from} ➔ Arrive {item.to}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 shadow-lg p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pay for Your Pass</h2>
          <div className="flex flex-col gap-4 mt-4">
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              onClick={() =>
                handlePayment("https://buy.stripe.com/fZubJ10b96JK4OH9zA6oo05")
              }
            >
              Reserve Your Seat ($5 refundable)
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-lg" id="faq">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>
              <strong>Where do we meet?</strong> Town center parking area in Ave
              Maria.
            </li>
            <li>
              <strong>Same-day reservations?</strong> Yes, but space is limited.
            </li>
            <li>
              <strong>Wi-Fi on board?</strong> Yes, free Wi-Fi available.
            </li>
          </ul>
        </div>
      </main>

      <footer className="text-center text-gray-500 mt-16 p-4">
        © {new Date().getFullYear()} Ave Maria Shuttle Service. All rights
        reserved.{" "}
        <a
          href="/privacy-policy"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
