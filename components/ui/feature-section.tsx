"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  subtitle?: string
  autoPlayInterval?: number
  imageHeight?: string
  visibleItemsCount?: number
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  subtitle,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
  visibleItemsCount = 5,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
  }

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8c55a1] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 relative">
            <div
              className="space-y-6 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100"
              style={{
                maxHeight: `calc(${visibleItemsCount} * 120px)`,
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={cn(
                    "flex items-center gap-4 md:gap-6 p-4 rounded-xl cursor-pointer transition-all duration-300",
                    index === currentFeature
                      ? "bg-gradient-to-r from-purple-50 to-pink-50 shadow-md"
                      : "bg-white hover:bg-gray-50"
                  )}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      index === currentFeature
                        ? "bg-gradient-to-br from-[#8c55a1] to-[#de539d] border-[#8c55a1] text-white scale-110"
                        : "bg-white border-gray-300 text-gray-500",
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-base font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      "text-base md:text-lg font-semibold mb-1 transition-colors duration-300",
                      index === currentFeature ? "text-[#8c55a1]" : "text-gray-700"
                    )}>
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-lg",
                imageHeight
              )}
            >
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        initial={{ y: 100, opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.step}
                          className="w-full h-full object-cover transition-transform transform"
                          width={1000}
                          height={500}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
