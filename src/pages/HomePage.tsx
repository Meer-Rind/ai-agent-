import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Zap, Brain, Cpu, Bot } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Workflows",
      description: "Intelligent automation that learns and adapts to your business needs"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Implementation",
      description: "Deploy AI solutions in days, not months, with our proven methodology"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Custom AI Agents",
      description: "Tailored chatbots and AI assistants that work seamlessly with your brand"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Advanced Integration",
      description: "Connect all your tools and platforms for unified AI-driven operations"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "95%", label: "Efficiency Increase" },
    { number: "24/7", label: "AI Support Available" },
    { number: "30+", label: "Industries Served" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "AI Bot Agent transformed our customer service. Our response time dropped from hours to seconds!",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Operations Director, E-commerce Plus",
      content: "The workflow automation saved us 40 hours per week. ROI was immediate and substantial.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Manager, GrowthCorp",
      content: "Their AI marketing automation increased our conversion rate by 180%. Incredible results!",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),rgba(168,85,247,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unlock AI-Powered
              </span>
              <br />
              <span className="text-white">Efficiency</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI automation solutions. 
              Streamline workflows, boost productivity, and scale effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                Book a Free Consultation
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-30 -z-10"></div>
              </button>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver enterprise-grade AI automation that scales with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Join hundreds of businesses already transforming with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how AI automation can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              Talk to an Expert
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-30 -z-10"></div>
            </button>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/a79zDHz7gck?si=51TXIzsuHhYcwC4z"
      />
    </div>
  );
};

export default HomePage;