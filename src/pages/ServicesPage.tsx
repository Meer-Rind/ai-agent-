import React from 'react';
import { Bot, Workflow, MessageSquare, Database, Mail, ShoppingCart, BarChart3, Users } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const ServicesPage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  const services = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI that handles customer queries 24/7",
      features: ["Natural language processing", "Multi-platform integration", "Custom training", "Analytics dashboard"],
      industries: ["E-commerce", "Healthcare", "Finance", "Support"]
    },
    {
      icon: <Workflow className="h-12 w-12" />,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks with intelligent process automation",
      features: ["Document processing", "Data validation", "Approval workflows", "Error handling"],
      industries: ["HR", "Finance", "Operations", "Legal"]
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Marketing Automation",
      description: "AI-driven campaigns that personalize customer experiences",
      features: ["Lead scoring", "Email sequences", "Behavior tracking", "A/B testing"],
      industries: ["Marketing", "Sales", "E-commerce", "SaaS"]
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Processing & Analytics",
      description: "Transform raw data into actionable business insights",
      features: ["Real-time processing", "Predictive analytics", "Custom dashboards", "API integration"],
      industries: ["Finance", "Healthcare", "Retail", "Manufacturing"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce Automation",
      description: "Optimize your online store with AI-powered solutions",
      features: ["Inventory management", "Price optimization", "Customer segmentation", "Fraud detection"],
      industries: ["Retail", "E-commerce", "Fashion", "Electronics"]
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Business Intelligence",
      description: "AI-powered insights for strategic decision making",
      features: ["Predictive modeling", "Trend analysis", "Risk assessment", "Performance monitoring"],
      industries: ["Finance", "Healthcare", "Technology", "Consulting"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bot Agent
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive AI solutions tailored to your industry needs. From chatbots to complex workflow automation, 
            we deliver results that matter.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:shadow-lg hover:shadow-cyan-500/25">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300">
              From consultation to deployment, we ensure smooth AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your current processes and identify automation opportunities" },
              { step: "02", title: "Design", description: "Custom AI solution architecture tailored to your specific needs" },
              { step: "03", title: "Development", description: "Building and training your AI systems with rigorous testing" },
              { step: "04", title: "Deployment", description: "Seamless integration with ongoing support and optimization" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which AI automation solution is perfect for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              Get Started Today
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-30 -z-10"></div>
            </button>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      />
    </div>
  );
};

export default ServicesPage;
