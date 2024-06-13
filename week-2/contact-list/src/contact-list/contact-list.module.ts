import { Module } from '@nestjs/common';
import { ContactListController } from './contact-list.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContactListService } from './contact-list.service';

@Module({
  controllers: [ContactListController],
  providers: [ContactListService],
  imports: [PrismaModule],
})
export class ContactListModule {}
