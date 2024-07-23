// patterns
import { IteratorPattern } from "@/patterns/iterator/iterator";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const IteratorPage = () => {
  return (
    <PatternWrapper
      title="Iterator pattern"
      subtitle="Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.)."
      task={[
        "Define a BookCollection class that stores the books. It should include a method to return an Iterator for the books.",
        "Define an Iterator interface that includes methods to check if there are more elements and to get the next element.",
        "Implement a BookIterator class that implements the Iterator interface. It should have a reference to the BookCollection and an index to keep track of the current position.",
        "In your library management system, create a BookCollection object and use its iterator to access the books.",
      ]}
      realization={<IteratorPattern />}
      link="https://github.com/oleksandr-kondratiev/design-patters"
    />
  );
};

export default IteratorPage;
