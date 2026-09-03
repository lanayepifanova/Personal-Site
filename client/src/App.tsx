import { useEffect, useState } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TravelDestination from "./pages/TravelDestination";
import Layout from "./components/Layout";
import ExploreItem from "./pages/ExploreItem";

// The three former pages are now bands on the home page, so their old URLs
// hand off to the matching anchor.
function SectionRedirect({ id }: { id: string }) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.location.hash = id;
    setLocation("/", { replace: true });
  }, [id, setLocation]);

  return null;
}

function Routes({ location }: { location?: string }) {
  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route path="/engineering">{() => <SectionRedirect id="engineering" />}</Route>
      <Route path="/communities">{() => <SectionRedirect id="communities" />}</Route>
      <Route path="/media">{() => <SectionRedirect id="media" />}</Route>
      <Route path="/explore/:slug" component={ExploreItem} />
      <Route path="/communities/travel/:city" component={TravelDestination} />
      <Route component={NotFound} />
    </Switch>
  );
}

function PageTransition() {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayLocation(location);
      setIsTransitioning(false);
      return;
    }

    if (location === displayLocation) return;

    setIsTransitioning(true);
    const timeout = window.setTimeout(() => {
      setDisplayLocation(location);
      setIsTransitioning(false);
    }, 240);

    return () => window.clearTimeout(timeout);
  }, [location, displayLocation, isMobile]);

  if (isMobile) {
    return (
      <div className="page-stack">
        <div className="page-layer page-layer-enter">
          <div className="page-contents">
            <Routes location={location} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <div className={isTransitioning ? "page-layer page-layer-exit" : "page-layer page-layer-enter"}>
        <div className="page-contents">
          <Routes location={displayLocation} />
        </div>
      </div>
      {isTransitioning && (
        <div className="page-layer page-layer-enter page-layer-overlay">
          <div className="page-contents">
            <Routes location={location} />
          </div>
        </div>
      )}
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <PageTransition />
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
