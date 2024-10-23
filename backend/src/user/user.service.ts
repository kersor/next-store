import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(readonly prisma: PrismaService) {}

    async createOneUser (dto: CreateUserDto) {
        const {password, email} = dto

        const candidate = await this.checkEmail(email)
        if(candidate) throw new BadRequestException('Аккаунт с таким Email уже зарегестрирован')

        const hash = await bcrypt.hash(password, 10)
        return hash
    }

    async checkEmail (email: string) {
        const candidate = await this.prisma.user.findFirst({where: {email: email}})
        return candidate
    }
}
