"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

interface IssueHandler {
  setNext(handler: IssueHandler): IssueHandler;
  handle(issue: string, priority: number): void;
}

abstract class SupportHandler implements IssueHandler {
  private nextHandler: IssueHandler | null = null;
  protected level: string;

  constructor(level: string) {
    this.level = level;
  }

  setNext(handler: IssueHandler): IssueHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(issue: string, priority: number): void {
    if (this.nextHandler) {
      this.nextHandler.handle(issue, priority);
    } else {
      toast.error("Support Chain", {
        description: "Issue cannot be handled by any support level",
      });
    }
  }
}

class Tier1Support extends SupportHandler {
  constructor() {
    super("Tier 1");
  }

  handle(issue: string, priority: number): void {
    if (priority <= 1) {
      toast.success("Tier 1 Support", {
        description: `Handling basic issue: ${issue}`,
      });
    } else {
      toast.info("Tier 1 Support", {
        description: "Issue escalated to Tier 2",
      });
      super.handle(issue, priority);
    }
  }
}

class Tier2Support extends SupportHandler {
  constructor() {
    super("Tier 2");
  }

  handle(issue: string, priority: number): void {
    if (priority <= 2) {
      toast.success("Tier 2 Support", {
        description: `Handling moderate issue: ${issue}`,
      });
    } else {
      toast.info("Tier 2 Support", {
        description: "Issue escalated to Tier 3",
      });
      super.handle(issue, priority);
    }
  }
}

class Tier3Support extends SupportHandler {
  constructor() {
    super("Tier 3");
  }

  handle(issue: string, priority: number): void {
    if (priority <= 3) {
      toast.success("Tier 3 Support", {
        description: `Handling complex issue: ${issue}`,
      });
    } else {
      super.handle(issue, priority);
    }
  }
}

export const ChainOfResponsibility = () => {
  const [supportChain] = useState(() => {
    const tier1 = new Tier1Support();
    const tier2 = new Tier2Support();
    const tier3 = new Tier3Support();

    tier1.setNext(tier2);
    tier2.setNext(tier3);

    return tier1;
  });

  const issues = [
    { name: "Password Reset", priority: 1 },
    { name: "Network Connectivity", priority: 2 },
    { name: "Database Failure", priority: 3 },
    { name: "Critical Security Breach", priority: 4 },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {issues.map((issue, index) => (
          <Button
            key={index}
            className="w-full"
            onClick={() => supportChain.handle(issue.name, issue.priority)}
            variant={index === issues.length - 1 ? "destructive" : "secondary"}
          >
            {issue.name}
            <span className="ml-2 text-xs opacity-75">
              (Priority: {issue.priority})
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
