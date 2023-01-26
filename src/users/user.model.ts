import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from '../roles/role.model';
import { UserRoles } from 'src/roles/user-roles.model';
//interface for creating objects from this call -> compulsory email and pswd only
interface UserAttributes {
  id: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttributes> {
  @ApiProperty({ example: '123-qwerty', description: 'Unique User ID' })
  @Column({
    type: DataType.STRING,
    unique: true,
    autoIncrement: false,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: 'qwerty123@email.com',
    description: 'Unique email address',
    required: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({
    example: 'qwerty123',
    description: 'User password',
    required: true,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  //!TODO add Shift model
  // @HasMany(() => Shift)
  // posts: Shift[];
}
