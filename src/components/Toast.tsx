import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type?: ToastType;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
  title?: string;
}

export function Toast({
  message,
  type = "success",
  isOpen,
  onClose,
  duration = 3000,
  title,
}: ToastProps) {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  const colors =
    type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
          className={`fixed bottom-6 right-6 px-4 py-3 rounded-xl shadow-lg ${colors}`}
        >
          <div className="flex gap-8 items-center">
            <img
              className="w-8 h-8 "
              src={type == "success" ? "icon-success.png" : "icon-error.png"}
              alt=""
            />
            <div>
              <h3 className="text-lg">{title}</h3>
              <p>{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
