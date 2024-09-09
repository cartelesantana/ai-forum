/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_articleId_fkey";

-- DropForeignKey
ALTER TABLE "ListItem" DROP CONSTRAINT "ListItem_contentId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "content" JSONB NOT NULL;

-- DropTable
DROP TABLE "Content";

-- DropTable
DROP TABLE "ListItem";
