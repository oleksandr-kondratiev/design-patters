"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

interface Image {
  display(): void;
  getFileName(): string;
}

class RealImage implements Image {
  private fileName: string;
  private isLoaded: boolean = false;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  private loadImage(): void {
    toast.info("Loading Image", {
      description: `Loading ${this.fileName} from disk...`,
    });
    this.isLoaded = true;
  }

  display(): void {
    if (!this.isLoaded) {
      this.loadImage();
    }
    toast.success("Display Image", {
      description: `Displaying ${this.fileName}`,
    });
  }

  getFileName(): string {
    return this.fileName;
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }

  getFileName(): string {
    return this.fileName;
  }
}

export const Proxy = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const images = [
    new ProxyImage("nature.jpg"),
    new ProxyImage("city.jpg"),
    new ProxyImage("space.jpg"),
  ];

  const handleDisplay = (image: Image) => {
    image.display();

    setLoadedImages((prev) => new Set(prev).add(image.getFileName()));
  };

  const getLoaded = (image: Image) => {
    return loadedImages.has(image.getFileName());
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm">
              {image.getFileName()}
              {getLoaded(image) && " (Loaded)"}
            </span>
            <Button
              onClick={() => handleDisplay(image)}
              variant={getLoaded(image) ? "outline" : "default"}
            >
              {getLoaded(image) ? "Show Again" : "Load & Display"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
