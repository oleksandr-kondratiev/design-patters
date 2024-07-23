"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

abstract class Shape {
  public abstract draw(): void;
}

class Circle extends Shape {
  public draw() {
    toast.success("Drawing a Circle");
  }
}

class Square extends Shape {
  public draw() {
    toast.success("Drawing a Square");
  }
}

class Rectangle extends Shape {
  public draw() {
    toast.success("Drawing a Rectangle");
  }
}

class ShapeFactory {
  public getShape(shapeType: string): Shape {
    switch (shapeType) {
      case "Circle":
        return new Circle();
      case "Square":
        return new Square();
      case "Rectangle":
        return new Rectangle();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

const formSchema = z.object({
  shape: z
    .string({ required_error: "Shape is required" })
    .refine((value) => ["Circle", "Square", "Rectangle"].includes(value), {
      message: "Invalid shape",
    }),
});

export const FactoryMethod = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const factory = new ShapeFactory();
    const shape = factory.getShape(values.shape);

    shape.draw();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="shape"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shape</FormLabel>
              <FormControl>
                <Input placeholder="Enter Shape" {...field} />
              </FormControl>
              <FormDescription>
                Allowed shapes: Circle, Square, Rectangle
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
