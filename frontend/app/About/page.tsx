import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-20 pb-8 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-10">About BlackBox Designs</h1>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At BlackBox Designs, we specialize in creating innovative and user-focused web solutions that empower businesses to grow and thrive in the digital age. Our mission is to transform your vision into a reality, delivering exceptional websites that leave a lasting impression.
            </p>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li><strong>Innovation:</strong> We embrace cutting-edge technologies to stay ahead of the curve.</li>
              <li><strong>Collaboration:</strong> Your goals are our goals. We work closely with clients to achieve success.</li>
              <li><strong>Excellence:</strong> From design to development, quality is at the heart of everything we do.</li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-lg leading-relaxed">
              BlackBox Designs is powered by a team of creative thinkers, skilled developers, and passionate designers. We pride ourselves on crafting bespoke solutions tailored to your unique needs.
            </p>
          </section>

          {/* Call-to-Action */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s Build Something Great Together</h2>
            <p className="text-lg mb-6">
              Whether you&apos;re a startup or an established business, we’re here to help you unlock your digital potential. Contact us today to get started.
            </p>
            <Link
              href="/#form"
              className="bg-white text-black px-6 py-3 rounded-md text-lg hover:bg-gray-200 transition"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
