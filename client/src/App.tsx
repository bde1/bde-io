import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Focus from "./pages/Focus";
import Approach from "./pages/Approach";
import Office from "./pages/Office";
import Insights from "./pages/Insights";
import TheGeneralistEra from "@/pages/insights/TheGeneralistEra";
import TheOnlyThingThatMatters from "@/pages/insights/TheOnlyThingThatMatters";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/focus" component={Focus} />
      <Route path="/approach" component={Approach} />
      <Route path="/office" component={Office} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/the-generalist-era-is-here" component={TheGeneralistEra} />
      <Route path="/insights/the-only-thing-that-matters" component={TheOnlyThingThatMatters} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "BDE Ventures | Strategic Advisory & Investment";
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
