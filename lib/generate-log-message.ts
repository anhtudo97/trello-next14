import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `CREATED ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `UPDATED ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `DELETED ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  };
};
