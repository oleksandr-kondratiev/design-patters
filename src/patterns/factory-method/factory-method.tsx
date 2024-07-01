"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

interface Shape {
  draw(): void;
}

export class Circle implements Shape {
  draw(): void {
    toast("Drawing a Circle");
  }
}

export class Square implements Shape {
  draw(): void {
    toast("Drawing a Square");
  }
}

export class Rectangle implements Shape {
  draw(): void {
    toast("Drawing a Rectangle");
  }
}

export class ShapeFactory {
  getShape(shapeType: string): Shape | null {
    switch (shapeType) {
      case "Circle":
        return new Circle();
      case "Square":
        return new Square();
      case "Rectangle":
        return new Rectangle();
      default:
        return null;
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

    shape?.draw();
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
