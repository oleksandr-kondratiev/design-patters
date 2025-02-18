// patterns
import { Adapter } from "@/patterns/adapter/adapter";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const AdapterPage = () => {
  return (
    <PatternWrapper
      title="Adapter pattern"
      subtitle="Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate."
      task={[
        "Define a ChartRenderer interface that declares methods for rendering different types of charts (e.g., bar chart, pie chart).",
        "Implement a ChartRendererAdapter class that implements the ChartRenderer interface.",
        "In the ChartRendererAdapter class, instantiate a new object of the third-party chart rendering class.",
        "Implement the methods in ChartRendererAdapter to call the corresponding methods on the third-party chart renderer object, converting the parameters as necessary.",
        "In your application, use the ChartRendererAdapter class whenever you need to render a chart.",
      ]}
      realization={<Adapter />}
      link="adapter/adapter.tsx"
    />
  );
};

export default AdapterPage;
