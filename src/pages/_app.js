import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "../context/ThemeContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
