'use client';

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission or API call
    setTimeout(() => {
      // Redirect to the Thank You page
      router.push("/ThankYou");
    }, 500); // Add a delay to simulate submission
  };

  return (
    <div id="form" className="h-[60vh] bg-black text-white flex">
      <div className="p-8 mx-auto text-center">
        <h1 className="text-4xl font-extrabold pb-2">Let&apos;s Work Together.</h1>
        <p className="text-sm">Ready to transform your digital presence?</p>
        <p className="pb-6 text-sm">
          Fill out the form below and we&apos;ll be in touch shortly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="text-sm font-medium text-left">
                First Name *
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="  First Name"
                className="py-2 w-52 border bg-black border-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname" className="text-sm font-medium text-left">
                Last Name *
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="  Last Name"
                className="py-2 w-52 border bg-black border-white"
                required
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-left">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="  Email Address"
                className="py-2 w-52 border bg-black border-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-left">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                placeholder="  Company Name"
                className="py-2 w-52 border bg-black border-white"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="project" className="text-sm font-medium text-left">
              Project Details *
            </label>
            <textarea
              id="project"
              placeholder="Project Details"
              className="p-4 border bg-black border-white text-white placeholder-gray-500 resize-none"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 bg-white text-black font-bold text-lg hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
