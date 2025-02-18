"use client";

import React, { useState } from "react";

// components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

abstract class Pizza {
  abstract getDescription(): string;
  abstract getCost(): number;
}

class BasicPizza extends Pizza {
  getDescription(): string {
    return "Basic Pizza";
  }

  getCost(): number {
    return 10.0;
  }
}

abstract class PizzaDecorator extends Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription(): string {
    return this.pizza.getDescription();
  }

  getCost(): number {
    return this.pizza.getCost();
  }
}

class CheeseTopping extends PizzaDecorator {
  getDescription(): string {
    return `${this.pizza.getDescription()} + Extra Cheese`;
  }

  getCost(): number {
    return this.pizza.getCost() + 2.5;
  }
}

class PepperoniTopping extends PizzaDecorator {
  getDescription(): string {
    return `${this.pizza.getDescription()} + Pepperoni`;
  }

  getCost(): number {
    return this.pizza.getCost() + 3.0;
  }
}

class MushroomTopping extends PizzaDecorator {
  getDescription(): string {
    return `${this.pizza.getDescription()} + Mushrooms`;
  }

  getCost(): number {
    return this.pizza.getCost() + 2.0;
  }
}

type TTopping =
  | typeof CheeseTopping
  | typeof PepperoniTopping
  | typeof MushroomTopping;

export const Decorator = () => {
  const [pizza, setPizza] = useState<Pizza>(new BasicPizza());

  const addTopping = (ToppingClass: TTopping) => {
    setPizza(new ToppingClass(pizza));
  };

  const resetPizza = () => {
    setPizza(new BasicPizza());
  };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <h3 className="mb-4 text-sm font-medium">
          Current Pizza: {pizza.getDescription()}
        </h3>
        <p className="mb-4 text-sm">
          Total Cost: ${pizza.getCost().toFixed(2)}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="flex-1" onClick={() => addTopping(CheeseTopping)}>
            Add Cheese
          </Button>
          <Button
            className="flex-1"
            onClick={() => addTopping(PepperoniTopping)}
          >
            Add Pepperoni
          </Button>
          <Button
            className="flex-1"
            onClick={() => addTopping(MushroomTopping)}
          >
            Add Mushrooms
          </Button>
          <Button className="flex-1" variant="outline" onClick={resetPizza}>
            Reset Pizza
          </Button>
        </div>
      </Card>
    </div>
  );
};
