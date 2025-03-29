import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setForm({ name: '', email: '', service: '', date: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Premium Cleaning in Reykjavík</h1>
        <p className="text-center text-lg mb-10">
          Fast, reliable, and detail-obsessed. We clean homes, offices, and Airbnbs with care.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Home & apartment cleaning (one-time or recurring)</li>
            <li>Office cleaning (customized to your needs)</li>
            <li>Airbnb turnover & reset (cleaning, laundry, restock)</li>
            <li>Deep cleaning & move-out cleaning</li>
          </ul>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold">Contact Us</h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email or Phone"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="service"
            value={form.service}
            onChange={handleChange}
            placeholder="Type of Cleaning"
            className="w-full p-2 border rounded"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Preferred Date/Time"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional Message"
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
