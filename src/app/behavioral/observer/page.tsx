// patterns
import { Observer } from "@/patterns/observer/observer";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const ObserverPage = () => {
  return (
    <PatternWrapper
      title="Observer pattern"
      subtitle="Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing."
      task={[
        "Define a Subject interface that includes methods for registering observers, removing observers, and notifying observers of changes.",
        "Implement a WeatherData class that implements the Subject interface. It should store the temperature, humidity, and pressure and should notify all observers when the measurements are updated.",
        "Define an Observer interface that includes a method to update the observer with the new measurements.",
        "Implement multiple display elements as observers (e.g., CurrentConditionsDisplay, StatisticsDisplay, ForecastDisplay). Each display should update its display when it receives the new measurements.",
        "In your weather monitoring system, create a WeatherData object and multiple display objects. Register each display with the WeatherData object, and they will be updated automatically whenever the weather data changes.",
      ]}
      realization={<Observer />}
      link="observer/observer.tsx"
    />
  );
};

export default ObserverPage;
