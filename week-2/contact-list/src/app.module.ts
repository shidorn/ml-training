import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContactListService } from './contact-list/contact-list.service';
import { ContactListModule } from './contact-list/contact-list.module';

@Module({
  imports: [PrismaModule, ContactListModule],
  controllers: [AppController],
  providers: [AppService, ContactListService],
})
export class AppModule {}
