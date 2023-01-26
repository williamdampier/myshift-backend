import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShiftDto {
  @ApiProperty({
    example: '12:00',
    description: 'Shift start time',
  })
  @IsString({ message: 'Must be a String' })
  readonly start: string;

  @ApiProperty({
    example: '23:00',
    description: 'Shift end time',
  })
  @IsString({ message: 'Must be a String' })
  readonly end: string;

  @ApiProperty({
    example: '27',
    description: 'Shift day of the month',
  })
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly day: number;

  @ApiProperty({
    example: 'July',
    description: 'Shift month',
  })
  @IsString({ message: 'Must be a String' })
  readonly month: string;

  @ApiProperty({
    example: '2023',
    description: 'Shift year',
  })
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly year: number;

  @ApiProperty({
    example: '9.5',
    description: 'Shift total hours',
  })
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  readonly total: number;

  @ApiProperty({
    example: 'Albany, Auckland',
    description: 'Shift location',
  })
  @IsOptional()
  @IsString({ message: 'Must be a String' })
  readonly location: string;

  @ApiProperty({
    example: '2oi22o-wqqqw0-qqse-223',
    description: 'User Id shifts belongs to',
  })
  @IsString({ message: 'Must be a String' })
  readonly userId: string;
}
