import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { ProductInventoryModule } from './product-inventory/product-inventory.module';
import { HabitTrackerModule } from './habit-tracker/habit-tracker.module';

@Module({
  imports: [TasksModule, PrismaModule, ContactListModule, ProductInventoryModule, HabitTrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
