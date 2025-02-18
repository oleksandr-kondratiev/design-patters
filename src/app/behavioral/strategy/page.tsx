// patterns
import { Strategy } from "@/patterns/strategy/strategy";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const StrategyPage = () => {
  return (
    <PatternWrapper
      title="Strategy pattern"
      subtitle="Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."
      task={[
        "Define a RouteStrategy interface that includes a method to calculate a route.",
        "Implement concrete RouteStrategy classes for each strategy (e.g., FastestRouteStrategy, ShortestRouteStrategy, ScenicRouteStrategy). Each strategy should implement the route calculation differently.",
        "Implement a NavigationApp class that has a reference to a RouteStrategy object. It should use the strategy to calculate the route.",
        "In your navigation application, create a NavigationApp object and RouteStrategy objects for each strategy. The NavigationApp should change its strategy according to the user's preference.",
      ]}
      realization={<Strategy />}
      link="strategy/strategy.tsx"
    />
  );
};

export default StrategyPage;
