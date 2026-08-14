"use client";

import { FormEvent, useState } from "react";

type Message = { text: string; from: "user" | "bot" };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    setMessages((current) => [...current, { text: message, from: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        { text: data.reply ?? data.error ?? "Something went wrong.", from: "bot" },
      ]);
    } catch {
      setMessages((current) => [...current, { text: "Unable to connect to the chatbot.", from: "bot" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" aria-label="Open customer support chat" onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white shadow-2xl transition-transform hover:scale-105 dark:bg-white dark:text-black">
        {open ? "×" : "🗨️"}
      </button>

      {open && (
        <section aria-label="Customer support chat" className="fixed bottom-24 right-6 z-[999] flex h-[420px] w-[min(320px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
          <header className="flex items-center justify-between bg-black px-6 py-3 text-sm text-white dark:bg-gray-950">
            <span>Customer Support</span>
            <button type="button" aria-label="Close customer support chat" onClick={() => setOpen(false)} className="text-lg">×</button>
          </header>
          <div className="custom-scroll flex-1 space-y-2 overflow-y-auto bg-gray-50 p-3 dark:bg-gray-900">
            {messages.length === 0 && <p className="text-sm text-gray-500 dark:text-gray-400">Ask me about this portfolio.</p>}
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`max-w-[78%] rounded-2xl px-3 py-2 text-[13px] leading-snug ${message.from === "user" ? "ml-auto rounded-tr-sm bg-black text-white dark:bg-white dark:text-black" : "rounded-tl-sm bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"}`}>
                {message.text}
              </div>
            ))}
            {loading && <div className="w-fit rounded-2xl rounded-tl-sm bg-gray-200 px-3 py-2 text-[13px] text-gray-700 dark:bg-gray-700 dark:text-gray-200">Typing…</div>}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 border-t border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
            <input value={input} onChange={(event) => setInput(event.target.value)} disabled={loading} placeholder="Type a message..." className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-300" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message" className="h-9 w-9 rounded-full bg-black text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black">➤</button>
          </form>
        </section>
      )}
    </>
  );
}
