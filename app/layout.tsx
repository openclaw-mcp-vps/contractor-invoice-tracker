import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceTrack – Track Unpaid Invoices & Automate Follow-Ups",
  description: "Monitor invoice payment status across multiple clients and send automated follow-up sequences. Built for freelancers and small agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d67bf067-7f8d-48b9-bed0-e6f1154d9115"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
