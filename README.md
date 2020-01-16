[![npm](https://img.shields.io/npm/v/dominum.svg)](https://www.npmjs.com/package/dominum)
[![Dependencies](https://img.shields.io/david/brettz9/dominum.svg)](https://david-dm.org/brettz9/dominum)
[![devDependencies](https://img.shields.io/david/dev/brettz9/dominum.svg)](https://david-dm.org/brettz9/dominum?type=dev)

[![testing badge](https://raw.githubusercontent.com/brettz9/dominum/master/badges/tests-badge.svg?sanitize=true)](badges/tests-badge.svg)
[![coverage badge](https://raw.githubusercontent.com/brettz9/dominum/master/badges/coverage-badge.svg?sanitize=true)](badges/coverage-badge.svg)

[![Known Vulnerabilities](https://snyk.io/test/github/brettz9/dominum/badge.svg)](https://snyk.io/test/github/brettz9/dominum)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/brettz9/dominum.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/dominum/alerts)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/brettz9/dominum.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/dominum/context:javascript)

[![License](https://img.shields.io/npm/l/dominum.svg)](LICENSE-MIT.txt)

[![issuehunt-to-marktext](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/r/brettz9/dominum)

# dominum

Portmanteau of **DOM** and **min**im**um**

A modular representation of the DOM for use in Node.

There is already the excellent [jsdom](https://github.com/jsdom/jsdom/)
library, but for some targeted use cases, it is a heavier solution than needed.

Currently is mostly limited to creating Node types and with some means to
modify them. Future additons may be added in other modules to keep the
package light.

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
    `prototype` properties. Use
    [jsdom](https://github.com/jsdom/jsdom/)
    for more fully accurate behavior (and more complete APIs).
2. Support all DOM APIs.
