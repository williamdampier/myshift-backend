import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

//interface for creating objects from this class
interface ShiftAttributes {
  id: string;
  start: string;
  end: string;
  day: number;
  month: string;
  year: number;
  total: number;
  location?: string;
  userId: string;
}

@Table({ tableName: 'shifts' })
export class Shift extends Model<Shift, ShiftAttributes> {
  @ApiProperty({ example: '123-qwerty', description: 'Unique Shift ID' })
  @Column({
    type: DataType.STRING,
    unique: true,
    autoIncrement: false,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: '12:00',
    description: 'Shift start time',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  start: string;

  @ApiProperty({
    example: '23:45',
    description: 'Shift end time',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  end: string;

  @ApiProperty({
    example: '19',
    description: 'Day',
    required: true,
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  day: number;

  @ApiProperty({
    example: 'April',
    description: 'Month',
    required: true,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  month: string;

  @ApiProperty({
    example: '2023',
    description: 'Year',
    required: true,
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @ApiProperty({
    example: '9.5',
    description: 'total hours',
    required: true,
  })
  @Column({ type: DataType.FLOAT, allowNull: false })
  total: number;

  @ApiProperty({
    example: 'Auckland point 1',
    description: 'Location description',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  location: string;

  @ApiProperty({
    example: 'User1',
    description: 'Post author',
    required: true,
  })
  @Column({ type: DataType.STRING })
  @ForeignKey(() => User)
  userId: string;
}
