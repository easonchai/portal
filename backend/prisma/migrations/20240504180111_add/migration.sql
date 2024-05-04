/*
  Warnings:

  - Added the required column `requestor` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceChainId" TEXT NOT NULL,
    "destChainId" TEXT NOT NULL,
    "sourceTokenAddress" TEXT NOT NULL,
    "destTokenAddress" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "requestor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_Request" ("amount", "createdAt", "deletedAt", "destChainId", "destTokenAddress", "id", "sourceChainId", "sourceTokenAddress", "updatedAt") SELECT "amount", "createdAt", "deletedAt", "destChainId", "destTokenAddress", "id", "sourceChainId", "sourceTokenAddress", "updatedAt" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
