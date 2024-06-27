// utils
import { fromSnakeCaseToNormal, toUpperCaseFirstLetter } from "@/utils/string";

export const ROUTES = {
  FACTORY_METHOD: "/factory-method",
  ABSTRACT_FACTORY: "/abstract-factory",
  BUILDER: "/builder",
  PROTOTYPE: "/prototype",
  ITERATOR: "/iterator",
  STATE: "/state",
} as const;

type TRoute = keyof typeof ROUTES;

export const ROUTES_WITHOUT_SLASH = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => [key, value.slice(1)])
) as Record<TRoute, string>;

export const ROUTES_WITH_LABELS = Object.entries(ROUTES).map(([key, value]) => {
  const normalLabel = fromSnakeCaseToNormal(key.toLocaleLowerCase());

  return {
    label: toUpperCaseFirstLetter(normalLabel),
    value: value,
  };
});
