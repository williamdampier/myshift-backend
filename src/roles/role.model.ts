import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-roles.model';

//interface for creating objects from this class
interface RoleAttributes {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleAttributes> {
  @ApiProperty({ example: '123', description: 'Unique Role ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'ADMIN',
    description: 'Unique role value',
    required: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'Standard User',
    description: 'Role description',
    required: true,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
