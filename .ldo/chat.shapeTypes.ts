import { ShapeType } from "@ldo/ldo";
import { chatSchema } from "./chat.schema";
import { chatContext } from "./chat.context";
import {
  ChatShape,
  ChatMessageShape,
  ChatParticipationShape,
  ChatActionShape,
} from "./chat.typings";

/**
 * =============================================================================
 * LDO ShapeTypes chat
 * =============================================================================
 */

/**
 * ChatShape ShapeType
 */
export const ChatShapeShapeType: ShapeType<ChatShape> = {
  schema: chatSchema,
  shape: "https://shaperepo.com/schemas/chat#ChatShape",
  context: chatContext,
};

/**
 * ChatMessageShape ShapeType
 */
export const ChatMessageShapeShapeType: ShapeType<ChatMessageShape> = {
  schema: chatSchema,
  shape: "https://shaperepo.com/schemas/chat#ChatMessageShape",
  context: chatContext,
};

/**
 * ChatParticipationShape ShapeType
 */
export const ChatParticipationShapeShapeType: ShapeType<ChatParticipationShape> =
  {
    schema: chatSchema,
    shape: "https://shaperepo.com/schemas/chat#ChatParticipationShape",
    context: chatContext,
  };

/**
 * ChatActionShape ShapeType
 */
export const ChatActionShapeShapeType: ShapeType<ChatActionShape> = {
  schema: chatSchema,
  shape: "https://shaperepo.com/schemas/chat#ChatActionShape",
  context: chatContext,
};
