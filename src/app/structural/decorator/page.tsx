// patterns
import { Decorator } from "@/patterns/decorator/decorator";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const DecoratorPage = () => {
  return (
    <PatternWrapper
      title="Decorator pattern"
      subtitle="Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors."
      task={[
        "Define an abstract Pizza class that includes methods to get the description and the cost of the pizza.",
        "Implement a BasicPizza class that extends the Pizza class and represents a pizza without any toppings.",
        "Define an abstract PizzaDecorator class that also extends the Pizza class and has a Pizza object.",
        "Implement concrete PizzaDecorator subclasses for each type of topping (like CheeseTopping, PepperoniTopping). These classes should modify the description and cost methods to include their topping.",
        "In your main program, create a BasicPizza object and wrap it with various PizzaDecorator objects to create a pizza with multiple toppings.",
      ]}
      realization={<Decorator />}
      link="decorator/decorator.tsx"
    />
  );
};

export default DecoratorPage;
