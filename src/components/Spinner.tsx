import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-6 w-6 rounded-full border-4 border-gray-300 border-t-gray-900"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      />
    </div>
  );
}
