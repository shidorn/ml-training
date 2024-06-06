import { PartialType } from '@nestjs/mapped-types';
import { AddContactDto } from './add-contact.dto';

export class UpdateContactDto extends PartialType(AddContactDto) {}
