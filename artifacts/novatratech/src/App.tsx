import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import Academy from "@/pages/Academy";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import AIAutomation from "@/pages/solutions/AIAutomation";
import WebDevelopment from "@/pages/solutions/WebDevelopment";
import SaaSDevelopment from "@/pages/solutions/SaaSDevelopment";
import AppDevelopment from "@/pages/solutions/AppDevelopment";
import GrowthFunnels from "@/pages/solutions/GrowthFunnels";
import DigitalMarketing from "@/pages/solutions/DigitalMarketing";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function ScrollReset() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollReset />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/solutions/ai-automation" component={AIAutomation} />
        <Route path="/solutions/web-development" component={WebDevelopment} />
        <Route path="/solutions/saas-development" component={SaaSDevelopment} />
        <Route path="/solutions/app-development" component={AppDevelopment} />
        <Route path="/solutions/growth-funnels" component={GrowthFunnels} />
        <Route path="/solutions/digital-marketing" component={DigitalMarketing} />
        <Route path="/products" component={Products} />
        <Route path="/academy" component={Academy} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <ScrollToTop />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
