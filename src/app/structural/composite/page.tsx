// patterns
import { Composite } from "@/patterns/composite/composite";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const CompositePage = () => {
  return (
    <PatternWrapper
      title="Composite pattern"
      subtitle="Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects."
      task={[
        "Define an abstract FileSystemComponent class that declares methods like getSize(), getName(), and print().",
        "Create a File class that extends the FileSystemComponent class. Implement the methods as per a single file's behavior.",
        "Create a Directory class that also extends the FileSystemComponent class. The Directory class should have a list of FileSystemComponent. Implement the getSize() method to return the total size of all FileSystemComponent in the list, the getName() method to return the directory name, and the print() method to print details of all FileSystemComponent in the list.",
        "In your main program, create a directory, add files and other directories to it, and then call the print() method to print the details.",
      ]}
      realization={<Composite />}
      link="composite/composite.tsx"
    />
  );
};

export default CompositePage;
