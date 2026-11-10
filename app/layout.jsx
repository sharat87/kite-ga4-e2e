import Script from "next/script";

const GA_ID = "G-BPX4T6F1QF";

export const metadata = { title: "Kite GA4 end-to-end check" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
