import { ContactListService } from './contact-list.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactListController {
    private readonly contactListService;
    constructor(contactListService: ContactListService);
    create(addContactDto: CreateContactDto): Promise<any>;
    edit(id: string, updateContactDto: UpdateContactDto): Promise<any>;
    delete(id: string): Promise<any>;
    search(name: string): Promise<any>;
    searchAll(): Promise<any>;
}
