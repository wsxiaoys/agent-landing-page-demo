import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Rocket, Zap, Gem, CheckCircle, Mail, Quote, Star, Workflow, Target, Users, Lightbulb, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link'; // Import Link

export default function Home() {
  // Define Futurist Palette Classes (Adjusted for Readability)
  const colors = {
    background: "bg-slate-950", // Deep dark blue/grey
    foreground: "text-slate-100", // Off-white (Main text, Titles)
    secondaryText: "text-slate-300", // Brighter grey for descriptions/paragraphs
    mutedForeground: "text-slate-400", // Grey for less critical text (e.g., footer, placeholders, testimonial roles)
    muted: "bg-slate-800", // Darker grey/blue section bg
    primary: "text-cyan-400", // Accent color (Text)
    primaryVibrant: "text-cyan-300", // Slightly brighter accent if needed
    primaryBg: "bg-cyan-500", // Accent color (Background)
    primaryBgHover: "hover:bg-cyan-400",
    primaryBorder: "border-cyan-500",
    cardBg: "bg-slate-900", // Slightly lighter than main bg
    cardBorder: "border-slate-700",
    cardHoverBorder: "hover:border-cyan-600",
    gradientFrom: "from-blue-900",
    gradientTo: "to-cyan-900",
    headerBg: "bg-slate-950/80", // Semi-transparent header
    inputBg: "bg-slate-800", // Input background
    inputBorder: "border-slate-600",
    placeholderText: "placeholder:text-slate-500", // Specific placeholder color
    starFill: "fill-cyan-400",
    starStroke: "stroke-cyan-600",
    starMutedFill: "fill-slate-700",
  };

  return (
    <div className={`flex flex-col min-h-dvh ${colors.background} ${colors.foreground}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b ${colors.cardBorder} ${colors.headerBg} backdrop-blur supports-[backdrop-filter]:bg-slate-950/60`}>
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            {/* Use Link component for internal navigation */}
            <Link className="mx-6 flex items-center space-x-2" href="/">
              <Rocket className={`h-6 w-6 ${colors.primary}`} />
              <span className="hidden font-bold sm:inline-block">
                Pochi
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {/* Using secondaryText for nav links for better visibility */}
              <a className={`transition-colors hover:text-slate-100 ${colors.secondaryText}`} href="#features">
                Features
              </a>
              <a className={`transition-colors hover:text-slate-100 ${colors.secondaryText}`} href="#how-it-works">
                How it Works
              </a>
              <a className={`transition-colors hover:text-slate-100 ${colors.secondaryText}`} href="#testimonials">
                Testimonials
              </a>
              <a className={`transition-colors hover:text-slate-100 ${colors.secondaryText}`} href="#waitlist">
                Waitlist
              </a>
            </nav>
          </div>
          {/* Mobile nav placeholder */}
          <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
            {/* Add mobile menu button here if needed */}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:py-32 lg:py-40">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Wasting Time. Start <span className={`${colors.primaryVibrant}`}>Achieving</span> with Pochi.
          </h1>
          {/* Using secondaryText for hero paragraph */}
          <p className={`mt-6 max-w-3xl text-lg ${colors.secondaryText} md:text-xl`}>
            Pochi is the all-in-one productivity suite that automates your grunt work, surfaces critical insights, and connects your tools, so you can focus on what truly matters.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className={`gap-2 ${colors.primaryBg} text-slate-100 font-semibold ${colors.primaryBgHover}`} asChild>
              <a href="#waitlist"><Mail className="h-4 w-4"/> Join the Waitlist</a>
            </Button>
            <Button size="lg" variant="outline" className={`${colors.primaryBorder}  text-slate-950 hover:bg-cyan-500/10 font-semibold`} asChild>
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section id="features" className={`w-full ${colors.muted}/60 py-16 md:py-24`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className={`text-base font-semibold uppercase tracking-wide ${colors.primary}`}>
                Core Features
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Unlock Peak Productivity
              </h2>
              {/* Using secondaryText for section description */}
              <p className={`mt-4 text-lg ${colors.secondaryText}`}>
                Pochi combines powerful automation, intelligent analysis, and seamless connectivity.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[ // Array for features
                { title: "Drag & Drop Automation", icon: Zap, desc: "Build complex workflows visually. Connect apps, trigger actions based on events, and eliminate manual tasks without writing a single line of code." },
                { title: "AI-Powered Insights", icon: Lightbulb, desc: "Don't just collect data, understand it. Pochi analyzes your activities, identifies bottlenecks, and suggests optimizations for better performance." },
                { title: "Unified Dashboard", icon: BarChart3, desc: "See the big picture. Monitor key metrics, track progress across projects, and manage all your connected tools from one central hub." },
                { title: "Extensive Integrations", icon: CheckCircle, desc: "Works with the tools you already love. Connect Slack, Google Workspace, Salesforce, Jira, and hundreds more with ease." },
                { title: "Customizable Reports", icon: Gem, desc: "Generate detailed reports tailored to your needs. Share progress with stakeholders and demonstrate the impact of your work effortlessly." },
                { title: "Team Collaboration", icon: Users, desc: "Work better together. Share workflows, assign tasks, and maintain visibility across your entire team's projects and activities." },
              ].map((feature, index) => (
                <Card key={index} className={`flex flex-col ${colors.cardBg} ${colors.cardBorder} ${colors.cardHoverBorder} transition-colors duration-300 shadow-lg hover:shadow-cyan-500/10`}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className={`text-lg font-semibold ${colors.foreground}`}>{feature.title}</CardTitle>
                    <feature.icon className={`h-6 w-6 ${colors.primary}`} />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Using secondaryText for card description */}
                    <CardDescription className={`${colors.secondaryText}`}>{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get Started in 3 Simple Steps
              </h2>
              {/* Using secondaryText for section description */}
              <p className={`mt-4 text-lg ${colors.secondaryText}`}>
                Pochi is designed for simplicity and power. Start automating and analyzing in minutes.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colors.primaryBg}/10 ${colors.primary}`}>
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>1. Connect Your Tools</h3>
                {/* Using secondaryText for step description */}
                <p className={`${colors.secondaryText}`}>
                  Securely link your favorite apps and services to Pochi using our guided setup process.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colors.primaryBg}/10 ${colors.primary}`}>
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>2. Build Your Workflows</h3>
                {/* Using secondaryText for step description */}
                <p className={`${colors.secondaryText}`}>
                  Use the visual editor to define triggers and actions, automating tasks across your connected apps.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colors.primaryBg}/10 ${colors.primary}`}>
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>3. Gain Insights</h3>
                {/* Using secondaryText for step description */}
                <p className={`${colors.secondaryText}`}>
                  Monitor your automations and analyze performance data through your personalized dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`w-full ${colors.muted}/60 py-16 md:py-24`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don&apos;t Just Take Our Word For It {/* Escaped ' */}
              </h2>
              {/* Using secondaryText for section description */}
              <p className={`mt-4 text-lg ${colors.secondaryText}`}>
                See how teams like yours are transforming their work with Pochi.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial Cards ... */}
              <Card className={`flex flex-col justify-between ${colors.cardBg} ${colors.cardBorder} shadow-lg`}>
                <CardContent className="pt-6">
                  <Quote className={`${colors.mutedForeground} h-8 w-8 mb-4`} />
                  {/* Using secondaryText for quote */}
                  <p className={`italic ${colors.foreground}`}>
                    &quot;Pochi has revolutionized how our team collaborates. The automation features saved us countless hours, allowing us to focus on innovation.&quot; {/* Escaped " */}
                  </p>
                </CardContent>
                <CardHeader className={`flex flex-row items-center gap-4 pt-4 border-t ${colors.cardBorder} mt-4`}>
                  <Avatar className={`${colors.primaryBg}/20 ${colors.primary}`}>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className={`text-base font-semibold ${colors.foreground}`}>Jane Doe</CardTitle>
                    {/* Using mutedForeground for role - less emphasis needed */}
                    <CardDescription className={`${colors.mutedForeground}`}>CTO, Innovate Solutions</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${colors.starFill} ${colors.primary}`} />)}
                  </div>
                </CardHeader>
              </Card>
              <Card className={`flex flex-col justify-between ${colors.cardBg} ${colors.cardBorder} shadow-lg`}>
                <CardContent className="pt-6">
                  <Quote className={`${colors.mutedForeground} h-8 w-8 mb-4`} />
                  {/* Using secondaryText for quote */}
                  <p className={`italic ${colors.foreground}`}>
                    &quot;The insights Pochi provides are game-changing. We&apos;re making data-driven decisions faster than ever before. Highly recommended!&quot; {/* Escaped " and ' */}
                  </p>
                </CardContent>
                <CardHeader className={`flex flex-row items-center gap-4 pt-4 border-t ${colors.cardBorder} mt-4`}>
                   <Avatar className={`${colors.primaryBg}/20 ${colors.primary}`}>
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className={`text-base font-semibold ${colors.foreground}`}>Mark Smith</CardTitle>
                    {/* Using mutedForeground for role */}
                    <CardDescription className={`${colors.mutedForeground}`}>Head of Analytics, DataCorp</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => <Star key={i} className={`h-4 w-4 ${colors.starFill} ${colors.primary}`} />)}
                    <Star className={`h-4 w-4 ${colors.starMutedFill} ${colors.starStroke}`} />
                  </div>
                </CardHeader>
              </Card>
              <Card className={`flex flex-col justify-between ${colors.cardBg} ${colors.cardBorder} shadow-lg`}>
                <CardContent className="pt-6">
                  <Quote className={`${colors.mutedForeground} h-8 w-8 mb-4`} />
                  {/* Using secondaryText for quote */}
                  <p className={`italic ${colors.foreground}`}>
                    &quot;Finally, a tool that integrates with everything we use. Pochi simplified our tech stack and improved our workflow efficiency significantly.&quot; {/* Escaped " */}
                  </p>
                </CardContent>
                <CardHeader className={`flex flex-row items-center gap-4 pt-4 border-t ${colors.cardBorder} mt-4`}>
                   <Avatar className={`${colors.primaryBg}/20 ${colors.primary}`}>
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className={`text-base font-semibold ${colors.foreground}`}>Alice Lee</CardTitle>
                    {/* Using mutedForeground for role */}
                    <CardDescription className={`${colors.mutedForeground}`}>Project Manager, Creative Agency</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${colors.starFill} ${colors.primary}`} />)}
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Who is it For? Section */}
        <section id="who-is-it-for" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for Teams That Value Efficiency
              </h2>
              {/* Using secondaryText for section description */}
              <p className={`mt-4 text-lg ${colors.secondaryText}`}>
                Whether you&apos;re a startup, a growing agency, or an enterprise department, Pochi scales with you. {/* Escaped ' */}
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className={`flex flex-col items-center text-center p-6 ${colors.cardBorder} border rounded-lg hover:shadow-lg ${colors.cardHoverBorder} transition-all duration-300`}>
                <Users className={`h-10 w-10 ${colors.primary} mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>Marketing Teams</h3>
                {/* Using secondaryText for description */}
                <p className={`${colors.secondaryText}`}>
                  Automate lead routing, social media posting, and campaign reporting.
                </p>
              </div>
              <div className={`flex flex-col items-center text-center p-6 ${colors.cardBorder} border rounded-lg hover:shadow-lg ${colors.cardHoverBorder} transition-all duration-300`}>
                <Target className={`h-10 w-10 ${colors.primary} mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>Sales Teams</h3>
                {/* Using secondaryText for description */}
                <p className={`${colors.secondaryText}`}>
                  Streamline CRM updates, follow-up sequences, and performance tracking.
                </p>
              </div>
              <div className={`flex flex-col items-center text-center p-6 ${colors.cardBorder} border rounded-lg hover:shadow-lg ${colors.cardHoverBorder} transition-all duration-300`}>
                <Zap className={`h-10 w-10 ${colors.primary} mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${colors.foreground}`}>Operations Teams</h3>
                {/* Using secondaryText for description */}
                <p className={`${colors.secondaryText}`}>
                  Optimize internal processes, data synchronization, and incident management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Registration Section */}
        <section id="waitlist" className={`w-full bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} py-16 md:py-24 text-slate-100`}>
          <div className="container mx-auto flex flex-col items-center px-4 text-center">
            <Mail className="mb-4 h-12 w-12" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Reclaim Your Time?
            </h2>
            {/* Using a slightly brighter text (slate-200) for waitlist description */}
            <p className="mt-4 max-w-xl text-lg text-slate-200">
              Join the Pochi waitlist today for exclusive early access, special launch discounts, and productivity tips delivered to your inbox.
            </p>
            <form className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your best email"
                className={`flex-grow ${colors.inputBg} ${colors.foreground} ${colors.placeholderText} ${colors.inputBorder} border rounded-md focus:border-cyan-500 focus:ring-cyan-500`}
                aria-label="Email for waitlist"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className={`shrink-0 ${colors.primaryBg} text-slate-950 font-semibold ${colors.primaryBgHover}`}>
                Get Early Access
              </Button>
            </form>
            {/* Using mutedForeground for the privacy note */}
            <p className={`mt-4 text-sm ${colors.mutedForeground}`}>
              Be the first to know. No spam, ever.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t ${colors.cardBorder} py-8 ${colors.muted}/40`}>
        <div className={`container mx-auto flex flex-col items-center justify-between px-4 text-center text-sm ${colors.mutedForeground} sm:flex-row`}>
          <div className="flex items-center gap-2">
             <Rocket className="h-4 w-4" />
             <span>&copy; {new Date().getFullYear()} Pochi Inc. All rights reserved.</span>
          </div>
          <nav className="mt-4 flex gap-4 sm:mt-0">
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
