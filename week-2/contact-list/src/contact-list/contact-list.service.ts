import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactListService {
  constructor(private readonly prisma: PrismaService) {}

  async add(createContactDto: CreateContactDto) {
    try {
      createContactDto.createdAt = new Date();
      return await this.prisma.contacts.create({
        data: createContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async edit(id: number, updateContactDto: UpdateContactDto) {
    try {
      updateContactDto.updatedAt = new Date();
      return await this.prisma.contacts.update({
        where: { id },
        data: updateContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.contacts.delete({
        where: { id },
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
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async searchAll() {
    try {
      return await this.prisma.contacts.findMany();
    } catch (error) {
      return error.message;
    }
  }
}
