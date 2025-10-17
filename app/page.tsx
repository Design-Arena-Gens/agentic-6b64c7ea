'use client'

import { useState } from 'react'

interface Candy {
  id: number
  name: string
  emoji: string
  price: number
  vibe: string
  description: string
}

const candies: Candy[] = [
  { id: 1, name: 'SOUR SCREAMS', emoji: '🍬', price: 6.66, vibe: 'bussin', description: 'these hit different fr no cap' },
  { id: 2, name: 'GHOST GUMMIES', emoji: '👻', price: 4.20, vibe: 'iconic', description: 'the vibes are immaculate' },
  { id: 3, name: 'VAMPIRE BLOOD POPS', emoji: '🩸', price: 5.55, vibe: 'slay', description: 'periodt these are everything' },
  { id: 4, name: 'WITCH\'S BREW JELLIES', emoji: '🧙‍♀️', price: 7.77, vibe: 'fire', description: 'straight up gas no printer' },
  { id: 5, name: 'ZOMBIE CHUNKS', emoji: '🧟', price: 8.88, vibe: 'lit', description: 'absolutely unhinged flavor' },
  { id: 6, name: 'PUMPKIN SPICE BARS', emoji: '🎃', price: 3.33, vibe: 'cute', description: 'basic but make it spooky' },
  { id: 7, name: 'DEMON DROPS', emoji: '😈', price: 9.99, vibe: 'insane', description: 'these are so chaotic i love it' },
  { id: 8, name: 'SKELETON BONES', emoji: '💀', price: 5.00, vibe: 'valid', description: 'respectfully obsessed' },
  { id: 9, name: 'SPIDER WEB TAFFY', emoji: '🕷️', price: 4.44, vibe: 'goated', description: 'the texture??? chef\'s kiss' },
]

export default function Home() {
  const [cart, setCart] = useState<Candy[]>([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (candy: Candy) => {
    setCart([...cart, candy])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, candy) => sum + candy.price, 0)

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🎃</div>
        <div className="absolute top-40 right-20 text-6xl animate-float opacity-20" style={{ animationDelay: '1s' }}>👻</div>
        <div className="absolute bottom-40 left-20 text-6xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🦇</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>💀</div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b-4 border-neon-pink">
        <div>
          <h1 className="text-5xl md:text-7xl font-black gradient-text tracking-tighter uppercase">
            SPOOKY SWEETS
          </h1>
          <p className="text-neon-purple text-sm md:text-base mt-2 font-medium">
            ur fav halloween candy plug 🎃 since 2024
          </p>
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative bg-neon-pink hover:bg-neon-purple transition-all duration-300 text-white font-black px-6 py-3 rounded-full border-4 border-white transform hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-neon-orange text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center animate-pulse-neon">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-16 px-4">
        <div className="inline-block mb-4 px-6 py-2 bg-neon-orange rounded-full border-4 border-neon-pink transform rotate-2">
          <p className="text-xl md:text-2xl font-black uppercase">LIMITED EDITION DROPS 🔥</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-shadow-neon text-neon-green">
          NO CAP THE MOST BUSSIN CANDY FR FR
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          straight gas, no mid, all heat. get ur spooky szn treats before they ghost u 👻
        </p>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candies.map((candy) => (
            <div
              key={candy.id}
              className="group bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm p-6 rounded-3xl border-4 border-neon-pink hover:border-neon-green transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <div className="text-7xl mb-4 text-center animate-float candy-shadow">
                {candy.emoji}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-black text-neon-pink group-hover:text-neon-green transition-colors">
                    {candy.name}
                  </h3>
                  <span className="bg-neon-purple px-3 py-1 rounded-full text-xs font-black border-2 border-white">
                    {candy.vibe}
                  </span>
                </div>
                <p className="text-gray-300 text-sm italic">{candy.description}</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-3xl font-black text-neon-orange">
                    ${candy.price}
                  </span>
                  <button
                    onClick={() => addToCart(candy)}
                    className="bg-neon-green hover:bg-neon-orange text-black font-black px-6 py-2 rounded-full border-4 border-white transform transition-all duration-200 hover:scale-110 active:scale-95 uppercase text-sm"
                  >
                    COP IT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end" onClick={() => setShowCart(false)}>
          <div
            className="bg-gradient-to-b from-purple-900 to-black w-full max-w-md p-8 overflow-y-auto border-l-4 border-neon-pink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-black gradient-text uppercase">UR BAG</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-4xl hover:text-neon-pink transition-colors"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-6xl mb-4">👻</p>
                <p className="text-xl text-gray-400">ur cart is giving empty energy</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {cart.map((candy, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-black/50 p-4 rounded-2xl border-2 border-neon-purple"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{candy.emoji}</span>
                        <div>
                          <p className="font-black text-neon-pink">{candy.name}</p>
                          <p className="text-neon-orange font-bold">${candy.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-2xl hover:text-red-500 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t-4 border-neon-pink pt-6 space-y-4">
                  <div className="flex justify-between items-center text-2xl font-black">
                    <span className="text-neon-green">TOTAL:</span>
                    <span className="text-neon-orange">${total.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-neon-pink hover:bg-neon-green text-white hover:text-black font-black py-4 rounded-full border-4 border-white transform transition-all duration-200 hover:scale-105 active:scale-95 uppercase text-lg">
                    CHECKOUT (it's giving main character)
                  </button>
                  <p className="text-center text-sm text-gray-400 italic">
                    no refunds we don't play 💅
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-neon-orange p-8 text-center">
        <p className="text-neon-purple font-black text-xl mb-2">
          SPOOKY SWEETS © 2024
        </p>
        <p className="text-gray-400 text-sm">
          periodt. we're not like other candy stores, we're a cool candy store 😎
        </p>
        <div className="flex justify-center gap-6 mt-4 text-3xl">
          <span className="hover:animate-pulse-neon cursor-pointer">👻</span>
          <span className="hover:animate-pulse-neon cursor-pointer">🎃</span>
          <span className="hover:animate-pulse-neon cursor-pointer">💀</span>
          <span className="hover:animate-pulse-neon cursor-pointer">🍬</span>
        </div>
      </footer>
    </main>
  )
}
