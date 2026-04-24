import { CheckCircle, Zap, Users, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Adaptive Learning",
      description:
        "AI-powered system that adjusts difficulty based on your performance",
    },
    {
      icon: Award,
      title: "Expert Content",
      description: "Created by certified English teachers with 15+ years experience",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of learners and get help from mentors",
    },
    {
      icon: CheckCircle,
      title: "Real Practice Tests",
      description: "Authentic exam-style questions from official sources",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose TestLingua?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive tools and resources to help you succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-xl hover:bg-gray-50 transition-colors animate-fade-up delay-${(index + 1) * 150}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-100 to-slate-50 rounded-full flex items-center justify-center animate-float">
                    <Icon className="text-slate-700" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
