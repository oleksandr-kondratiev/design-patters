// patterns
import { Singleton } from "@/patterns/singleton/singleton";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const SingletonPage = () => {
  return (
    <PatternWrapper
      title="Singleton pattern"
      subtitle="Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance."
      task={[
        "Define a Logger class that includes a method to log messages, and a field to store the log messages.",
        "Make the constructor of the Logger class private to prevent other classes from creating a new instance.",
        "In the Logger class, create a private static instance of Logger.",
        "Implement a public static method (often named getInstance()) that returns the single instance of Logger.",
        "In your application, use Logger.getInstance() to get the single Logger instance and log messages.",
      ]}
      realization={<Singleton />}
      link="singleton/singleton.tsx"
    />
  );
};

export default SingletonPage;
