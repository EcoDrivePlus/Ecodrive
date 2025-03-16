"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export function Services() {
  return (
    <section className="py-20 bg-[#FDF2E9] font-nunito">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-black text-center mb-16"
        >
          SERVICIOS <br/>OFRECIDOS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto pb-8">
          {/* Servicio 1 */}
          <div className="relative group">
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotate: [-2, 2, -2, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/2-removebg-preview.png"
                alt="Taxi Service"
                width={400}
                height={400}
                className="w-full transition-transform duration-300"
              />
              {/* Efecto de onda */}
              <motion.div 
                className="absolute inset-0 bg-yellow-300/30"
                initial={{ scale: 0 }}
                animate={{ scale: 0 }}
                whileHover={{
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "circOut"
                  }
                }}
              />
            </motion.div>
            <h3 className="text-3xl font-black text-center mt-4 py-2 rounded-md">
              Taxi
            </h3>
          </div>

          {/* Servicio 2 */}
          <div className="relative group">
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotate: [2, -2, 2, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/3-removebg-preview.png"
                alt="Delivery Service"
                width={400}
                height={400}
                className="w-full transition-transform duration-300"
              />
              {/* Efecto de onda */}
              <motion.div 
                className="absolute inset-0 bg-yellow-300/30"
                initial={{ scale: 0 }}
                animate={{ scale: 0 }}
                whileHover={{
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "circOut"
                  }
                }}
              />
            </motion.div>
            <h3 className="text-3xl font-black text-center mt-4 py-2 rounded-md">
              Delivery <span className="inline-block text-base mt-1 px-3 py-1 bg-yellow-200 rounded-full whitespace-nowrap">PRÓXIMAMENTE</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}