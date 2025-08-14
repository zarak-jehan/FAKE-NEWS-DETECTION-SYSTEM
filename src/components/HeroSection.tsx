import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: "News Analyzed", value: "250K+", color: "text-primary" },
    { icon: TrendingUp, label: "Accuracy Rate", value: "94.7%", color: "text-success" },
    { icon: Users, label: "Users Protected", value: "50K+", color: "text-warning" },
    { icon: Globe, label: "Countries Covered", value: "25+", color: "text-accent" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Fight
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Misinformation
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered platform to detect fake news, analyze media bias, 
            and promote digital literacy. Protect yourself and your community from misinformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/analyze">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow animate-pulse-glow"
              >
                <Shield className="h-5 w-5 mr-2" />
                Analyze News Now
              </Button>
            </Link>
            <Link to="/stats">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                View Statistics
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </div>
  );
};

export default HeroSection;