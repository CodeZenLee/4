import Link from "next/link";

export default function ValueProp() {
    return (
      <section className="bg-black py-16">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Elevate Your Online Presence</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Captivate and Convert</h3>
          <p className="text-lg text-gray-300 mb-6">
            Sure, any business can have a website. But not all websites captivate and convert. We specialize in creating 
            stunning, fast, and intuitive websites that are more than just online brochures—they&apos;re 24/7 lead generators.
          </p>
  
          <h3 className="text-2xl font-semibold text-white mb-4">Be Found, Be Chosen</h3>
          <p className="text-lg text-gray-300 mb-6">
            With strategic local SEO and paid ad campaigns, we ensure you&apos;re not just seen—you&apos;re chosen. Let&apos;s make you the 
            first choice in your market. Stand out in the crowded online space and become the go-to name in your industry.
          </p>
  
          <h3 className="text-2xl font-semibold text-white mb-4">The Problem with WordPress and Builders</h3>
          <p className="text-lg text-gray-300 mb-6">
            WordPress sites and DIY website builders promise simplicity, but they often lead to slow load times, clunky 
            designs, and endless plugin headaches. Your site can quickly become outdated, insecure, or bogged down by 
            unnecessary features.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Website builders like Wix and Squarespace might seem easy, but they come with limitations—cookie-cutter designs, 
            poor SEO performance, and a lack of true customization. These platforms might save time upfront but cost you 
            in lost business opportunities over time.
          </p>
  
          <h3 className="text-2xl font-semibold text-white mb-4">Why We&apos;re Different</h3>
          <p className="text-lg text-gray-300 mb-6">
            Unlike generic website builders or over-complicated WordPress setups, we focus on custom solutions tailored 
            to your business. Every element of your site is designed to load fast, rank well on search engines, and guide 
            your visitors toward action.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            No unnecessary plugins, no bloated code—just a clean, intuitive website that works as hard as you do. Plus, 
            we provide ongoing support and optimization, so your website grows with your business.
          </p>
  
          <h3 className="text-2xl font-semibold text-white mb-4">Your Digital Partner</h3>
          <p className="text-lg text-gray-300 mb-6">
            Together, we&apos;ll refine your online voice, craft your unique message, and connect you with clients who value your 
            expertise. Our process is more than just delivering a website—it&apos;s building a partnership for ongoing growth 
            and success.
          </p>
  
          <h3 className="text-2xl font-semibold text-white mb-4">Results You Can See</h3>
          <p className="text-lg text-gray-300 mb-6">
            We don&apos;t just create beautiful websites—we ensure they deliver results. From analytics tracking to optimized 
            conversion funnels, your website will be your most valuable business tool.
          </p>
  
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105">
                <Link href="/#contact-form">Schedule A Call</Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
  