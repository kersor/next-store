import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {message: 'Email не корректный'})
    email: string

    @MinLength(5, {message: 'Минималльное количество символов в пароле 5'})
    @IsString()
    password: string
}