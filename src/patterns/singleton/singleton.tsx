"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    
    this.logs.push(`[${timestamp}] ${message}`);

    toast.success("Message logged!", {
      description: `Latest log: ${message}`,
    });
  }

  public getLogs(): string[] {
    return this.logs;
  }
}

export const Singleton = () => {
  const handleLog = () => {
    const logger = Logger.getInstance();
    logger.log(`New event at ${new Date().toLocaleTimeString()}`);
  };

  const handleCheckInstance = () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    toast.info("Instance check", {
      description: `Are logger instances the same? ${
        logger1 === logger2 ? "Yes!" : "No"
      }`,
    });
  };

  return (
    <div className="w-full flex justify-between gap-4">
      <Button className="w-full" onClick={handleLog}>
        Add Log
      </Button>
      <Button className="w-full" onClick={handleCheckInstance}>
        Check Instance
      </Button>
    </div>
  );
};
