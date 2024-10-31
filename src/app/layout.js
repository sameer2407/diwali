import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "Happy Diwali 2024 - Interactive Festival of Lights Celebration | Digital Diwali Greetings",
  description:
    "Celebrate Diwali 2024 with our interactive greeting page featuring animated diyas, rangoli, and fireworks. Share beautiful digital Diwali wishes with friends and family. Experience the festival of lights online with stunning visual effects and traditional elements.",
  keywords:
    "Diwali 2024, Diwali greetings, Festival of lights, Digital Diwali wishes, Interactive Diwali celebration, Online Diwali cards, Animated Diwali wishes",
  openGraph: {
    title: "Happy Diwali 2024 - Interactive Festival of Lights Celebration",
    description:
      "Share beautiful digital Diwali wishes with stunning animations of diyas, rangoli, and fireworks. Celebrate the festival of lights online!",
    type: "website",
    locale: "en_US",
    siteName: "Digital Diwali Greetings",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
