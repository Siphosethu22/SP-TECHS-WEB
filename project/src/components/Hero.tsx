import Logo from './Logo';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-8">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Tech Solutions Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Professional computer repair services and cutting-edge web development solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#repair" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Book Repair
            </a>
            <a 
              href="#development" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Web Development
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}