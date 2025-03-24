import { Orbitron } from "next/font/google";
import "./globals.css";

const font = Orbitron({
  subsets: ['latin']
})

export const metadata = {
  title: "Leonardo Kinouchi portifólio",
  description: "Portifólio pessoal de Leonardo Kinouchi, estudante de engenharia da computação e desenvolvedor full-stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} antialiased`}>


        {children}


      </body>
    </html>
  );
}
