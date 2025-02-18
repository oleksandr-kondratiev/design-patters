// patterns
import { State } from "@/patterns/state/state";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const StatePage = () => {
  return (
    <PatternWrapper
      title="State pattern"
      subtitle="State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class."
      task={[
        "Define a State interface that includes methods for each action (e.g., play(), pause(), stop()).",
        "Implement concrete State classes for each state of the player (e.g., PlayingState, PausedState, StoppedState). Each state should implement the actions differently.",
        "Implement a MediaPlayer class that has a reference to a State object. It should delegate the actions to the current state.",
        "In your digital media player, create a MediaPlayer object and State objects for each state. The MediaPlayer should change its state according to the user's actions.",
      ]}
      realization={<State />}
      link="state/state.tsx"
    />
  );
};

export default StatePage;
