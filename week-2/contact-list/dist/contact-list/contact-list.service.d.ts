import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactListService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    add(createContactDto: CreateContactDto): Promise<any>;
    edit(id: number, updateContactDto: UpdateContactDto): Promise<any>;
    delete(id: number): Promise<any>;
    searchName(name: string): Promise<any>;
    searchAll(): Promise<any>;
}
