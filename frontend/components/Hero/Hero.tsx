import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black h-[70vh] flex flex-col justify-between items-center px-8">
      {/* Hero Content */}
      <div className="flex flex-row h-full items-center">
        {/* Hero Copy Section */}
        <div className="text-white flex-1 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">Skyrocket Your Business</h1>
          <p className="text-lg mb-2">Ready to dominate your market?</p>
          <p className="text-lg mb-2">Business growth with websites that deliver results</p>
          <p className="text-lg">Let us craft a custom digital presence that drives conversions and scales with your vision.</p>
        </div>


        {/* Hero Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/Hero-Image.png"
            alt="Hero Picture"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-white mt-4 text-center text-2xl font-semibold">
        Technologies We Use
      </p>
    </div>
  );
}
