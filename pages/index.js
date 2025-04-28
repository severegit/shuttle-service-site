import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function ShuttleServicePage() {
  const [schedule, setSchedule] = useState([
    { time: "5:30 AM", destination: "Sunrise Park & Ride" },
    { time: "6:30 AM", destination: "Sunrise Park & Ride" },
    { time: "6:00 PM", destination: "Ave Maria" },
    { time: "7:00 PM", destination: "Ave Maria" }
  ]);

  const router = useRouter();

  const handlePayment = (url) => {
    setTimeout(() => {
      router.push("/thank-you");
    }, 1000);
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Ave Maria to Sunrise Shuttle Service
        </motion.h1>
        <p className="text-lg text-gray-600">
          Your direct connection from Ave Maria to the Sunrise Park & Ride, linking you to Miami via 95 Express and Tri-Rail.
        </p>
      </header>

      <main className="grid gap-8">
        <div className="shadow-xl p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">About Our Service</h2>
          <p className="text-gray-700 mb-4">
            We offer a reliable and comfortable shuttle between Ave Maria, FL and the Sunrise Park & Ride.
          </p>
          <p className="text-gray-700">
            Departures from Ave Maria are timed to align with major 95 Express departures.
          </p>
        </div>

        <div className="shadow-xl p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">Live Schedule</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
            {schedule.map((item, index) => (
              <li key={index}>{item.time} - {item.destination}</li>
            ))}
          </ul>
        </div>

        <div className="shadow-xl p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">Schedule & Pricing</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
            <li>Monthly Pass: $400</li>
            <li>One-Way Ticket: $25</li>
          </ul>
          <p className="text-gray-700">
            Flexible booking options are available.
          </p>
        </div>

        <div className="shadow-xl p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">Pay for Your Pass</h2>
          <div className="flex flex-col gap-4 mt-4">
            <button className="w-full border py-2 rounded" onClick={() => handlePayment("https://buy.stripe.com/eVacOJ7Ff0HSbbWcMN")}>
              Pay $400 Monthly Pass
            </button>

            <button className="w-full border py-2 rounded" onClick={() => handlePayment("https://buy.stripe.com/cN201X9Nn4Y8eo89AA")}>
              Pay $25 One-Way Ticket
            </button>

            <button className="w-full border py-2 rounded" onClick={() => handlePayment("https://buy.stripe.com/5kA4id1gR2Q05RCaEG")}>
              Pay $1 Test Product
            </button>
          </div>
        </div>

        <div className="shadow-xl p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li><strong>Where do we meet?</strong> Town center parking area in Ave Maria.</li>
            <li><strong>Same-day reservations?</strong> Yes, but space is limited.</li>
            <li><strong>Wi-Fi on board?</strong> Yes, free Wi-Fi available.</li>
          </ul>
        </div>
      </main>

      <footer className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Ave Maria Shuttle Service. All rights reserved.
      </footer>
    </div>
  );
}
