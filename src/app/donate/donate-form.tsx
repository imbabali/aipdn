"use client";

import { useState } from "react";
import { Heart, Copy, Check, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const WHATSAPP_NUMBER = CONTACT.phone.replace(/\s/g, "").replace("+", "");

export function DonateForm() {
  const [amount, setAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<"select" | "confirm">("select");

  const selectedAmount = amount ?? (customAmount ? parseInt(customAmount) : 0);

  const handleCopyNumber = async () => {
    await navigator.clipboard.writeText(CONTACT.mpesa);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    if (selectedAmount > 0) {
      setStep("confirm");
    }
  };

  const whatsappConfirmUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AIPDN, I have made an M-Pesa donation of KES ${selectedAmount.toLocaleString()}${name ? ` from ${name}` : ""}. Transaction reference: [please paste your M-Pesa confirmation code here]`
  )}`;

  if (step === "confirm") {
    return (
      <div className="space-y-6" role="status" aria-live="polite">
        <div className="rounded-xl bg-green-50 border border-green-200 p-5 sm:p-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Heart className="h-8 w-8 text-green-700" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-green-800">
            Send KES {selectedAmount.toLocaleString()} via M-Pesa
          </h3>
          <p className="mt-2 text-sm text-green-700">
            Send to the number below and confirm with us on WhatsApp
          </p>

          {/* M-Pesa number with copy */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="rounded-xl bg-white border border-green-200 px-6 py-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-green-800 tracking-wider">
                {CONTACT.mpesa}
              </span>
            </div>
            <button
              onClick={handleCopyNumber}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
              aria-label={copied ? "Copied" : "Copy M-Pesa number"}
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Steps */}
          <div className="mt-6 text-left space-y-3">
            <p className="text-sm font-medium text-green-800">
              After sending:
            </p>
            <a
              href={whatsappConfirmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirm on WhatsApp
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <button
          onClick={() => setStep("select")}
          className="w-full text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Change amount
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Amount selection */}
      <fieldset>
        <legend className="block text-sm font-medium text-foreground mb-3">
          Select Amount (KES)
        </legend>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              aria-pressed={amount === preset}
              onClick={() => {
                setAmount(preset);
                setCustomAmount("");
              }}
              className={`rounded-xl border py-3 sm:py-3.5 text-sm font-semibold transition-all ${
                amount === preset
                  ? "border-green-600 bg-green-700 text-white shadow-sm"
                  : "border-border bg-background text-foreground hover:border-green-300 hover:bg-green-50"
              }`}
            >
              KES {preset.toLocaleString()}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Custom amount */}
      <div>
        <label
          htmlFor="custom-amount"
          className="block text-sm font-medium text-foreground"
        >
          Or enter custom amount
        </label>
        <div className="relative mt-2">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            KES
          </span>
          <input
            type="number"
            id="custom-amount"
            min="10"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount(null);
            }}
            placeholder="Enter amount"
            className="block w-full rounded-xl border border-border bg-background pl-14 pr-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>
      </div>

      {/* Donor name (optional) */}
      <div>
        <label
          htmlFor="donor-name"
          className="block text-sm font-medium text-foreground"
        >
          Your Name (optional)
        </label>
        <input
          type="text"
          id="donor-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="For our records"
          autoComplete="name"
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        />
      </div>

      {/* Donate button */}
      <button
        onClick={handleConfirm}
        disabled={selectedAmount <= 0}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-green-700 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Heart className="h-4 w-4" aria-hidden="true" />
        {selectedAmount > 0
          ? `Donate KES ${selectedAmount.toLocaleString()}`
          : "Select an amount"}
      </button>
    </div>
  );
}
