"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

interface RouteStrategy {
  calculateRoute(from: string, to: string): void;
}

class FastestRouteStrategy implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    toast.info("Fastest Route", {
      description: `Calculating fastest route from ${from} to ${to} prioritizing highways and speed limits.`,
    });
  }
}

class ShortestRouteStrategy implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    toast.success("Shortest Route", {
      description: `Calculating shortest route from ${from} to ${to} based on direct distance.`,
    });
  }
}

class ScenicRouteStrategy implements RouteStrategy {
  calculateRoute(from: string, to: string): void {
    toast.warning("Scenic Route", {
      description: `Calculating scenic route from ${from} to ${to} including landmarks and nature views.`,
    });
  }
}

class NavigationApp {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  calculateRoute(from: string, to: string): void {
    this.strategy.calculateRoute(from, to);
  }
}

export const Strategy = () => {
  const [navigationApp] = useState(
    () => new NavigationApp(new FastestRouteStrategy())
  );
  const [currentStrategy, setCurrentStrategy] = useState("fastest");

  const handleStrategyChange = (strategyType: string) => () => {
    let newStrategy: RouteStrategy;

    switch (strategyType) {
      case "fastest":
        newStrategy = new FastestRouteStrategy();
        break;
      case "shortest":
        newStrategy = new ShortestRouteStrategy();
        break;
      case "scenic":
        newStrategy = new ScenicRouteStrategy();
        break;
      default:
        newStrategy = new FastestRouteStrategy();
    }

    navigationApp.setStrategy(newStrategy);
    setCurrentStrategy(strategyType);
  };

  const calculateRoute = () => {
    navigationApp.calculateRoute("Ivano-Frankivsk", "Kharkiv");
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Button
            variant={currentStrategy === "fastest" ? "default" : "outline"}
            onClick={handleStrategyChange("fastest")}
          >
            Fastest Route
          </Button>
          <Button
            variant={currentStrategy === "shortest" ? "default" : "outline"}
            onClick={handleStrategyChange("shortest")}
          >
            Shortest Route
          </Button>
          <Button
            variant={currentStrategy === "scenic" ? "default" : "outline"}
            onClick={handleStrategyChange("scenic")}
          >
            Scenic Route
          </Button>
        </div>
        <Button className="w-full" onClick={calculateRoute}>
          Calculate Route
        </Button>
      </div>
    </div>
  );
};
