import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetShiftsDto {
  @IsString({ message: 'Must be a String' })
  readonly userId: string;

  @IsOptional()
  @IsString({ message: 'Must be a String' })
  readonly location: string;

  @IsOptional()
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly day: number;

  @IsOptional()
  @IsString({ message: 'Must be a String' })
  readonly month: string;

  @IsOptional()
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly year: number;
}
