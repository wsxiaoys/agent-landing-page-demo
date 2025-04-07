import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket, Zap, Gem, CheckCircle, Mail, Quote, Star, Workflow, Target, Users, Lightbulb, BarChart3, Settings } from 'lucide-react'; // Added more icons

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">
                Pochi
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">
                Features
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#how-it-works">
                How it Works
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">
                Testimonials
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#waitlist">
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
            Stop <span className="text-primary">Wasting Time</span>. Start <span className="text-primary">Achieving</span> with Pochi.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Pochi is the all-in-one productivity suite that automates your grunt work, surfaces critical insights, and connects your tools, so you can focus on what truly matters.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="#waitlist"><Mail className="h-4 w-4"/> Join the Waitlist</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section id="features" className="w-full bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base font-semibold uppercase tracking-wide text-primary">
                Core Features
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Unlock Peak Productivity
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pochi combines powerful automation, intelligent analysis, and seamless connectivity.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Drag & Drop Automation</CardTitle>
                  <Zap className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Build complex workflows visually. Connect apps, trigger actions based on events, and eliminate manual tasks without writing a single line of code.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">AI-Powered Insights</CardTitle>
                  <Lightbulb className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Don't just collect data, understand it. Pochi analyzes your activities, identifies bottlenecks, and suggests optimizations for better performance.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Unified Dashboard</CardTitle>
                  <BarChart3 className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    See the big picture. Monitor key metrics, track progress across projects, and manage all your connected tools from one central hub.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Extensive Integrations</CardTitle>
                  <CheckCircle className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Works with the tools you already love. Connect Slack, Google Workspace, Salesforce, Jira, and hundreds more with ease.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Customizable Reports</CardTitle>
                  <Gem className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Generate detailed reports tailored to your needs. Share progress with stakeholders and demonstrate the impact of your work effortlessly.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Team Collaboration</CardTitle>
                  <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>
                    Work better together. Share workflows, assign tasks, and maintain visibility across your entire team's projects and activities.
                  </CardDescription>
                </CardContent>
              </Card>
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
              <p className="mt-4 text-lg text-muted-foreground">
                Pochi is designed for simplicity and power. Start automating and analyzing in minutes.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Connect Your Tools</h3>
                <p className="text-muted-foreground">
                  Securely link your favorite apps and services to Pochi using our guided setup process.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Build Your Workflows</h3>
                <p className="text-muted-foreground">
                  Use the visual editor to define triggers and actions, automating tasks across your connected apps.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Gain Insights</h3>
                <p className="text-muted-foreground">
                  Monitor your automations and analyze performance data through your personalized dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't Just Take Our Word For It
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how teams like yours are transforming their work with Pochi.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial Cards ... */}
              <Card className="flex flex-col justify-between bg-background shadow-lg">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
                  <p className="italic text-muted-foreground">
                    "Pochi has revolutionized how our team collaborates. The automation features saved us countless hours, allowing us to focus on innovation."
                  </p>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-4 border-t mt-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">Jane Doe</CardTitle>
                    <CardDescription>CTO, Innovate Solutions</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-between bg-background shadow-lg">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
                  <p className="italic text-muted-foreground">
                    "The insights Pochi provides are game-changing. We're making data-driven decisions faster than ever before. Highly recommended!"
                  </p>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-4 border-t mt-4">
                  <Avatar>
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">Mark Smith</CardTitle>
                    <CardDescription>Head of Analytics, DataCorp</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(4)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                    <Star className="h-4 w-4 fill-muted stroke-primary" />
                  </div>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-between bg-background shadow-lg">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
                  <p className="italic text-muted-foreground">
                    "Finally, a tool that integrates with everything we use. Pochi simplified our tech stack and improved our workflow efficiency significantly."
                  </p>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-4 border-t mt-4">
                  <Avatar>
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">Alice Lee</CardTitle>
                    <CardDescription>Project Manager, Creative Agency</CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
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
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you're a startup, a growing agency, or an enterprise department, Pochi scales with you.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Marketing Teams</h3>
                <p className="text-muted-foreground">
                  Automate lead routing, social media posting, and campaign reporting.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sales Teams</h3>
                <p className="text-muted-foreground">
                  Streamline CRM updates, follow-up sequences, and performance tracking.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Operations Teams</h3>
                <p className="text-muted-foreground">
                  Optimize internal processes, data synchronization, and incident management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Registration Section */}
        <section id="waitlist" className="w-full bg-gradient-to-r from-primary/80 to-primary py-16 md:py-24 text-primary-foreground">
          <div className="container mx-auto flex flex-col items-center px-4 text-center">
            <Mail className="mb-4 h-12 w-12" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Reclaim Your Time?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/90">
              Join the Pochi waitlist today for exclusive early access, special launch discounts, and productivity tips delivered to your inbox.
            </p>
            <form className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your best email"
                className="flex-grow text-foreground placeholder:text-muted-foreground"
                aria-label="Email for waitlist"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className="shrink-0">
                Get Early Access
              </Button>
            </form>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Be the first to know. No spam, ever.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 text-center text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
             <Rocket className="h-4 w-4" />
             <span>&copy; {new Date().getFullYear()} Pochi Inc. All rights reserved.</span>
          </div>
          <nav className="mt-4 flex gap-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
