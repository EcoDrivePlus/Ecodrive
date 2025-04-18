"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Future() {
  return (
    <section className="py-20 bg-[#FDF2E9]">
      <div className="container mx-auto px-4 font-nunito">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16"
        >
          CONTIGO CREAREMOS EL FUTURO
        </motion.h2>

        <div className="bg-white rounded-[50px] shadow-lg p-10 md:p-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image
                src="/Familia.png"
                alt="Family"
                width={500}
                height={400}
                className="rounded-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-[#E67E22]">UN FUTURO MEJOR PARA TU FAMILIA</h3>
              <p className="text-lg font-bold">
                Creamos ECODRIVE+ para reconocer tu esfuerzo y recompensarte cada día.{" "}
                <span className="text-[#E67E22] font-bold">Con beneficios exclusivos, premios y sorpresas reales,</span> queremos que sientas que nunca estás solo.
              </p>
              <p className="text-lg font-bold">
                Juntos, estamos construyendo un cambio positivo: ayudamos a miles de familias peruanas y hacemos de nuestras ciudades un lugar más limpio, justo y feliz para todos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

