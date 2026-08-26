"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AISenseiPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "こんにちは！(Konnichiwa!) Halo! Saya Sensei AI. Mari kita berlatih percakapan bahasa Jepang hari ini. Apa yang ingin kamu bicarakan?",
      }
    ]
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-white rounded-3xl border border-[#E7E5E4] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-[#E7E5E4] bg-[#FFF9F7] flex items-center gap-4 relative">
        <div className="absolute top-0 right-0 p-4 opacity-50">
          <Sparkles className="text-[#D95F76]" size={40} />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#FCE7EC] flex items-center justify-center relative z-10">
          <Bot className="text-[#D95F76]" size={24} />
        </div>
        <div className="relative z-10">
          <h2 className="font-bold text-[#1F2937] text-lg">Sensei AI</h2>
          <p className="text-sm text-[#6B7280]">Online • Siap membimbing bahasa Jepangmu</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#F8FAFC]">
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-3 sm:gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              m.role === 'user' ? 'bg-[#D95F76]' : 'bg-[#EEF2FF]'
            }`}>
              {m.role === 'user' ? (
                <User size={18} className="text-white" />
              ) : (
                <Bot size={18} className="text-[#4F46E5]" />
              )}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-3 ${
                m.role === 'user' 
                  ? 'bg-[#D95F76] text-white rounded-tr-sm shadow-md' 
                  : 'bg-white border border-[#E7E5E4] text-[#1F2937] rounded-tl-sm shadow-sm'
              }`}
            >
              <div className="text-sm sm:text-base whitespace-pre-wrap leading-relaxed font-medium">
                {m.content}
              </div>
            </motion.div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
              <Bot size={18} className="text-[#4F46E5]" />
            </div>
            <div className="bg-white border border-[#E7E5E4] rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-1.5 shadow-sm">
              <motion.div className="w-2 h-2 bg-[#4F46E5] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
              <motion.div className="w-2 h-2 bg-[#4F46E5] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
              <motion.div className="w-2 h-2 bg-[#4F46E5] rounded-full" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-5 bg-white border-t border-[#E7E5E4]">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ketik balasanmu dalam bahasa Jepang atau Indonesia..."
            className="flex-1 px-5 py-4 bg-[#F8FAFC] border border-[#E7E5E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D95F76] focus:border-transparent transition-all text-sm sm:text-base"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-4 bg-[#D95F76] text-white rounded-xl hover:bg-[#B83D58] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
