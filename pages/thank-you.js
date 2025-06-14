import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Thank You!
        </motion.h1>
        <p className="text-lg text-gray-700 mb-6">
          We look forward to serving you!
        </p>
        <button className="bg-black text-white px-6 py-2 rounded" onClick={() => window.location.href = "/"}>
          Return to Home
        </button>
      </div>
    </div>
  );
}
