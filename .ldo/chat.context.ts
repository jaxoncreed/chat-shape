import { LdoJsonldContext } from "@ldo/jsonld-dataset-proxy";

/**
 * =============================================================================
 * chatContext: JSONLD Context for chat
 * =============================================================================
 */
export const chatContext: LdoJsonldContext = {
  LongChat: {
    "@id": "http://www.w3.org/ns/pim/meeting#LongChat",
    "@context": {
      type: {
        "@id": "@type",
      },
      author: {
        "@id": "http://purl.org/dc/elements/1.1/author",
        "@type": "@id",
      },
      title: {
        "@id": "http://purl.org/dc/elements/1.1/title",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      message: {
        "@id": "http://www.w3.org/2005/01/wf/flow#message",
        "@type": "@id",
        "@isCollection": true,
      },
      participation: {
        "@id": "http://www.w3.org/2005/01/wf/flow#participation",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  created: {
    "@id": "http://purl.org/dc/terms/created",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  content: {
    "@id": "http://rdfs.org/sioc/ns#content",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  maker: {
    "@id": "http://xmlns.com/foaf/0.1/maker",
    "@type": "@id",
  },
  isReplacedBy: {
    "@id": "http://purl.org/dc/terms/isReplacedBy",
    "@type": "@id",
  },
  dateDeleted: {
    "@id": "http://schema.org/dateDeleted",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  hasReply: {
    "@id": "http://rdfs.org/sioc/ns#has_reply",
    "@type": "@id",
    "@isCollection": true,
  },
  dtstart: {
    "@id": "http://www.w3.org/2002/12/cal/ical#dtstart",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  participant: {
    "@id": "http://www.w3.org/2005/01/wf/flow#participant",
    "@type": "@id",
  },
  Action: {
    "@id": "http://schema.org/Action",
    "@context": {
      type: {
        "@id": "@type",
      },
      agent: {
        "@id": "http://schema.org/agent",
        "@type": "@id",
      },
      content: {
        "@id": "http://rdfs.org/sioc/ns#content",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      target: {
        "@id": "http://schema.org/target",
        "@type": "@id",
      },
    },
  },
};
