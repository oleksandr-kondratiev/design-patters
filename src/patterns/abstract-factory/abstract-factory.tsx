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
import { getDateNow } from "@/utils/dates";

interface UIElement {
  render(): void;
}

class WindowsButton implements UIElement {
  render(): void {
    toast("Rendering a Windows Button", {
      description: getDateNow(),
    });
  }
}

class WindowsCheckbox implements UIElement {
  render(): void {
    toast("Rendering a Windows Checkbox", {
      description: getDateNow(),
    });
  }
}

class WindowsTextbox implements UIElement {
  render(): void {
    toast("Rendering a Windows Textbox", {
      description: getDateNow(),
    });
  }
}

class MacOSButton implements UIElement {
  render(): void {
    toast("Rendering a MacOS Button", {
      description: getDateNow(),
    });
  }
}

class MacOSCheckbox implements UIElement {
  render(): void {
    toast("Rendering a MacOS Checkbox", {
      description: getDateNow(),
    });
  }
}

class MacOSTextbox implements UIElement {
  render(): void {
    toast("Rendering a MacOS Textbox", {
      description: getDateNow(),
    });
  }
}

class LinuxButton implements UIElement {
  render(): void {
    toast("Rendering a Linux Button", {
      description: getDateNow(),
    });
  }
}

class LinuxCheckbox implements UIElement {
  render(): void {
    toast("Rendering a Linux Checkbox", {
      description: getDateNow(),
    });
  }
}

class LinuxTextbox implements UIElement {
  render(): void {
    toast("Rendering a Linux Textbox", {
      description: getDateNow(),
    });
  }
}

interface UIFactory {
  createButton(): UIElement;
  createCheckbox(): UIElement;
  createTextbox(): UIElement;
}

class WindowsFactory implements UIFactory {
  createButton(): UIElement {
    return new WindowsButton();
  }
  createCheckbox(): UIElement {
    return new WindowsCheckbox();
  }
  createTextbox(): UIElement {
    return new WindowsTextbox();
  }
}

class MacOSFactory implements UIFactory {
  createButton(): UIElement {
    return new MacOSButton();
  }
  createCheckbox(): UIElement {
    return new MacOSCheckbox();
  }
  createTextbox(): UIElement {
    return new MacOSTextbox();
  }
}

class LinuxFactory implements UIFactory {
  createButton(): UIElement {
    return new LinuxButton();
  }
  createCheckbox(): UIElement {
    return new LinuxCheckbox();
  }
  createTextbox(): UIElement {
    return new LinuxTextbox();
  }
}

const FACTORIES: Record<string, UIFactory> = {
  windows: new WindowsFactory(),
  macos: new MacOSFactory(),
  linux: new LinuxFactory(),
};

const formSchema = z.object({
  platform: z.string({ required_error: "Platform is required" }),
});

export const AbstractFactory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const factory = FACTORIES[values.platform];

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
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="macos">MacOS</SelectItem>
                  <SelectItem value="linux">Linux</SelectItem>
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
