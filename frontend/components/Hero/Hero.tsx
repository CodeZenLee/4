import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-black h-[50vh] flex flex-col justify-between items-center px-8">
      {/* Hero Content */}
      <div className="flex flex-row h-full items-center pt-24">
        {/* Hero Copy Section */}
        <div className="text-white flex-1 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">
            Skyrocket Your <span className="text-blue-500">Business</span>
          </h1>
          <p className="text-lg mb-2">
            Ready to <span className="text-yellow-400">dominate</span> your market?
          </p>
          <p className="text-lg mb-2">
            Business growth with websites that <span className="font-bold text-green-400">deliver results</span>
          </p>
          <p className="text-lg pb-8">
            Let us craft a <span className="bg-red-500 text-black px-1 rounded">custom digital presence</span> that drives conversions and scales with your vision.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 mb-8">
            <Link href="/#contact-form">Schedule A Call</Link>
          </button>
          <p>90-Day Money Back Guarantee 😀</p>
        </div>
      </div>
    </div>
  );
}
