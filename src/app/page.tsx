import Script from "next/script";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>

      <Script
        src="https://customer-support-chat-bot-4i7d.vercel.app/chatbot.js"
        data-owner-id="usr_113980192778617859"
        strategy="afterInteractive"
      />

      <Hero />
      <Projects />
    </main>
  );
}