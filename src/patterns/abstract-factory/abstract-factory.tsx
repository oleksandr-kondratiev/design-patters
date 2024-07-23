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

abstract class UIElement {
  abstract render(): void;
}

class WindowsButton extends UIElement {
  render() {
    toast.success("Render Windows button", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class WindowsCheckbox extends UIElement {
  render() {
    toast.success("Render Windows checkbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class WindowsTextbox extends UIElement {
  render() {
    toast.success("Render Windows textbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class LinuxButton extends UIElement {
  render() {
    toast.success("Render Linux button", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class LinuxCheckbox extends UIElement {
  render() {
    toast.success("Render Linux checkbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class LinuxTextbox extends UIElement {
  render() {
    toast.success("Render Linux textbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class MacosButton extends UIElement {
  render() {
    toast.success("Render Macos button", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class MacosCheckbox extends UIElement {
  render() {
    toast.success("Render Macos checkbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

class MacosTextbox extends UIElement {
  render() {
    toast.success("Render Macos textbox", {
      description: `Rendered at ${formattedDate}`,
    });
  }
}

abstract class UIFactory {
  abstract createButton(): UIElement;
  abstract createCheckbox(): UIElement;
  abstract createTextbox(): UIElement;
}

class WindowsFactory extends UIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }

  createTextbox() {
    return new WindowsTextbox();
  }
}

class LinuxFactory extends UIFactory {
  createButton() {
    return new LinuxButton();
  }

  createCheckbox() {
    return new LinuxCheckbox();
  }

  createTextbox() {
    return new LinuxTextbox();
  }
}

class MacosFactory extends UIFactory {
  createButton() {
    return new MacosButton();
  }

  createCheckbox() {
    return new MacosCheckbox();
  }

  createTextbox() {
    return new MacosTextbox();
  }
}

class AbstractFactoryConstructor {
  public getFactory(system: string): UIFactory {
    switch (system) {
      case "windows":
        return new WindowsFactory();
      case "linux":
        return new LinuxFactory();
      case "macos":
        return new MacosFactory();
      default:
        throw new Error("Invalid system type");
    }
  }
}

const formSchema = z.object({
  platform: z.string({ required_error: "Platform is required" }),
});

export const AbstractFactory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const abstractFactory = new AbstractFactoryConstructor();
    const factory = abstractFactory.getFactory(values.platform);

    if (factory) {
      const components = [
        factory.createButton(),
        factory.createCheckbox(),
        factory.createTextbox(),
      ];

      components.forEach((component) => component.render());
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Platform</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["windows", "macos", "linux"].map((platform) => (
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
