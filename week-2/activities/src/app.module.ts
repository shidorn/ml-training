import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListModule } from './contact-list/contact-list.module';

@Module({
  imports: [TasksModule, PrismaModule, ContactListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
