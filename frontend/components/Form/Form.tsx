'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";


export default function Form() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value, // Dynamically update the field being edited
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { ...formValues };

    try {
      const response = await axios.post("http://localhost:3001/api/form", formData);
      if (response.status === 201) {
        // Route to the Thank You page
        router.push("/ThankYou");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
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
              <label htmlFor="firstName" className="text-sm font-medium text-left">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="  First Name"
                className="py-2 w-52 border bg-black border-white"
                required
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-medium text-left">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="  Last Name"
                className="py-2 w-52 border bg-black border-white"
                required
                value={formValues.lastName}
                onChange={handleChange}
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
                name="email"
                placeholder="  Email Address"
                className="py-2 w-52 border bg-black border-white"
                required
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-left">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="  Company Name"
                value={formValues.company}
                onChange={handleChange}
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
              name="projectDetails"
              className="p-4 border bg-black border-white text-white placeholder-gray-500 resize-none"
              rows={4}
              required
              value={formValues.projectDetails}
              onChange={handleChange}
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
