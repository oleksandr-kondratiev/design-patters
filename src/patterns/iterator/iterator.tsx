"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

// utils
import { formatNumberForUi } from "@/utils/numbers";

interface IBook {
  title: string;
  author: string;
  sales: number;
}

const BOOKS_COLLECTION: IBook[] = [
  {
    title: "Harry Potter",
    author: "Rowling",
    sales: 120000000,
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    sales: 100000000,
  },
  {
    title: "The Hobbit",
    author: "Tolkien",
    sales: 100000000,
  },
];

class BookCollection {
  books: IBook[];

  constructor(books: IBook[]) {
    this.books = books;
  }

  getIterator() {
    return new Iterator(this.books);
  }
}

class Iterator<T> {
  collection: T[];
  index: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    return this.collection[this.index++];
  }
}

class BookIterator {
  collection: BookCollection;
  iterator: Iterator<IBook>;

  constructor(collection: BookCollection) {
    this.collection = collection;
    this.iterator = collection.getIterator();
  }

  printBooks() {
    while (this.iterator.hasNext()) {
      const book = this.iterator.next();

      toast.info(`${book.title} (Author: ${book.author})`, {
        description: `Sales: ${formatNumberForUi(book.sales, 1)}`,
      });
    }
  }
}

export const IteratorPattern = () => {
  const onSubmit = () => {
    const bookCollection = new BookCollection(BOOKS_COLLECTION);
    const bookIterator = new BookIterator(bookCollection);

    bookIterator.printBooks();
  };

  return <Button onClick={onSubmit}>Get Access to books</Button>;
};
