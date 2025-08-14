import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, TrendingUp, AlertCircle, Clock } from "lucide-react";

const Global = () => {
  const [selectedCountry, setSelectedCountry] = useState("pakistan");

  const countries = [
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "brazil", label: "Brazil" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
  ];

  const fakeNewsData = {
    pakistan: [
      {
        id: 1,
        title: "False claims about new government policy on fuel subsidies spread on social media",
        source: "Express Tribune",
        date: "2024-01-15",
        category: "Politics",
        severity: "High",
        shares: "12.5K",
        status: "Debunked",
        description: "Viral WhatsApp message containing false information about fuel subsidy removal was traced and debunked."
      },
      {
        id: 2,
        title: "Misleading health advice about winter immunity spreads in Punjab",
        source: "Dawn News",
        date: "2024-01-12",
        category: "Health",
        severity: "Medium",
        shares: "8.2K",
        status: "Partially False",
        description: "Traditional remedy claims exaggerated with unverified medical benefits."
      },
      {
        id: 3,
        title: "Doctored images of flood damage in Karachi circulate during monsoon season",
        source: "Geo News",
        date: "2024-01-10",
        category: "Weather",
        severity: "High",
        shares: "15.7K",
        status: "Completely False",
        description: "Images from previous year's flooding presented as current damage."
      },
      {
        id: 4,
        title: "False cryptocurrency investment scheme targets young professionals",
        source: "The News",
        date: "2024-01-08",
        category: "Finance",
        severity: "Critical",
        shares: "6.8K",
        status: "Scam Alert",
        description: "Fraudulent investment platform using deepfake celebrity endorsements."
      },
      {
        id: 5,
        title: "Misinformation about new education policy affects university admissions",
        source: "Express Tribune",
        date: "2024-01-05",
        category: "Education",
        severity: "Medium",
        shares: "9.1K",
        status: "Clarified",
        description: "Incomplete information about admission criteria led to student confusion."
      }
    ],
    india: [
      {
        id: 1,
        title: "False claims about digital currency ban create market panic",
        source: "Times of India",
        date: "2024-01-14",
        category: "Finance",
        severity: "High",
        shares: "45.2K",
        status: "Debunked",
        description: "Fabricated government statement about cryptocurrency prohibition."
      },
      {
        id: 2,
        title: "Doctored video of political rally spreads on social platforms",
        source: "Hindu Business Line",
        date: "2024-01-11",
        category: "Politics",
        severity: "Critical",
        shares: "78.9K",
        status: "Manipulated Media",
        description: "AI-generated video content showing false political statements."
      }
    ],
    usa: [
      {
        id: 1,
        title: "Conspiracy theory about 5G health effects gains traction online",
        source: "Washington Post",
        date: "2024-01-13",
        category: "Technology",
        severity: "Medium",
        shares: "32.1K",
        status: "Misleading",
        description: "Unsubstantiated claims about wireless technology health risks."
      }
    ]
  };

  const currentData = fakeNewsData[selectedCountry as keyof typeof fakeNewsData] || [];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-500";
      case "High": return "bg-orange-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "Debunked":
      case "Completely False": 
        return "destructive";
      case "Scam Alert": 
        return "destructive";
      case "Misleading":
      case "Partially False": 
        return "secondary";
      case "Clarified": 
        return "outline";
      default: 
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Global Fake News Reports
          </h1>
          <p className="text-lg text-muted-foreground">
            Latest misinformation cases from around the world, tracked and verified by trusted sources
          </p>
        </div>

        {/* Country Filter */}
        <div className="mb-8 animate-scale-in">
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full sm:w-64">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {country.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Cases</p>
                  <p className="text-2xl font-bold">{currentData.length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Critical Cases</p>
                  <p className="text-2xl font-bold text-danger">
                    {currentData.filter(item => item.severity === "Critical").length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-danger" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Shares</p>
                  <p className="text-2xl font-bold">
                    {currentData.length > 0 ? Math.round(
                      currentData.reduce((acc, item) => acc + parseFloat(item.shares.replace('K', '')), 0) / currentData.length
                    ) : 0}K
                  </p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fake News List */}
        <div className="space-y-6">
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <Card 
                key={item.id} 
                className="animate-fade-in-up hover:shadow-medium transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">
                        {item.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <span>•</span>
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{item.shares} shares</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <div className="flex items-center gap-2">
                        <div 
                          className={`w-3 h-3 rounded-full ${getSeverityColor(item.severity)}`}
                          title={`${item.severity} severity`}
                        />
                        <span className="text-sm font-medium">{item.severity}</span>
                      </div>
                      <Badge variant={getStatusVariant(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {item.category}
                    </Badge>
                    
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="animate-fade-in">
              <CardContent className="p-12 text-center">
                <AlertCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No Recent Cases</h3>
                <p className="text-muted-foreground">
                  No fake news cases have been reported for this country in recent days.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Load More */}
        {currentData.length > 0 && (
          <div className="text-center mt-8 animate-fade-in">
            <Button variant="outline" size="lg">
              Load More Reports
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Global;