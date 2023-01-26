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
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { Shift } from './shifts.model';

@Controller('shifts')
export class ShiftsController {
  constructor(private shiftService: ShiftsService) {}

  @ApiOperation({ summary: 'Create shift' })
  @ApiResponse({ status: 200, type: Shift })
  @Post()
  createShift(@Body() dto: CreateShiftDto) {
    return this.shiftService.createShift(dto);
  }

  @ApiOperation({ summary: 'get list of shifts, filters may apply' })
  @ApiResponse({ status: 200, type: [Shift] })
  @Get()
  getAllShiftsByUser(@Query() dto: GetShiftsDto) {
    return this.shiftService.getAllShiftsByUser(dto);
  }

  @ApiOperation({ summary: 'get list of shifts, filters may apply' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteShift(@Param('id') id: string) {
    return this.shiftService.deleteShift(id);
  }
}
