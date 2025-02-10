# @ldshape/chat

A Shape for Chat messages.

This project includes shapes and generated files for [LDO](https://ldo.js.org).

## Installation

```bash
npm i @ldshape/chat
```


## chat

### Usage with LDO

```typescript
import { createLdoDataset } from "@ldo/ldo";
import { ChatShapeShapeType, ChatMessageShapeShapeType, ChatParticipationShapeShapeType, ChatActionShapeShapeType } from "@ldshape/chat";
import type { ChatShape, ChatMessageShape, ChatParticipationShape, ChatActionShape } from "@ldshape/chat";
const ldoDataset = createLdoDataset();

const example0: ChatShape = ldoDataset
  .usingType(ChatShapeShapeType)
  .fromSubject("http://example.com/example0");

const example1: ChatMessageShape = ldoDataset
  .usingType(ChatMessageShapeShapeType)
  .fromSubject("http://example.com/example1");

const example2: ChatParticipationShape = ldoDataset
  .usingType(ChatParticipationShapeShapeType)
  .fromSubject("http://example.com/example2");

const example3: ChatActionShape = ldoDataset
  .usingType(ChatActionShapeShapeType)
  .fromSubject("http://example.com/example3");

```

### ShEx Typings

```shex
PREFIX srs: <https://shaperepo.com/schemas/chat#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX meeting: <http://www.w3.org/ns/pim/meeting#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX flow: <http://www.w3.org/2005/01/wf/flow#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sioc: <http://rdfs.org/sioc/ns#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX ic: <http://www.w3.org/2002/12/cal/ical#>
PREFIX schema: <http://schema.org/>

srs:ChatShape EXTRA a {
  a [ meeting:LongChat ];
  dc:author IRI;
  dc:title xsd:string;
  flow:message @srs:ChatMessageShape *;
  flow:participation @srs:ChatParticipationShape *;
}

srs:ChatMessageShape {
  dct:created xsd:dateTime;
  sioc:content xsd:string;
  foaf:maker IRI;
  dct:isReplacedBy @srs:ChatMessageShape ?;
  schema:dateDeleted xsd:dateTime ?;
  sioc:has_reply @srs:ChatMessageShape *;
}

srs:ChatParticipationShape {
  ic:dtstart xsd:dateTime;
  flow:participant IRI;
}

srs:ChatActionShape {
  a [ schema:Action ];
  schema:agent IRI;
  sioc:content xsd:string;
  schema:target @srs:ChatMessageShape;
}
```

### TypeScript Typings

```typescript
import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for chat
 * =============================================================================
 */

/**
 * ChatShape Type
 */
export interface ChatShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "LongChat";
  };
  author: {
    "@id": string;
  };
  title: string;
  message?: ChatMessageShape[];
  participation?: ChatParticipationShape[];
}

/**
 * ChatMessageShape Type
 */
export interface ChatMessageShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  created: string;
  content: string;
  maker: {
    "@id": string;
  };
  isReplacedBy?: ChatMessageShape;
  dateDeleted?: string;
  hasReply?: ChatMessageShape[];
}

/**
 * ChatParticipationShape Type
 */
export interface ChatParticipationShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  dtstart: string;
  participant: {
    "@id": string;
  };
}

/**
 * ChatActionShape Type
 */
export interface ChatActionShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Action";
  };
  agent: {
    "@id": string;
  };
  content: string;
  target: ChatMessageShape;
}

```

## Sponsorship
This project was made possible by a grant from NGI Zero Entrust via nlnet. Learn more on the [NLnet project page](https://nlnet.nl/project/SolidUsableApps/).

[<img src="https://nlnet.nl/logo/banner.png" alt="nlnet foundation logo" width="300" />](https://nlnet.nl/)
[<img src="https://nlnet.nl/image/logos/NGI0Entrust_tag.svg" alt="NGI Zero Entrust Logo" width="300" />](https://nlnet.nl/)

## Liscense
MIT
