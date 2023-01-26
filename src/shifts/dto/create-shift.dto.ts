import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateShiftDto {
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly day: number;
  @IsString({ message: 'Must be a String' })
  readonly month: string;
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly year: number;
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly total: number;
  @IsString({ message: 'Must be a String' })
  readonly location: string;
  @IsString({ message: 'Must be a String' })
  readonly userId: string;
}
