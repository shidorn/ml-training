"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactListService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContactListService = class ContactListService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(createContactDto) {
        try {
            createContactDto.createdAt = new Date();
            return await this.prisma.contacts.create({
                data: createContactDto,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async edit(id, updateContactDto) {
        try {
            updateContactDto.updatedAt = new Date();
            return await this.prisma.contacts.update({
                where: { id },
                data: updateContactDto,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async delete(id) {
        try {
            return await this.prisma.contacts.delete({
                where: { id },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async searchName(name) {
        try {
            return await this.prisma.contacts.findMany({
                where: {
                    name: {
                        startsWith: name,
                    },
                },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async searchAll() {
        try {
            return await this.prisma.contacts.findMany();
        }
        catch (error) {
            return error.message;
        }
    }
};
exports.ContactListService = ContactListService;
exports.ContactListService = ContactListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactListService);
//# sourceMappingURL=contact-list.service.js.map