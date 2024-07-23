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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// utils
import { formattedDate } from "@/utils/dates";
import { toUpperCaseFirstLetter } from "@/utils/string";

class Meal {
  main: string;
  drink: string;
  side: string;

  constructor() {
    this.main = "";
    this.drink = "";
    this.side = "";
  }
}

class MealBuilder {
  meal: Meal;

  constructor() {
    this.meal = new Meal();
  }

  setMain(main: string) {
    this.meal.main = main;

    return this;
  }

  setDrink(drink: string) {
    this.meal.drink = drink;

    return this;
  }

  setSide(side: string) {
    this.meal.side = side;

    return this;
  }

  build() {
    return this.meal;
  }
}

class BurgerMealBuilder extends MealBuilder {
  constructor() {
    super();
    this.setMain("Burger").setDrink("Cola").setSide("Fries");
  }
}

class PizzaMealBuilder extends MealBuilder {
  constructor() {
    super();
    this.setMain("Pizza").setDrink("Pepsi").setSide("Salad");
  }
}

class MealDirector {
  createMeal(builder: MealBuilder) {
    return builder.build();
  }
}

const formSchema = z.object({
  menu: z.string({ required_error: "Menu is required" }),
});

export const Builder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const mealDirector = new MealDirector();
    const meal = mealDirector.createMeal(
      values.menu === "burger"
        ? new BurgerMealBuilder()
        : new PizzaMealBuilder()
    );

    toast.success(`Order successfully created: ${meal.main}, ${meal.drink}, ${meal.side}`, {
      description: `Ordered at ${formattedDate}`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="menu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Menu</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select menu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["pizza", "burger"].map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {toUpperCaseFirstLetter(platform)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Render</Button>
      </form>
    </Form>
  );
};
