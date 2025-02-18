"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

abstract class FileSystemComponent {
  protected name: string;
  protected size: number;

  constructor(name: string, size: number = 0) {
    this.name = name;
    this.size = size;
  }

  abstract getSize(): number;
  abstract print(indent: string): string;
  getName(): string {
    return this.name;
  }
}

class File extends FileSystemComponent {
  getSize(): number {
    return this.size;
  }

  print(indent: string): string {
    return `${indent}📄 ${this.name} (${this.size}KB)`;
  }
}

class Directory extends FileSystemComponent {
  private children: FileSystemComponent[] = [];

  addComponent(component: FileSystemComponent): void {
    this.children.push(component);
  }

  getSize(): number {
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }

  print(indent: string): string {
    let output = `${indent}📁 ${this.name} (${this.getSize()}KB)\n`;

    this.children.forEach((child) => {
      output += child.print(indent + "  ") + "\n";
    });

    return output.trim();
  }
}

export const Composite = () => {
  const fileSystem = new Directory("root");

  const documents = new Directory("documents");
  documents.addComponent(new File("resume.pdf", 500));
  documents.addComponent(new File("photo.jpg", 2048));

  const src = new Directory("src");
  src.addComponent(new File("index.ts", 1));
  src.addComponent(new File("app.ts", 2));

  const projects = new Directory("projects");
  projects.addComponent(src);
  
  fileSystem.addComponent(documents);
  fileSystem.addComponent(projects);

  const showTotalSize = () => {
    toast.success("Total Size", {
      description: `Total size of all files: ${fileSystem.getSize()}KB`,
    });
  };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <div className="mb-4 flex flex-row items-center justify-between border-b pb-4">
          <h3 className="font-medium">File System Explorer</h3>
          <Button variant="outline" size="sm" onClick={showTotalSize}>
            Calculate Total Size
          </Button>
        </div>
        <pre className="mt-2">{fileSystem.print("")}</pre>
      </Card>
    </div>
  );
};
