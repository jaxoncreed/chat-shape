# @ldshape/chat

A Shape for Chat messages.

This project includes shapes and generated files for [LDO](https://ldo.js.org).

## Installation

```bash
npm i @ldshape/chat
```


## foafProfile

### Usage with LDO

```typescript
import { createLdoDataset } from "@ldo/ldo";
import { FoafProfileShapeType } from "@ldshape/chat";
import type { FoafProfile } from "@ldshape/chat";
const ldoDataset = createLdoDataset();

const example0: FoafProfile = ldoDataset
  .usingType(FoafProfileShapeType)
  .fromSubject("http://example.com/example0");

```

### ShEx Typings

```shex
# This shape is provided by default as an example
# You can create your own shape to fit your needs using ShEx (https://shex.io)
# Also check out https://shaperepo.com for examples of more shapes.

PREFIX ex: <https://example.com/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

ex:FoafProfile EXTRA a {
  a [ foaf:Person ]
    // rdfs:comment  "Defines the node as a Person (from foaf)" ;
  foaf:name xsd:string ?
    // rdfs:comment  "Define a person's name." ;
  foaf:img xsd:string ?
    // rdfs:comment  "Photo link but in string form" ;
  foaf:knows @ex:FoafProfile *
    // rdfs:comment  "A list of WebIds for all the people this user knows." ;
}

```

### TypeScript Typings

```typescript
import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for foafProfile
 * =============================================================================
 */

/**
 * FoafProfile Type
 */
export interface FoafProfile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Defines the node as a Person (from foaf)
   */
  type: {
    "@id": "Person";
  };
  /**
   * Define a person's name.
   */
  name?: string;
  /**
   * Photo link but in string form
   */
  img?: string;
  /**
   * A list of WebIds for all the people this user knows.
   */
  knows?: FoafProfile[];
}

```

