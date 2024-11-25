import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
    src: "./fonts/Vecna.otf",
});

export const metadata = {
    title: "Servant RPG",
    description: "Servant RPG",
    charSet: "UTF-8",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt-br">
            <body className={myFont.className}>
                {children}
            </body>
        </html>
    );
}
