"use client";

import React, { useState, useEffect } from "react";
import { Star, Sun } from "lucide-react";

const DiwaliGreeting = () => {
  const [mounted, setMounted] = useState(false);
  const [showFirework, setShowFirework] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setShowFirework((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Fixed positions for stars
  const starPositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "40%" },
    { left: "30%", top: "15%" },
    { left: "40%", top: "35%" },
    { left: "50%", top: "25%" },
    { left: "60%", top: "45%" },
    { left: "70%", top: "30%" },
    { left: "80%", top: "10%" },
    { left: "90%", top: "40%" },
    { left: "15%", top: "50%" },
    { left: "25%", top: "60%" },
    { left: "35%", top: "70%" },
    { left: "45%", top: "80%" },
    { left: "55%", top: "65%" },
    { left: "65%", top: "75%" },
    { left: "75%", top: "55%" },
    { left: "85%", top: "85%" },
    { left: "95%", top: "95%" },
    { left: "5%", top: "90%" },
    { left: "35%", top: "95%" },
  ];

  if (!mounted) {
    return null; // Prevent hydration issues by not rendering until client-side
  }

  return (
    <div className="min-h-screen bg-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        {starPositions.map((position, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: position.left,
              top: position.top,
            }}
          >
            <Star className="text-yellow-200" size={25} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-yellow-300 mb-8 animate-bounce">
            Happy Diwali!
          </h1>
          <p className="text-xl text-yellow-100 mb-12">
            May the festival of lights bring joy, prosperity, and happiness to
            your life
          </p>

          {/* Diya row */}
          <div className="flex justify-center gap-8 mb-16">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-4 bg-orange-700 rounded-full transform rotate-180" />
                <div className="w-8 h-8 bg-orange-500 rounded-full absolute -top-6 left-4">
                  <div className="w-4 h-8 bg-yellow-300 rounded-full absolute left-2 animate-[flame_0.5s_ease-in-out_infinite]" />
                </div>
              </div>
            ))}
          </div>

          {/* Rangoli */}
          <div className="w-64 h-64 mx-auto mb-12 relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full border-4 border-yellow-300 rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  opacity: 0.7,
                }}
              />
            ))}
            <Sun
              className="absolute inset-1/4 text-yellow-300 animate-spin"
              size={64}
            />
          </div>

          {/* Fireworks */}
          {showFirework && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => {
                const colors = ["#FFD700", "#FF6B6B", "#4ECDC4"];
                return (
                  <div
                    key={i}
                    className="absolute h-1 w-1 rounded-full animate-[firework_1s_ease-out_forwards]"
                    style={{
                      left: `${i * 10 + 5}%`,
                      top: `${i * 10 + 5}%`,
                      backgroundColor: colors[i % 3],
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes flame {
          0%,
          100% {
            transform: scaleY(1) translateY(-1px);
          }
          50% {
            transform: scaleY(1.2) translateY(-2px);
          }
        }
        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DiwaliGreeting;
