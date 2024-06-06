import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddContactDto } from './dto/add-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactListService {
  constructor(private readonly prisma: PrismaService) {}

  async add(addContactDto: AddContactDto) {
    try {
      addContactDto.createdAt = new Date();
      return await this.prisma.contacts.create({
        data: addContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async edit(id: number, updateContactDto: UpdateContactDto) {
    try {
      updateContactDto.updatedAt = new Date();
      return await this.prisma.contacts.update({
        where: { id, deletedAt: null },
        data: updateContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.contacts.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      });
    } catch (error) {
      return error.message;
    }
  }

  async searchName(name: string) {
    try {
      return await this.prisma.contacts.findMany({
        where: {
          name: {
            startsWith: name,
          },
          deletedAt: null,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async searchAll() {
    try {
      return await this.prisma.contacts.findMany({
        where: { deletedAt: null },
      });
    } catch (error) {
      return error.message;
    }
  }
}
