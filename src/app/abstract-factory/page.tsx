// patterns
import { AbstractFactory } from "@/patterns/abstract-factory/abstract-factory";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const AbstractFactoryPage = () => {
  return (
    <PatternWrapper
      title="Abstract factory pattern"
      subtitle="Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes."
      task={[
        "Define an abstract UIElement interface (or abstract class) that declares methods like render().",
        "Define concrete classes for each type of UI element (Button, Checkbox, Textbox) for each platform (Windows, MacOS, Linux). These classes should implement the UIElement interface and provide their own implementations of the render() method.",
        "Define an abstract UIFactory interface (or abstract class) that declares methods like createButton(), createCheckbox(), and createTextbox().",
        "Define concrete factories for each platform (WindowsFactory, MacOSFactory, LinuxFactory). These factories should implement the UIFactory interface and provide their own implementations of the createButton(), createCheckbox(), and createTextbox() methods. Each method should return an instance of the appropriate UI element class for that platform.",
        "In your main application, use the appropriate factory to create and render the UI elements based on the user's platform.",
      ]}
      realization={<AbstractFactory />}
      link="abstract-factory/abstract-factory.tsx"
    />
  );
};

export default AbstractFactoryPage;
