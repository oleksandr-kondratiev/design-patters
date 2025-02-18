"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

class Light {
  turnOn(): void {
    toast.info("Lights", { description: "Lights turned ON" });
  }

  turnOff(): void {
    toast.info("Lights", { description: "Lights turned OFF" });
  }
}

class TemperatureControl {
  setTemperature(temp: number): void {
    toast.info("Temperature", { description: `Temperature set to ${temp}°C` });
  }
}

class SecuritySystem {
  arm(): void {
    toast.warning("Security", { description: "Security system ARMED" });
  }

  disarm(): void {
    toast.warning("Security", { description: "Security system DISARMED" });
  }
}

class MusicSystem {
  playMusic(): void {
    toast.success("Music", { description: "Playing ambient music" });
  }

  stopMusic(): void {
    toast.success("Music", { description: "Music stopped" });
  }
}

class HomeAutomationFacade {
  private light: Light;
  private temperature: TemperatureControl;
  private security: SecuritySystem;
  private music: MusicSystem;

  constructor() {
    this.light = new Light();
    this.temperature = new TemperatureControl();
    this.security = new SecuritySystem();
    this.music = new MusicSystem();
  }

  leaveHome(): void {
    this.light.turnOff();
    this.temperature.setTemperature(18);
    this.security.arm();
    this.music.stopMusic();
  }

  comeHome(): void {
    this.security.disarm();
    this.light.turnOn();
    this.temperature.setTemperature(22);
    this.music.playMusic();
  }

  nightMode(): void {
    this.light.turnOff();
    this.temperature.setTemperature(20);
    this.security.arm();
    this.music.stopMusic();
  }
}

export const Facade = () => {
  const homeAutomation = new HomeAutomationFacade();

  return (
    <div className="w-full space-y-4">
      <h3 className="mb-4 text-sm font-medium">Home Automation Control</h3>
      <div className="flex flex-wrap gap-4">
        <Button className="flex-1" onClick={() => homeAutomation.comeHome()}>
          Come Home
        </Button>
        <Button className="flex-1" onClick={() => homeAutomation.leaveHome()}>
          Leave Home
        </Button>
        <Button className="flex-1" onClick={() => homeAutomation.nightMode()}>
          Night Mode
        </Button>
      </div>
    </div>
  );
};
