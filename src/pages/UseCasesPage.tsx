import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const UseCasesPage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  const useCases = [
    {
      title: "Customer Service Automation",
      industry: "E-commerce",
      problem: "Manual customer support handling 1000+ daily queries, leading to long response times and customer dissatisfaction.",
      solution: "Implemented AI chatbot with natural language processing and seamless handoff to human agents.",
      results: [
        "90% reduction in response time",
        "24/7 customer support availability",
        "60% decrease in support tickets",
        "85% customer satisfaction increase"
      ],
      metrics: {
        efficiency: "90%",
        cost: "$50K",
        time: "2 weeks"
      }
    },
    {
      title: "Sales Process Automation",
      industry: "SaaS",
      problem: "Sales team spending 70% of time on administrative tasks instead of closing deals.",
      solution: "Automated lead scoring, email sequences, and CRM data entry with AI-powered insights.",
      results: [
        "3x increase in qualified leads",
        "40% boost in conversion rates",
        "50% time savings for sales team",
        "Automated follow-up sequences"
      ],
      metrics: {
        efficiency: "75%",
        cost: "$30K",
        time: "3 weeks"
      }
    },
    {
      title: "Inventory Management",
      industry: "Retail",
      problem: "Manual inventory tracking leading to stockouts, overstocking, and lost revenue.",
      solution: "AI-powered demand forecasting and automated reordering system with supplier integration.",
      results: [
        "25% reduction in stockouts",
        "30% decrease in excess inventory",
        "Real-time inventory tracking",
        "Automated supplier communications"
      ],
      metrics: {
        efficiency: "85%",
        cost: "$40K",
        time: "4 weeks"
      }
    },
    {
      title: "Document Processing",
      industry: "Finance",
      problem: "Manual processing of loan applications taking 2-3 weeks, causing customer frustration.",
      solution: "AI document extraction and automated approval workflow with compliance checks.",
      results: [
        "95% faster document processing",
        "Automated compliance verification",
        "Real-time application status",
        "Reduced human error by 99%"
      ],
      metrics: {
        efficiency: "95%",
        cost: "$60K",
        time: "6 weeks"
      }
    },
    {
      title: "Marketing Campaign Optimization",
      industry: "E-commerce",
      problem: "Low email open rates and poor campaign performance due to generic messaging.",
      solution: "AI-powered personalization engine with behavioral analysis and dynamic content.",
      results: [
        "180% increase in open rates",
        "250% boost in click-through rates",
        "Automated A/B testing",
        "Dynamic content generation"
      ],
      metrics: {
        efficiency: "80%",
        cost: "$35K",
        time: "3 weeks"
      }
    },
    {
      title: "Quality Control Automation",
      industry: "Manufacturing",
      problem: "Manual quality inspection causing delays and inconsistent standards.",
      solution: "Computer vision AI for automated defect detection and quality scoring.",
      results: [
        "99.5% defect detection accuracy",
        "60% faster inspection process",
        "Consistent quality standards",
        "Reduced waste by 40%"
      ],
      metrics: {
        efficiency: "95%",
        cost: "$80K",
        time: "8 weeks"
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-World
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Success Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how businesses across industries have transformed their operations with our AI automation solutions.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {useCase.industry}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">The Challenge:</h4>
                    <p className="text-gray-300">{useCase.problem}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Our Solution:</h4>
                    <p className="text-gray-300">{useCase.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Results Achieved:</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-sm text-gray-400">Efficiency</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{useCase.metrics.efficiency}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-sm text-gray-400">Investment</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">{useCase.metrics.cost}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-sm text-gray-400">Timeline</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">{useCase.metrics.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300">
              AI automation solutions tailored for every sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "E-commerce", "Healthcare", "Finance", "Manufacturing", 
              "SaaS", "Retail", "Education", "Real Estate", 
              "Legal", "Marketing", "HR", "Consulting"
            ].map((industry, index) => (
              <div 
                key={index} 
                className="group p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI automation can transform your specific business challenges into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              Schedule a Discovery Call
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default UseCasesPage;