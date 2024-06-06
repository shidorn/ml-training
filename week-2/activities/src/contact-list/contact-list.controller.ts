import {
  Get,
  Delete,
  Patch,
  Post,
  Body,
  Controller,
  Param,
} from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { AddContactDto } from './dto/add-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contactList')
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Post()
  create(@Body() addContactDto: AddContactDto) {
    return this.contactListService.add(addContactDto);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactListService.edit(+id, updateContactDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.contactListService.delete(+id);
  }

  @Get(':name')
  search(@Param('name') name: string) {
    return this.contactListService.searchName(name);
  }

  @Get()
  searchAll() {
    return this.contactListService.searchAll();
  }
}
