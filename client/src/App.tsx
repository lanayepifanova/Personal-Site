import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home, { CommunitiesPage, EngineeringPage, MediaPage } from "./pages/Home";
import TravelDestination from "./pages/TravelDestination";
import Layout from "./components/Layout";
import ExploreItem from "./pages/ExploreItem";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/building">{() => <Redirect to="/" replace />}</Route>
      <Route path="/book">{() => <Redirect to="/" replace />}</Route>
      <Route path="/engineering" component={EngineeringPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/communities" component={CommunitiesPage} />
      <Route path="/explore/:slug" component={ExploreItem} />
      <Route path="/communities/travel/:city" component={TravelDestination} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Router() {
  return (
    <Layout>
      <Routes />
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
