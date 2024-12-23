import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Services() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-10">Our Services</h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Custom Web Design</h2>
              <p className="text-lg">
                Beautiful, responsive, and user-focused designs tailored to your brand and business goals.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h2>
              <p className="text-lg">
                Scalable and secure online stores to help you sell your products and grow your business.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
              <p className="text-lg">
                Improve your search engine rankings and drive organic traffic to your website.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Website Maintenance</h2>
              <p className="text-lg">
                Keep your website secure, up-to-date, and running smoothly with our maintenance plans.
              </p>
            </div>

            {/* Service 5 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
              <p className="text-lg">
                Create intuitive and visually appealing experiences that engage your users.
              </p>
            </div>

            {/* Service 6 */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Custom Development</h2>
              <p className="text-lg">
                Bespoke web applications and tools built to meet your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
