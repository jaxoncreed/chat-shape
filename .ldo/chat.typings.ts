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
