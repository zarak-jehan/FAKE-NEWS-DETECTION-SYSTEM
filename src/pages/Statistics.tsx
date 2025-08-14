import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, Globe, Calendar, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCountry, setSelectedCountry] = useState("global");

  // Mock data for different visualizations
  const globalTrends = [
    { month: "Jan", cases: 1200, verified: 890, debunked: 310 },
    { month: "Feb", cases: 1350, verified: 920, debunked: 430 },
    { month: "Mar", cases: 1580, verified: 1100, debunked: 480 },
    { month: "Apr", cases: 1420, verified: 980, debunked: 440 },
    { month: "May", cases: 1680, verified: 1150, debunked: 530 },
    { month: "Jun", cases: 1950, verified: 1320, debunked: 630 },
  ];

  const pakistanData = [
    { month: "Jan", cases: 85, verified: 58, debunked: 27 },
    { month: "Feb", cases: 92, verified: 65, debunked: 27 },
    { month: "Mar", cases: 108, verified: 73, debunked: 35 },
    { month: "Apr", cases: 96, verified: 67, debunked: 29 },
    { month: "May", cases: 115, verified: 79, debunked: 36 },
    { month: "Jun", cases: 128, verified: 87, debunked: 41 },
  ];

  const categoryData = [
    { name: 'Politics', value: 35, color: '#3b82f6' },
    { name: 'Health', value: 28, color: '#10b981' },
    { name: 'Technology', value: 15, color: '#f59e0b' },
    { name: 'Social Media', value: 12, color: '#ef4444' },
    { name: 'Other', value: 10, color: '#8b5cf6' }
  ];

  const topCountries = [
    { country: "United States", cases: 2450, trend: "up" },
    { country: "India", cases: 1890, trend: "down" },
    { country: "Brazil", cases: 1320, trend: "up" },
    { country: "Pakistan", cases: 624, trend: "up" },
    { country: "Nigeria", cases: 580, trend: "down" },
  ];

  const currentData = selectedCountry === "pakistan" ? pakistanData : globalTrends;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Misinformation Statistics
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time data and trends on fake news detection and media analysis
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-scale-in">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="pakistan">Pakistan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Cases</p>
                  <p className="text-2xl font-bold">8,180</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-success">+12%</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <AlertTriangle className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                  <p className="text-2xl font-bold">94.7%</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-success">+2.1%</span>
                    <span className="text-muted-foreground">improvement</span>
                  </div>
                </div>
                <Globe className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Countries Covered</p>
                  <p className="text-2xl font-bold">25</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-success">+3</span>
                    <span className="text-muted-foreground">new regions</span>
                  </div>
                </div>
                <Users className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-2xl font-bold">1.2s</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingDown className="h-4 w-4 text-success" />
                    <span className="text-success">-0.3s</span>
                    <span className="text-muted-foreground">faster</span>
                  </div>
                </div>
                <Calendar className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Trend Chart */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>
                {selectedCountry === "pakistan" ? "Pakistan" : "Global"} Misinformation Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="cases" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="debunked" 
                      stroke="hsl(var(--danger))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--danger))", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle>Misinformation by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Country Rankings */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Top Countries by Misinformation Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-muted-foreground">#{index + 1}</div>
                    <div>
                      <h4 className="font-semibold">{country.country}</h4>
                      <p className="text-sm text-muted-foreground">{country.cases} cases reported</p>
                    </div>
                  </div>
                  <Badge variant={country.trend === "up" ? "destructive" : "default"}>
                    {country.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {country.trend === "up" ? "Rising" : "Declining"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;