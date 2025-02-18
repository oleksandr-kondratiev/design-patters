"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IRenderer {
  renderCircle(x: number, y: number, radius: number): void;
  renderSquare(x: number, y: number, side: number): void;
}

class CanvasRenderer implements IRenderer {
  renderCircle(x: number, y: number, radius: number): void {
    toast.info("Canvas Renderer", {
      description: `Drawing circle at (${x},${y}) with radius ${radius} using Canvas`,
    });
  }

  renderSquare(x: number, y: number, side: number): void {
    toast.info("Canvas Renderer", {
      description: `Drawing square at (${x},${y}) with side ${side} using Canvas`,
    });
  }
}

class SVGRenderer implements IRenderer {
  renderCircle(x: number, y: number, radius: number): void {
    toast.success("SVG Renderer", {
      description: `Drawing circle at (${x},${y}) with radius ${radius} using SVG`,
    });
  }

  renderSquare(x: number, y: number, side: number): void {
    toast.success("SVG Renderer", {
      description: `Drawing square at (${x},${y}) with side ${side} using SVG`,
    });
  }
}

abstract class Shape {
  protected renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  abstract draw(): void;
}

class Circle extends Shape {
  private x: number = 100;
  private y: number = 100;
  private radius: number = 50;

  draw(): void {
    this.renderer.renderCircle(this.x, this.y, this.radius);
  }
}

class Square extends Shape {
  private x: number = 100;
  private y: number = 100;
  private side: number = 80;

  draw(): void {
    this.renderer.renderSquare(this.x, this.y, this.side);
  }
}

export const Bridge = () => {
  const canvasRenderer = new CanvasRenderer();
  const svgRenderer = new SVGRenderer();

  const drawWithCanvas = (ShapeClass: typeof Circle | typeof Square) => () => {
    const shape = new ShapeClass(canvasRenderer);

    shape.draw();
  };

  const drawWithSVG = (ShapeClass: typeof Circle | typeof Square) => () => {
    const shape = new ShapeClass(svgRenderer);

    shape.draw();
  };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <h3 className="mb-4 text-sm font-medium">Canvas Renderer</h3>
        <div className="flex gap-4">
          <Button className="w-full" onClick={drawWithCanvas(Circle)}>
            Draw Circle
          </Button>
          <Button className="w-full" onClick={drawWithCanvas(Square)}>
            Draw Square
          </Button>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4 text-sm font-medium">SVG Renderer</h3>
        <div className="flex gap-4">
          <Button className="w-full" onClick={drawWithSVG(Circle)}>
            Draw Circle
          </Button>
          <Button className="w-full" onClick={drawWithSVG(Square)}>
            Draw Square
          </Button>
        </div>
      </Card>
    </div>
  );
};
