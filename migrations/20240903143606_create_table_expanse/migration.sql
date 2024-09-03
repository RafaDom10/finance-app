-- CreateTable
CREATE TABLE "Expanse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "obs" TEXT,
    "value" REAL NOT NULL,
    "quantityInstallments" INTEGER NOT NULL DEFAULT 0,
    "installmentsPaid" INTEGER NOT NULL DEFAULT 0,
    "installmentsToPaid" INTEGER NOT NULL DEFAULT 0
);
