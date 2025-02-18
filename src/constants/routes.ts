// utils
import { fromConstantToLabel } from "@/utils/string";

export const PATTERN_TYPES = {
  CREATIONAL_PATTERNS: "creational",
  STRUCTURAL_PATTERNS: "structural",
  BEHAVIORAL_PATTERNS: "behavioral",
} as const;

export const ROUTES = {
  // Creational Patterns
  SINGLETON: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/singleton`,
  FACTORY_METHOD: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/factory-method`,
  ABSTRACT_FACTORY: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/abstract-factory`,
  BUILDER: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/builder`,
  PROTOTYPE: `/${PATTERN_TYPES.CREATIONAL_PATTERNS}/prototype`,

  // Structural Patterns
  ADAPTER: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/adapter`,
  BRIDGE: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/bridge`,
  COMPOSITE: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/composite`,
  DECORATOR: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/decorator`,
  FACADE: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/facade`,
  PROXY: `/${PATTERN_TYPES.STRUCTURAL_PATTERNS}/proxy`,

  // Behavioral Patterns
  CHAIN_OF_RESPONSIBILITY: `/${PATTERN_TYPES.BEHAVIORAL_PATTERNS}/chain-of-responsibility`,
  OBSERVER: `/${PATTERN_TYPES.BEHAVIORAL_PATTERNS}/observer`,
  STRATEGY: `/${PATTERN_TYPES.BEHAVIORAL_PATTERNS}/strategy`,
  ITERATOR: `/${PATTERN_TYPES.BEHAVIORAL_PATTERNS}/iterator`,
  STATE: `/${PATTERN_TYPES.BEHAVIORAL_PATTERNS}/state`,
} as const;

type TRoute = keyof typeof ROUTES;

export const ROUTES_WITHOUT_SLASH = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => [key, value.slice(1)])
) as Record<TRoute, string>;

export const ROUTES_WITH_LABELS = Object.entries(PATTERN_TYPES).map(
  ([key, value]) => {
    const patterns = Object.entries(ROUTES)
      .filter(([_, route]) => route.includes(value))
      .map(([type, href]) => ({
        href,
        title: fromConstantToLabel(type),
      }));

    return {
      type: key,
      label: fromConstantToLabel(key),
      patterns: patterns,
    };
  }
);
