"use client";

import { motion } from "framer-motion";
import BenefitCard from "./benefit-card";
import LoadingMessage from "../ui/loading-message";

interface Benefit {
  id: number;
  titulo: string;
  descripcion: string;
  sede: string;
  dias: string;
  imagen?: string;
}

interface BenefitsGridProps {
  benefits: Benefit[] | null;
  isLoading: boolean;
  error?: string;
}

export default function BenefitsGrid({ benefits, isLoading, error }: BenefitsGridProps) {
  if (isLoading) return <LoadingMessage />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const validBenefits = Array.isArray(benefits) ? benefits : [];
  if (validBenefits.length === 0) {
    return <p className="text-center text-gray-500">No hay beneficios disponibles.</p>;
  }

  return (
    <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFF5E9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-black text-[#E67E22] tracking-wide">
          ¡BENEFICIOS PARA TODOS!
        </h2>
      </motion.div>

      {/* 📌 Grid mejorado para centrar y evitar cortes en móviles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-center">
        {validBenefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-xl mx-auto flex justify-center"
          >
            <BenefitCard
              titulo={benefit.titulo}
              descripcion={benefit.descripcion}
              sede={benefit.sede}
              dias={benefit.dias}
              imagen={benefit.imagen || "/default-image.jpg"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
