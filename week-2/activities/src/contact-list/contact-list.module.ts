import { Module } from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { ContactListController } from './contact-list.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ContactListService],
  controllers: [ContactListController],
  imports: [PrismaModule],
})
export class ContactListModule {}
