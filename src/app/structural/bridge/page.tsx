// patterns
import { Bridge } from "@/patterns/bridge/bridge";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const BridgePage = () => {
  return (
    <PatternWrapper
      title="Bridge pattern"
      subtitle="Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other."
      task={[
        "Define an IRenderer interface that declares methods for rendering different types of shapes.",
        "Implement concrete classes for each rendering engine (like OpenGLRenderer, DirectXRenderer) that implement the IRenderer interface.",
        "Define an abstract Shape class that uses an IRenderer to render the shape.",
        "Implement concrete Shape subclasses for each shape (like Circle, Rectangle). These classes should use the IRenderer to render the shape.",
        "In your application, use the appropriate IRenderer and Shape classes to render shapes on different platforms with different rendering engines.",
      ]}
      realization={<Bridge />}
      link="bridge/bridge.tsx"
    />
  );
};

export default BridgePage;
