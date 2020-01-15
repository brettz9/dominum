# dominum

**This project is not yet functional!**

Portmanteau of **DOM** and **min**im**um**

A modular representation of the DOM for use in Node.

There is already the excellent [jsdom](https://github.com/jsdom/jsdom/)
library, but for some targeted use cases, it is a heavier solution than needed.

## Installation

```
npm i -P dominum
```

## Use cases

1. Building templates server-side. These typically only require DOM creation
    methods without need for traversal, or after-the-fact manipulaion.
    Templating libraries which rely on the DOM, but which only use a subset
    of DOM APIs can use such modular DOM to build strings (e.g., with
    [`w3c-xmlserializer`](https://github.com/jsdom/w3c-xmlserializer)).

## Goals

1. Support a minimum of methods and properties for being able to create all
    Node types and modify them.
2. Allow all created Node types have the methods and properties needed to
    preserve their children/state so they can be serialized.
3. Support exporting all classes with proper inheritance hierarchy so can
    extend as needed.
4. Use formal mix-in names where possible, but also allow better
    composability by splitting up mix-ins or making classes mix in custom
    mix-ins.

## Non-goals

1. Be fully faithful to the DOM in every neglibile way of no use to regular
    DOM building libraries, e.g., erring directly-invoked constructors or
    `prototype` properties, constructor length, etc. Use [jsdom](https://github.com/jsdom/jsdom/)
    for more fully accurate behavior (and more complete APIs).
2. Support all DOM APIs.

## To-dos

1. Get working!
  1. Attribute setting on `Element`
  1. `NamedNodeMap`, `NodeList` (use `Proxy`) and `append`
  1. Check `ChildNode` with `remove` with `parentNode`
