// patterns
import { Proxy } from "@/patterns/proxy/proxy";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const ProxyPage = () => {
  return (
    <PatternWrapper
      title="Proxy pattern"
      subtitle="Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object."
      task={[
        "Define an Image interface that includes methods for loading and displaying the image.",
        "Implement a RealImage class that implements the Image interface. The RealImage class loads the image when it's created.",
        "Implement a ProxyImage class that also implements the Image interface. The ProxyImage class holds a reference to a RealImage object but does not load the image until its display() method is called.",
        "In your document editor, use ProxyImage objects. When you call the display() method, the image will be loaded and displayed.",
      ]}
      realization={<Proxy />}
      link="proxy/proxy.tsx"
    />
  );
};

export default ProxyPage;
