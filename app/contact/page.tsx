import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact TechStrota | Software Development Company",
  description:
    "Contact TechStrota for web development, mobile app development and SaaS software solutions.",
};

export default function Contact() {
  return (

    <main className="min-h-[calc(100vh-80px)] w-full bg-[#020714] bg-gradient-to-br from-slate-950 via-slate-900 to-[#020714] text-white flex flex-col justify-center py-4">
      
    
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <h1 className="flex items-center justify-center gap-3 text-3xl font-bold mb-5 text-center">
  Contact
  <Link href="/" className="flex items-center">
    <Image src="/logo.png" alt="TechStrota" width={150} height={40} />
  </Link>
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-900/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Left Side: Contact Info Panel */}
          {/* Padding p-8 ki jagah p-6 md:p-8 ki gayi hai */}
          <div className="relative flex flex-col p-6 md:p-8 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-indigo-950/80 border-r border-white/5">
            <div className="z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-blue-300">
  GET IN TOUCH
</h2>
              <p className="mb-6 text-xs leading-relaxed text-white/70">
                Have a question or want a quote? Our team is ready to provide you with the perfect
                software solution.
              </p>

              <div className="space-y-4 text-xs text-white/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:info@techstrota.com" className="text-blue-200 hover:text-white">info@techstrota.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call</p>
                    <a href="tel:+919033476660" className="text-blue-200 hover:text-white">+91 90334 76660</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339-12.2 202.2-31.6 113.1 60.2 44.6 129.7 38.7 239.2 91.6 321.7L0 480l167.7-90.5c68.8 34.4 152.6 29.7 213.1-19.1 83.6-65.3 92.1-185.5 0-273.3zm-34.6 232.2c-8.4 23.7-42.5 44.8-71.1 39.8-57.4-9.9-131.4-79.9-134-140.7-1.2-29.1 19.1-57.3 42.5-65.7 13.1-4.5 24.3 5.1 29.3 17.3 3.5 8.7 4.9 18.3 5.2 21.3.8 6.8-3.2 10.5-9.9 15.3-7.9 5.7-13.3 11.6-5.1 23.5 9.9 13.5 26.2 32.7 49.6 42.3 11.4 4.6 16.5.4 23.1-5.2 4.3-3.7 11.1-8.1 17.7-6.4 9.5 2.3 21.3 7.9 24.6 14.5 2.3 4.6 3.3 11.4 1.2 17.9z"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <a href="https://wa.me/918128840055" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">+91 81288 40055</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Shape */}
            <span className="absolute left-5 top-5 -z-10">
              <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z" fill="url(#paint0_linear_1028_600)"></path><defs><linearGradient id="paint0_linear_1028_600" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.62"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg>
            </span>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative flex flex-col p-6 md:p-8 bg-slate-950/50">
            <div className="mb-5">
              <h2 className="text-lg md:text-xl font-semibold mb-1 tracking-tight">INQUIRY FORM</h2>
              <p className="text-[11px] text-white/60">
                Fill out the form and we’ll reach out within 24 hours.
              </p>
            </div>

            {/* Space between inputs is reduced using space-y-3 */}
            <form className="w-full space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-white/50 mb-1">Full Name</label>
                <input type="text" placeholder="Full Name" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1">Your Contact</label>
                  <input type="tel" placeholder="Your Contact" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white/50 mb-1">Subject</label>
                <input type="text" placeholder="Bulk Inquiry" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30" />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white/50 mb-1">Message</label>
                {/* rows={2} and resize-none added */}
                <textarea placeholder="Enter your requirements here..." className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30 resize-none" rows={2}></textarea>
              </div>

              <button type="button" className="w-full mt-2 rounded-md bg-blue-300 px-4 py-2.5 text-sm font-semibold tracking-wide text-black transition hover:bg-blue-400">
  Submit Inquiry
</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}