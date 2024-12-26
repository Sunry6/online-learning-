import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div>
      <section className="border-t flex flex-col items-center justify-center">
        <div className="bg-gradient-to-l from-blue-500 to-purple-600 text-white font-bold px-3 py-1 rounded-lg -mt-4 text-base">
          online learning
        </div>
        <div className="flex justify-center gap-2 font-bold mt-3">
          <span>本站code</span>
          <span className="text-amber-500">ryan</span>
        </div>
        <div className="bg-[#16a085] px-3 py-1 rounded-lg text-white text-base mt-6">
          react + typescript + vite
        </div>
      </section>
      <div className="bg-gray-900 mt-16 text-center text-white py-16 text-slate-200/80 leading-7 text-base">
        online learning <br />
        Copyright @ online-learning All Rights Reserved <br />
      </div>
    </div>
  )
}
