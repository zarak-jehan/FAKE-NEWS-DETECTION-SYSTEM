import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, AlertTriangle, DollarSign, Clock, Book, Shield } from "lucide-react";

const Legal = () => {
  const countries = [
    {
      id: "pakistan",
      name: "Pakistan",
      flag: "🇵🇰",
      laws: [
        {
          title: "Prevention of Electronic Crimes Act (PECA) 2016",
          description: "Comprehensive cybercrime legislation covering fake news and misinformation",
          penalty: "Up to 3 years imprisonment or fine up to PKR 1 million",
          severity: "High",
          sections: ["Section 20: Spreading false information", "Section 21: Cyber terrorism"]
        },
        {
          title: "Pakistan Penal Code Section 505",
          description: "Statements conducing to public mischief and inciting hatred",
          penalty: "Up to 2 years imprisonment or fine",
          severity: "Medium",
          sections: ["Promoting enmity between groups", "False statements about public servants"]
        }
      ]
    },
    {
      id: "india",
      name: "India",
      flag: "🇮🇳",
      laws: [
        {
          title: "Information Technology Act 2000",
          description: "Covers cyber offenses including spreading fake news online",
          penalty: "Up to 3 years imprisonment and fine up to INR 5 lakhs",
          severity: "High",
          sections: ["Section 66A: Offensive messages", "Section 69A: Content blocking"]
        },
        {
          title: "Indian Penal Code Section 153A",
          description: "Promoting enmity between different groups on grounds of religion, race, etc.",
          penalty: "Up to 3 years imprisonment or fine or both",
          severity: "High",
          sections: ["Hate speech provisions", "Community harmony protection"]
        }
      ]
    },
    {
      id: "usa",
      name: "United States",
      flag: "🇺🇸",
      laws: [
        {
          title: "First Amendment Protections",
          description: "Strong free speech protections with limited government intervention",
          penalty: "Civil litigation, platform moderation",
          severity: "Low",
          sections: ["Protected speech doctrine", "Private platform policies"]
        },
        {
          title: "FTC False Advertising Rules",
          description: "Commercial misinformation and deceptive practices",
          penalty: "Civil penalties up to $43,792 per violation",
          severity: "Medium",
          sections: ["Consumer protection", "Commercial speech regulation"]
        }
      ]
    }
  ];

  const globalTrends = [
    {
      trend: "Platform Accountability",
      description: "Increasing pressure on social media platforms to moderate content",
      impact: "High",
      examples: ["EU Digital Services Act", "UK Online Safety Bill"]
    },
    {
      trend: "AI Detection Laws",
      description: "New regulations requiring disclosure of AI-generated content",
      impact: "Medium",
      examples: ["EU AI Act", "California SB-1001"]
    },
    {
      trend: "Cross-border Cooperation",
      description: "International agreements on combating misinformation",
      impact: "Growing",
      examples: ["G7 Rapid Response Mechanism", "EU-US cooperation"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Legal Framework & Penalties
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding laws and consequences for spreading misinformation across different countries
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Countries Covered</p>
                  <p className="text-2xl font-bold">25+</p>
                </div>
                <Scale className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Max Penalty</p>
                  <p className="text-2xl font-bold">10 Years</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-danger" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Max Fine</p>
                  <p className="text-2xl font-bold">$1M+</p>
                </div>
                <DollarSign className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cases Filed</p>
                  <p className="text-2xl font-bold">1,250+</p>
                </div>
                <Book className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="laws" className="animate-scale-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="laws">National Laws</TabsTrigger>
            <TabsTrigger value="trends">Global Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="laws" className="space-y-6">
            {countries.map((country, index) => (
              <Card 
                key={country.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {country.laws.map((law, lawIndex) => (
                      <div 
                        key={lawIndex} 
                        className="border-l-4 border-primary pl-6 pb-6 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold">{law.title}</h3>
                          <Badge variant={getSeverityColor(law.severity)}>
                            {law.severity} Severity
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{law.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning" />
                              <span className="font-medium">Penalties:</span>
                            </div>
                            <p className="text-sm bg-muted/50 p-3 rounded-lg">{law.penalty}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Book className="h-4 w-4 text-primary" />
                              <span className="font-medium">Key Sections:</span>
                            </div>
                            <ul className="text-sm space-y-1">
                              {law.sections.map((section, sectionIndex) => (
                                <li key={sectionIndex} className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full" />
                                  {section}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid gap-6">
              {globalTrends.map((trend, index) => (
                <Card 
                  key={index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        {trend.trend}
                      </CardTitle>
                      <Badge variant="outline">
                        {trend.impact} Impact
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{trend.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trend.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="secondary">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Warning Notice */}
        <Card className="mt-8 border-warning animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-warning mt-0.5" />
              <div>
                <h3 className="font-semibold text-warning mb-2">Legal Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This information is provided for educational purposes only and should not be considered as legal advice. 
                  Laws and penalties vary by jurisdiction and change frequently. Always consult with qualified legal 
                  professionals for specific legal guidance regarding misinformation and cybercrime laws in your area.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Legal;