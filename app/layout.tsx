import type { Metadata } from "next";
import { Crimson_Text, Source_Sans_3, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StateSelector from "@/components/StateSelector";

const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-crimson',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-source',
  display: 'swap',
});

const nunito = Nunito({ 
  weight: ['300', '400', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MentalCare - Professional Mental Health Services",
  description: "Connect with licensed mental health professionals for convenient online therapy and psychiatric care. Same-day appointments available.",
  keywords: "mental health, therapy, psychiatry, online therapy, mental health care, counseling",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${crimsonText.variable} ${sourceSans.variable} ${nunito.variable}`}>
      <body className={`${sourceSans.className} bg-cream-50`} suppressHydrationWarning>
        <Header />
        <StateSelector />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">MentalCare</h3>
                <p className="text-gray-400">Professional mental health services when you need them most.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/providers" className="text-gray-400 hover:text-white transition-colors">Find Providers</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="/insurance" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
                  <li><a href="/book" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Support</h4>
                <ul className="space-y-2">
                  <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
                <p className="text-gray-400 mb-2">24/7 Support Available</p>
                <p className="text-gray-400 mb-2">1-800-MENTAL-CARE</p>
                <p className="text-gray-400">support@mentalcare.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 MentalCare. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
