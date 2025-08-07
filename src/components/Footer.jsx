import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gradient-to-tr from-[#0f172a] to-black text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Left */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-amber-400">Cinemix</h2>
      <p className="text-gray-400 text-sm">
        Eng yaxshi filmlarni biz bilan tomosha qiling. Qiziqarli, foydali va baholashingiz mumkin.
      </p>
    </div>

    {/* Center */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Navigatsiya</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline hover:text-blue-400 transition">Bosh sahifa</a></li>
        <li><a href="#" className="hover:underline hover:text-blue-400 transition">Janrlar</a></li>
        <li><a href="#" className="hover:underline hover:text-blue-400 transition">Yangi filmlar</a></li>
        <li><a href="#" className="hover:underline hover:text-blue-400 transition">Biz haqimizda</a></li>
      </ul>
    </div>

    {/* Right */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Biz bilan bog'laning</h3>
      <div className="flex space-x-4 text-xl">
        <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-telegram"></i></a>
        <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-github"></i></a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Cinemix. Barcha huquqlar himoyalangan.
  </div>
</footer>

    </div>
  )
}
