// patterns
import { Prototype } from "@/patterns/prototype/prototype";

// components
import { PatternWrapper } from "@/components/pattern-wrapper/pattern-wrapper";

const PrototypePage = () => {
  return (
    <PatternWrapper
      title="Prototype pattern"
      subtitle="Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes."
      task={[
        "Define a NPC abstract class that declares a clone() method and includes several fields (e.g., name, health, attack power).",
        "Create concrete NPC subclasses for each type of NPC (e.g., Zombie, Goblin). These subclasses should implement the clone() method to return a new instance of the class with the same field values.",
        "In your game initialization code, create a single instance of each NPC subclass.",
        "Whenever you need a new NPC of a particular type in the game, call the clone() method on the instance of that type instead of creating a new instance.",
      ]}
      realization={<Prototype />}
      link="https://github.com/oleksandr-kondratiev/design-patters"
    />
  );
};

export default PrototypePage;
