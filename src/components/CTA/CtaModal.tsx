import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Spinner from "../Spinner";
import { Toast } from "../Toast";

const schema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(100),
  email: z.string().email("E-mail inválido"),
  tipoProjeto: z.string().min(1, "Selecione um tipo de projeto"),
  descricao: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(2000),
});

type FormData = z.infer<typeof schema>;

export function CtaModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  const handleKeyDown = useCallback((e: any) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  const [isLoading, setIsLoading] = useState(false);
  const [ToastData, setToastData] = useState<{
    message: string;
    type: "success" | "error";
    isOpen: boolean;
    onClose: () => void;
    duration: number;
    title?: string;
  }>({
    title: "",
    message: "",
    type: "success",
    duration: 3000,
    isOpen: false,
    onClose: () => setToastData({ ...ToastData, isOpen: false }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const showToast = (type: "success" | "error") => {
    type == "success"
      ? setToastData({
          ...ToastData,
          isOpen: true,
          message: "Orçamento enviado com sucesso!",
          type: "success",
          title: "Tudo certo!",
        })
      : setToastData({
          ...ToastData,
          title: "Algo deu errado",
          isOpen: true,
          message: " tente novamente!",
          type: "error",
        });
  };

  // Envio do formulário
  const onSubmit = async (data: FormData, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    setIsLoading(true);

    try {
      await fetch(import.meta.env.VITE_API_BASEURL + "/budgets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => data);
      showToast("success");

      setIsLoading(false);
      reset();
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setIsLoading(false);
      showToast("error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-gray-900 w-full max-w-lg p-8 rounded-xl shadow-xl relative"
      >
        <h3 className="text-2xl font-bold mb-6">Solicitar orçamento</h3>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Nome</label>
            <input
              type="text"
              {...register("nome")}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
              placeholder="Seu nome completo"
              autoFocus
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Tipo de projeto</label>
            <select
              {...register("tipoProjeto")}
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
            >
              <option value="">Selecione...</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Website completo">Website completo</option>
              <option value="Aplicação Web">Aplicação Web</option>
              <option value="API Backend">API Backend</option>
              <option value="Dashboard / Painel">Dashboard / Painel</option>
              <option value="SaaS completo">SaaS completo</option>
            </select>
            {errors.tipoProjeto && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tipoProjeto.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Descrição</label>
            <textarea
              {...register("descricao")}
              className="w-full p-3 h-32 rounded-md bg-gray-100 dark:bg-gray-800 outline-none resize-none"
              placeholder="Descreva o que você precisa..."
            />
            {errors.descricao && (
              <p className="text-red-500 text-sm mt-1">
                {errors.descricao.message}
              </p>
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="disabled:from-blue-800 disabled:to-indigo-900 w-full py-3 bg-linear-to-bl from-blue-500 to-indigo-600 text-white rounded-md font-medium hover:from-indigo-600 hover:to-blue-500 hover:bg-linear-to-tl transition cursor-pointer"
          >
            {!isLoading ? "Enviar pedido" : <Spinner />}
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          ✕
        </button>
      </motion.div>
      <Toast
        isOpen={ToastData.isOpen}
        message={ToastData.message}
        onClose={() => ToastData.onClose()}
        type={ToastData.type}
        duration={ToastData.duration}
        title={ToastData.title}
      />
    </div>
  );
}
