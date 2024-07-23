"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Button } from '@/components/ui/button'

abstract class NPC {
  abstract clone(): NPC
  abstract name: string
  abstract health: number
  abstract attackPower: number
}

class Zombie extends NPC {
  name = 'Zombie'
  health = 100
  attackPower = 10

  clone() {
    return new Zombie()
  }
}

class Goblin extends NPC {
  name = 'Goblin'
  health = 50
  attackPower = 5

  clone() {
    return new Goblin()
  }
}

export const Prototype = () => {
  const onSubmit = (type: string) => () => {
    const prototype = type === 'zombie' ? new Zombie() : new Goblin()
    const clone = prototype.clone()

    toast.warning(`${clone.name} has been cloned successfully!`, {
      description: `Health: ${clone.health}, Attack Power: ${clone.attackPower}`
    })
  }
  return (
    <div className="w-full flex justify-between gap-4">
      <Button className="w-full" onClick={onSubmit("zombie")}>
        Clone Zombie
      </Button>
      <Button className="w-full" onClick={onSubmit("goblin")}>
        Clone Goblin
      </Button>
    </div>
  );
}
