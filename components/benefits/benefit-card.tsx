import FlipCard from "../ui/flip-card";
import { API_BASE_URL } from "@/lib/config";

interface BenefitCardProps {
  titulo: string;
  descripcion: string;
  sede: string;
  dias: string;
  imagen?: string;
}

export default function BenefitCard({ titulo, descripcion, sede, dias, imagen }: BenefitCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-left w-full max-w-[600px] mx-auto">
      {/* 📌 Imagen en móvil será centrada y en desktop al lado izquierdo */}
      <div className="w-full md:w-48 flex justify-center">
        <FlipCard 
          title={titulo} 
          description={`${descripcion}\n${sede}\n${dias}`} 
          imageUrl={imagen ? `${API_BASE_URL}/${imagen}` : "/default-image.jpg"}
          size="small" 
        />
      </div>
      
      {/* 📌 Contenedor del texto con ajuste de tamaño */}
      <div className="flex flex-col gap-2 w-full text-center md:text-left">
        <h3 className="text-xl md:text-3xl font-bold text-[#E67E22] break-words">{titulo}</h3>
        <ul className="space-y-1 text-black text-sm md:text-base">
          <li className="flex items-start justify-center md:justify-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {descripcion}
          </li>
          <li className="flex items-start justify-center md:justify-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {sede}
          </li>
          <li className="flex items-start justify-center md:justify-start">
            <span className="mr-2 text-[#E67E22]">•</span>
            {dias}
          </li>
        </ul>
      </div>
    </div>
  );
}
