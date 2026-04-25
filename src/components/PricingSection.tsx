import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    description: "A solid starting point for learners who want to explore the platform.",
    badge: "Best for beginners",
    cardStyle: "border-slate-200 bg-white",
    badgeStyle: "bg-slate-100 text-slate-700",
    buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    features: [
      "Access to selected practice questions",
      "Basic exam tips and study guidance",
      "Progress overview dashboard",
      "Community updates and announcements",
    ],
    href: "/signup",
  },
  {
    name: "Premium Plan",
    price: "$19",
    period: "/ month",
    description: "Full access for serious preparation with advanced tools and guidance.",
    badge: "Most popular",
    highlighted: true,
    cardStyle: "border-blue-900 bg-linear-to-b from-white to-blue-50/70 shadow-xl",
    badgeStyle: "bg-blue-100 text-blue-900",
    buttonStyle: "bg-linear-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white",
    features: [
      "Unlimited practice tests",
      "Detailed performance insights",
      "Premium lessons and model answers",
      "Priority support and updates",
    ],
    href: "/signup",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-900/70">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose the plan that fits your prep
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you want deeper practice, more insights, and faster progress.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-up delay-${(index + 1) * 150} ${plan.cardStyle} ${plan.highlighted ? "ring-1 ring-blue-200" : "shadow-sm"}`}
            >
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${plan.badgeStyle}`}>
                {plan.badge}
              </div>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-5xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                {plan.period ? (
                  <span className="pb-2 text-sm font-semibold text-slate-500">{plan.period}</span>
                ) : null}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-3 max-w-md text-slate-600 leading-relaxed">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110 ${plan.buttonStyle}`}
              >
                {plan.name === "Free Plan" ? "Start Free" : "Start Premium"}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
