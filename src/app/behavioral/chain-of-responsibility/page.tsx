// patterns
import { ChainOfResponsibility } from "@/patterns/chain-of-responsibility/chain-of-responsibility";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const ChainOfResponsibilityPage = () => {
  return (
    <PatternWrapper
      title="Chain of Responsibility pattern"
      subtitle="Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain."
      task={[
        "Define a Handler interface that includes methods to set the next handler in the chain and to handle the request.",
        "Implement concrete Handler classes for each level of support (e.g., Tier1Support, Tier2Support, Tier3Support). Each handler should pass the incident to the next handler if it's unable to handle it.",
        "In your incident management system, create a chain of handlers. When an incident is reported, pass it to the first handler in the chain.",
      ]}
      realization={<ChainOfResponsibility />}
      link="chain-of-responsibility/chain-of-responsibility.tsx"
    />
  );
};

export default ChainOfResponsibilityPage;
