import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Role } from './role.model';

//Attributes interface not needed as we will not be creating objects manually

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '123', description: 'Unique Record ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: '123',
    description: 'Role Id',
    required: true,
  })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ApiProperty({
    example: '321',
    description: 'User Id',
    required: true,
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  userId: string;
}
