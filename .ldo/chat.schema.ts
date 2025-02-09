import { Schema } from "shexj";

/**
 * =============================================================================
 * chatSchema: ShexJ Schema for chat
 * =============================================================================
 */
export const chatSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://shaperepo.com/schemas/chat#ChatShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://www.w3.org/ns/pim/meeting#LongChat"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/elements/1.1/author",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/elements/1.1/title",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2005/01/wf/flow#message",
              valueExpr: "https://shaperepo.com/schemas/chat#ChatMessageShape",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2005/01/wf/flow#participation",
              valueExpr:
                "https://shaperepo.com/schemas/chat#ChatParticipationShape",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/chat#ChatMessageShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/terms/created",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://rdfs.org/sioc/ns#content",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://xmlns.com/foaf/0.1/maker",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://purl.org/dc/terms/isReplacedBy",
              valueExpr: "https://shaperepo.com/schemas/chat#ChatMessageShape",
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/dateDeleted",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://rdfs.org/sioc/ns#has_reply",
              valueExpr: "https://shaperepo.com/schemas/chat#ChatMessageShape",
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "https://shaperepo.com/schemas/chat#ChatParticipationShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2002/12/cal/ical#dtstart",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2005/01/wf/flow#participant",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
          ],
        },
      },
    },
    {
      id: "https://shaperepo.com/schemas/chat#ChatActionShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["http://schema.org/Action"],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/agent",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://rdfs.org/sioc/ns#content",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/target",
              valueExpr: "https://shaperepo.com/schemas/chat#ChatMessageShape",
            },
          ],
        },
      },
    },
  ],
};
