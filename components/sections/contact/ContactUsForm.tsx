import { motion } from "framer-motion";
import { useState } from "react";

import { Send } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const ContactUsForm = ({ isInView }: { isInView: boolean }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await submitContactForm({
        name: formState.name,
        email: formState.email,
        content: formState.message,
      });

      if (!res?.success) {
        throw new Error(res?.message || "Failed to send message");
      }

      setSent(true);

      // reset form
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="terminal">
        <div className="terminal-header">
          <div className="dot bg-[#ff5f56]" />
          <div className="dot bg-[#ffbd2e]" />
          <div className="dot bg-[#27c93f]" />
          <span className="ml-3 text-muted text-xs font-mono">
            send-message.ts
          </span>
        </div>
        <div className="p-6">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="text-[#27c93f] text-4xl">✓</div>
              <p className="font-display font-bold text-bright text-xl">
                Message sent!
              </p>
              <p className="font-mono text-sm text-muted">
                I&apos;ll get back to you soon.
              </p>
              <pre className="font-mono text-xs text-accent mt-4">
                {"// console.log('awaiting_response...')"}
              </pre>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  name: "name",
                  label: "const name",
                  placeholder: '"Your Name"',
                  type: "text",
                },
                {
                  name: "email",
                  label: "const email",
                  placeholder: '"you@email.com"',
                  type: "email",
                },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="font-mono text-xs text-accent">
                    {field.label} =
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        [field.name]: e.target.value,
                      }))
                    }
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 font-mono text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              ))}
              <div className="space-y-2">
                <label className="font-mono text-xs text-accent">
                  const message =
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={`"What's on your mind?"`}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((p) => ({
                      ...p,
                      message: e.target.value,
                    }))
                  }
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 font-mono text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 font-mono text-xs">{error}</p>
              )}
              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-accent text-bg font-mono font-bold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 disabled:opacity-70 transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                data-hover
              >
                {sending ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    sendMessage()
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsForm;
