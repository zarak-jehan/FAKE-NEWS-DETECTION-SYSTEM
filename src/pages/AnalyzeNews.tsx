import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Shield, Zap, Clock } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const AnalyzeNews = () => {
  const [newsText, setNewsText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!newsText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis results
    const fakenessProbability = Math.random() * 100;
    const isFake = fakenessProbability > 60;
    
    const mockResults = {
      isFake,
      confidence: fakenessProbability,
      authenticity: 100 - fakenessProbability,
      analysisTime: "1.2s",
      keyFactors: [
        "Emotional language detected",
        "Missing credible sources", 
        "Unusual publication pattern",
        "Biased terminology usage"
      ],
      riskLevel: isFake ? "High" : "Low",
      recommendations: isFake 
        ? "Cross-reference with trusted sources before sharing"
        : "Appears to be from credible sources",
      sources: isFake ? 0 : Math.floor(Math.random() * 5) + 1
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const chartData = results ? [
    { name: 'Authentic', value: results.authenticity, color: '#22c55e' },
    { name: 'Suspicious', value: results.confidence, color: '#ef4444' }
  ] : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            News Authenticity Analyzer
          </h1>
          <p className="text-lg text-muted-foreground">
            Paste any news article or headline to get an instant AI-powered authenticity assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Enter News Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste the news article, headline, or text you want to verify..."
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                className="min-h-[200px] resize-none"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={!newsText.trim() || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Clock className="h-5 w-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Analyze Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="animate-pulse">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-primary animate-pulse-glow" />
                    <p className="text-lg font-medium">Analyzing content...</p>
                    <p className="text-sm text-muted-foreground">This may take a few seconds</p>
                  </div>
                </div>
              ) : results ? (
                <div className="space-y-6">
                  {/* Main Result */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold ${
                      results.isFake 
                        ? "bg-danger/10 text-danger border border-danger/20" 
                        : "bg-success/10 text-success border border-success/20"
                    }`}>
                      {results.isFake ? (
                        <AlertCircle className="h-5 w-5" />
                      ) : (
                        <CheckCircle className="h-5 w-5" />
                      )}
                      {results.isFake ? "Potentially Fake" : "Likely Authentic"}
                    </div>
                  </div>

                  {/* Confidence Chart */}
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Analysis Details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Confidence:</span>
                        <div className="font-semibold">{results.confidence.toFixed(1)}%</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Analysis Time:</span>
                        <div className="font-semibold">{results.analysisTime}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Risk Level:</span>
                        <Badge variant={results.isFake ? "destructive" : "default"}>
                          {results.riskLevel}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Sources Found:</span>
                        <div className="font-semibold">{results.sources}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Factors:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        {results.keyFactors.map((factor: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-2">Recommendation:</h4>
                      <p className="text-sm">{results.recommendations}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Shield className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Enter news content and click analyze to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle>Tips for Better Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-semibold">Include full context</h4>
                  <p className="text-muted-foreground">Paste the complete article for better accuracy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-semibold">Check multiple sources</h4>
                  <p className="text-muted-foreground">Cross-reference with trusted news outlets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-semibold">Verify before sharing</h4>
                  <p className="text-muted-foreground">Always confirm with reliable sources</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyzeNews;