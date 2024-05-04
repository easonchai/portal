-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceChainId" TEXT NOT NULL,
    "destChainId" TEXT NOT NULL,
    "sourceTokenAddress" TEXT NOT NULL,
    "destTokenAddress" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
