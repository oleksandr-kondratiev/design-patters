# Design Patterns in TypeScript

Welcome to the Design Patterns repository, where we explore the implementation of various design patterns in TypeScript. This project aims to provide clear, concise, and practical examples of design patterns to help developers understand and apply them in real-world applications.

## Table of Contents

- [Introduction](#introduction)
- [Software Requirements](#software-requirements)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Patterns Covered](#patterns-covered)

## Introduction

Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code. They define a language that helps you and your team communicate more efficiently.

This repository focuses on implementing these patterns in TypeScript, providing both the theory behind each pattern and practical examples.

## Software Requirements

- Node.js (v22.0.0 or higher)
- npm (v10.0.0 or higher)

These versions are recommended for compatibility with the examples provided. You can download them from [Node.js official website](https://nodejs.org/).

## Getting Started

To get started with this project, you need to have Node.js and npm installed on your machine.

1. Clone the repository:

```sh
git clone git@github.com:oleksandr-kondratiev/design-patters.git
```

2. Navigate to the project directory:

```sh
cd design-patterns
```

3. Install dependencies:

```sh
npm install
```

4. Explore the patterns implemented in the src/patterns directory. Each pattern has its own folder containing a TypeScript implementation and an example usage.

## Folder Structure

The project is organized as follows:

- `/src`: This folder contains the TypeScript source files for each design pattern.
  - `/app`: Contains the main application logic and entry points.
  - `/components`: Houses reusable UI components.
    - `/ui`: Dedicated to UI components that are purely presentational.
  - `/constants`: Stores constant values used throughout the application.
  - `/lib/utils`: Contains utility functions and helpers used across the application.
  - `/providers`: Includes context providers for state management and data passing.
  - `/utils`: General utilities and helper functions.
  - `/patterns`: Inside this folder, each design pattern has its own subfolder.

## Patterns Covered

This repository covers the following design patterns:

#### Creational Patterns
- [Factory Method](https://refactoring.guru/design-patterns/factory-method)
- [Abstract Factory](https://refactoring.guru/design-patterns/abstract-factory)
- [Builder](https://refactoring.guru/design-patterns/builder)
- [Prototype](https://refactoring.guru/design-patterns/prototype)

#### Behavioral Patterns
- [Iterator](https://refactoring.guru/design-patterns/iterator)
- [State](https://refactoring.guru/design-patterns/state)