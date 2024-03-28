import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from '@/components/navbar/navbar';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  style: ['italic', "normal"]
});

export const metadata = {
  title: "Quick Bite",
  description: "Comida rapida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Providers>
          <nav>
            <NavBar/>
          </nav>
      
          {children}
        </Providers>
      </body>
    </html>
  );
}
