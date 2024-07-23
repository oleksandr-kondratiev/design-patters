// patterns
import { Builder } from "@/patterns/builder/builder";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const BuilderPage = () => {
  return (
    <PatternWrapper
      title="Builder pattern"
      subtitle="Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code."
      task={[
        "Define a Meal class that includes fields for the main course, side, and drink.",
        "Create a MealBuilder interface that declares methods for setting the main course, side, and drink, and for building the final Meal.",
        "Create concrete builder classes (e.g., BurgerMealBuilder, PizzaMealBuilder) that implement the MealBuilder interface. These classes should define the specific main course, side, and drink for each type of meal.",
        "Create a MealDirector class that takes a MealBuilder as an argument and calls its methods to create a meal.",
        "In your main application, use the MealDirector and the concrete builder classes to create different types of meals.",
      ]}
      realization={<Builder />}
      link="builder/builder.tsx"
    />
  );
};

export default BuilderPage;
