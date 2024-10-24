-- CreateTable
CREATE TABLE "budget_tbl" (
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "budget_tbl_pkey" PRIMARY KEY ("title")
);
