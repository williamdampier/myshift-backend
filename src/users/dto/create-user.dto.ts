import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, Length, IsEmail } from 'class-validator';
export class CreateUserDTO {
  @ApiProperty({
    example: 'qwerty123@email.com',
    description: 'Unique email address',
    required: true,
  })
  @IsString({ message: 'must be a String' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: 'qwerty123',
    description: 'User password',
    required: true,
  })
  @IsString({ message: 'must be a String' })
  @Length(4, 16, { message: 'Password length must be Min:4, Max: 16 symbols' })
  readonly password: string;
}
