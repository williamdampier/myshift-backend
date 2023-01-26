import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Get,
  Query,
} from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { GetShiftsDto } from './dto/get-shifts.dto';

@Controller('shifts')
export class ShiftsController {
  constructor(private shiftService: ShiftsService) {}
  @Post()
  createShift(@Body() dto: CreateShiftDto) {
    return this.shiftService.createShift(dto);
  }
  @Get()
  getAllShiftsByUser(@Query() dto: GetShiftsDto) {
    return this.shiftService.getAllShiftsByUser(dto);
  }
  @Delete('/:id')
  deleteShift(@Param('id') id: string) {
    return this.shiftService.deleteShift(id);
  }
}
