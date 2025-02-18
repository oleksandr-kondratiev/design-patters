// patterns
import { FactoryMethod } from "@/patterns/factory-method/factory-method";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const FactoryMethodPage = () => {
  return (
    <PatternWrapper
      title="Factory method pattern"
      subtitle="Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created."
      task={[
        "Define an abstract Shape class or interface that declares a method draw().",
        "Create concrete classes for each shape type (Circle, Square, Rectangle) that implement the Shape interface or inherit from the Shape class.",
        "Implement the draw() method in each concrete class to print a message like Drawing a Circle/Square/Rectangle.",
        "Create a ShapeFactory class that includes a method getShape(String shapeType). This method should take a string representing the shape type and return an instance of the appropriate concrete class",
        "In your main application, use the ShapeFactory to create and draw different shapes based on user input.",
      ]}
      realization={<FactoryMethod />}
      link="factory-method/factory-method.tsx"
    />
  );
};

export default FactoryMethodPage;
