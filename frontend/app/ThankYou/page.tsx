import Link from 'next/link';

export default function ThankYou() {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg mb-6">
            Your submission has been received. We&apos;ll get back to you shortly.
          </p>
          <Link href="/" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  