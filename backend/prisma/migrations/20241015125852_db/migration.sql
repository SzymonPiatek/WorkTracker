-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "isEntry" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);
