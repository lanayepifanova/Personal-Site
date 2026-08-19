import { useEffect, useState } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Engineering from "./pages/Engineering";
import Communities from "./pages/Communities";
import TravelDestination from "./pages/TravelDestination";
import Media from "./pages/Media";
import Layout from "./components/Layout";
import ExploreItem from "./pages/ExploreItem";

function Routes({ location }: { location?: string }) {
  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route path="/engineering" component={Engineering} />
      <Route path="/communities" component={Communities} />
      <Route path="/media" component={Media} />
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
