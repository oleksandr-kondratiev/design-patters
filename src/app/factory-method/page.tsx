// patterns
import { FactoryMethod } from "@/patterns/factory-method/factory-method";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const FactoryMethodPage = () => {
  return (
    <PatternWrapper
      title="Factory method pattern"
      subtitle="In object oriented programming, the factory method pattern is a design pattern that uses factory methods to deal with the problem of creating objects without having to specify their exact class. Rather than by calling a constructor, this is done by calling a factory method to create an object."
      task={[
        "Define an abstract Shape class or interface that declares a method draw().",
        "Create concrete classes for each shape type (Circle, Square, Rectangle) that implement the Shape interface or inherit from the Shape class.",
        "Implement the draw() method in each concrete class to print a message like Drawing a Circle/Square/Rectangle.",
        "Create a ShapeFactory class that includes a method getShape(String shapeType). This method should take a string representing the shape type and return an instance of the appropriate concrete class",
        "In your main application, use the ShapeFactory to create and draw different shapes based on user input.",
      ]}
      realization={<FactoryMethod />}
      link="https://github.com/oleksandr-kondratiev/design-patters"
    />
  );
};

export default FactoryMethodPage;
