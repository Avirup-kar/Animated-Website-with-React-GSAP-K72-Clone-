import React from 'react'

const Footer = () => {
  return (
    <footer className="sticky top-0">
      <div className="bg-black text-white min-h-[60vh] flex flex-col justify-between p-6 rounded-t-[50px]">

      {/* TOP SECTION */}
      <div className="flex select-none font-[font2] justify-between items-start flex-wrap gap-4">

        {/* Social Pills */}
        <div className="flex gap-4 flex-wrap">
          {["FB", "IG", "IN", "BE"].map((item, i) => (
            <div key={i} className="border-2 border-white hover:border-[#D3FD50] rounded-full px-6 py-1 pt-3 leading-[5vh] text-4xl md:text-6xl font-light tracking-wide cursor-pointer hover:text-[#D3FD50] transition-all duration-300">
              {item}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="border-2 border-white hover:border-[#D3FD50] rounded-full leading-[4vh] px-10 py-1 text-5xl md:text-7xl font-light flex items-center gap-6 cursor-pointer hover:text-[#D3FD50] transition-all duration-300">
          CONTACT
          <span className="text-4xl md:text-6xl">▼</span>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm md:text-base mt-20">

        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="text-xl">🌐</span>
          <span>MONTREAL_09:49:03</span>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            POLITIQUE DE CONFIDENTIALITÉ
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            AVIS DE CONFIDENTIALITÉ
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            RAPPORT ÉTHIQUE
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] hover:underline">
            OPTIONS DE CONSENTEMENT
          </span>
        </div>

        {/* Right */}
        <div className="cursor-pointer hover:text-[#D3FD50] hover:underline">
          RETOUR EN HAUT
        </div>

      </div>
      </div>
    </footer>
  )
}

export default Footer
