// patterns
import { Facade } from "@/patterns/facade/facade";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const FacadePage = () => {
  return (
    <PatternWrapper
      title="Facade pattern"
      subtitle="Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes."
      task={[
        "Define separate classes for each subsystem, e.g., Light, TemperatureControl, SecuritySystem, each with its own set of methods.",
        "Implement a HomeAutomationFacade class that aggregates all these subsystems and provides simplified methods to control them, such as activateSecurity(), setTemperature(), turnOnLights(), etc. Each of these methods, in turn, calls the corresponding methods in the subsystems.",
        "In your client code, instead of dealing with each subsystem separately, use the HomeAutomationFacade to perform operations.",
      ]}
      realization={<Facade />}
      link="facade/facade.tsx"
    />
  );
};

export default FacadePage;
