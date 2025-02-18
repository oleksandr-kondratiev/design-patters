"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  attach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      this.observers.push(observer);
      toast.success("Observer Added", {
        description: "New display connected to weather station",
      });
    }
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
      toast.info("Observer Removed", {
        description: "Display disconnected from weather station",
      });
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }
}

class CurrentConditionsDisplay implements Observer {
  update(temperature: number, humidity: number, _pressure: number): void {
    toast.info("Current Conditions Display", {
      description: `Temperature: ${temperature}°C, Humidity: ${humidity}%`,
    });
  }
}

class StatisticsDisplay implements Observer {
  private temperatures: number[] = [];

  update(temperature: number, _humidity: number, _pressure: number): void {
    this.temperatures.push(temperature);
    const avg =
      this.temperatures.reduce((a, b) => a + b) / this.temperatures.length;
    const max = Math.max(...this.temperatures);
    const min = Math.min(...this.temperatures);

    toast.info("Statistics Display", {
      description: `Avg: ${avg.toFixed(1)}°C, Max: ${max}°C, Min: ${min}°C`,
    });
  }
}

class ForecastDisplay implements Observer {
  private lastPressure: number = 0;

  update(_temperature: number, _humidity: number, pressure: number): void {
    const forecast =
      pressure > this.lastPressure ? "Improving" : "Getting Worse";
    this.lastPressure = pressure;

    toast.info("Forecast Display", {
      description: `Forecast: ${forecast} (Pressure: ${pressure}hPa)`,
    });
  }
}

export const Observer = () => {
  const [weatherData] = useState(() => new WeatherData());
  const [displays] = useState(() => ({
    current: new CurrentConditionsDisplay(),
    statistics: new StatisticsDisplay(),
    forecast: new ForecastDisplay(),
  }));
  const [activeDisplays, setActiveDisplays] = useState<Set<string>>(new Set());

  const toggleDisplay = (name: string, display: Observer) => {
    setActiveDisplays((prev) => {
      const newDisplays = new Set(prev);

      if (newDisplays.has(name)) {
        weatherData.detach(display);
        newDisplays.delete(name);
      } else {
        weatherData.attach(display);
        newDisplays.add(name);
      }

      return newDisplays;
    });
  };

  const updateWeather = () => {
    const temperature = Math.round(Math.random() * 30);
    const humidity = Math.round(Math.random() * 100);
    const pressure = Math.round(980 + Math.random() * 40);

    weatherData.setMeasurements(temperature, humidity, pressure);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Button
            variant={activeDisplays.has("current") ? "default" : "outline"}
            onClick={() => toggleDisplay("current", displays.current)}
          >
            Current Conditions
          </Button>
          <Button
            variant={activeDisplays.has("statistics") ? "default" : "outline"}
            onClick={() => toggleDisplay("statistics", displays.statistics)}
          >
            Statistics
          </Button>
          <Button
            variant={activeDisplays.has("forecast") ? "default" : "outline"}
            onClick={() => toggleDisplay("forecast", displays.forecast)}
          >
            Forecast
          </Button>
        </div>
        <Button
          className="w-full"
          onClick={updateWeather}
          disabled={activeDisplays.size === 0}
        >
          Update Weather Data
        </Button>
      </div>
    </div>
  );
};
