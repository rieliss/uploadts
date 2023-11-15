-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserImage" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "imgURL" TEXT,

    CONSTRAINT "UserImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImgFile" (
    "id" SERIAL NOT NULL,
    "originalName" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "ImgFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeImg" (
    "id" SERIAL NOT NULL,
    "type" TEXT,

    CONSTRAINT "TypeImg_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ImgFile_authorId_idx" ON "ImgFile"("authorId");

-- AddForeignKey
ALTER TABLE "ImgFile" ADD CONSTRAINT "ImgFile_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "TypeImg"("id") ON DELETE CASCADE ON UPDATE CASCADE;
