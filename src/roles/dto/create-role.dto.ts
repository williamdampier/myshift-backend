import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
export class CreateRoleDTO {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Role value',
  })
  value: string;
  @ApiProperty({
    example: 'Administrator role',
    description: 'Role description',
  })
  description: string;
}
