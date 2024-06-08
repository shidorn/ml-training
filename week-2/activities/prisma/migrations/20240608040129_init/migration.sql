/*
  Warnings:

  - You are about to drop the column `description` on the `habit` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `habit` table. All the data in the column will be lost.
  - You are about to drop the `log` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `goalId` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `habit` DROP FOREIGN KEY `Habit_userId_fkey`;

-- DropForeignKey
ALTER TABLE `log` DROP FOREIGN KEY `Log_habitId_fkey`;

-- AlterTable
ALTER TABLE `habit` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `goalId` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `userId` INTEGER NULL;

-- DropTable
DROP TABLE `log`;

-- CreateTable
CREATE TABLE `Goal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `habitId` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `completed` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Goal` ADD CONSTRAINT `Goal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Habit` ADD CONSTRAINT `Habit_goalId_fkey` FOREIGN KEY (`goalId`) REFERENCES `Goal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Habit` ADD CONSTRAINT `Habit_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_habitId_fkey` FOREIGN KEY (`habitId`) REFERENCES `Habit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
