import { FC } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IPatternWrapperProps {
  title: string;
  subtitle: string;
  task: string[];
  realization: JSX.Element;
  link: string;
}

export const PatternWrapper: FC<IPatternWrapperProps> = ({
  title,
  subtitle,
  task,
  realization,
  link,
}) => {
  return (
    <>
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        {title}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-2 border-b mb-6 pb-6">
        {subtitle}
      </p>
      <div className="h-full flex gap-6 mb-6">
        <Card className="w-1/2 flex-col justify-between">
          <CardHeader>
            <CardTitle>Practice Task</CardTitle>
            <CardDescription>
              Implement the task using the pattern.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="ml-6 list-decimal [&>li]:mt-2">
              {task.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card className="h-full w-1/2 flex-col justify-between">
          <CardHeader className="flex-row justify-between items-center">
            <div>
              <CardTitle className="mb-1">Realization</CardTitle>
              <CardDescription>
                The realization of the task using the pattern.
              </CardDescription>
            </div>
            <Link href={link}>
              <Button variant="outline" size="icon">
                <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                <span className="sr-only">Github</span>
              </Button>
            </Link>
          </CardHeader>
          <CardContent>{realization}</CardContent>
        </Card>
      </div>
    </>
  );
};
