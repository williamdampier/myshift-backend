import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './shifts.model';
import { CreateShiftDto } from './dto/create-shift.dto';
import { GetShiftsDto } from './dto/get-shifts.dto';
import * as uuid from 'uuid';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ShiftsService {
  constructor(@InjectModel(Shift) private shiftRepository: typeof Shift) {}

  async createShift(dto: CreateShiftDto) {
    const id = uuid.v4();
    const shift = await this.shiftRepository.create({ id, ...dto });
    return shift;
  }

  async getAllShiftsByUser(dto: GetShiftsDto) {
    const shifts = await this.shiftRepository.findAll({ where: { ...dto } });
    return shifts;
  }

  async deleteShift(id: string) {
    try {
      const deletedRecord = await this.shiftRepository.destroy({
        where: { id },
      });
      return 'Shift has been deleted';
    } catch (error) {
      return new HttpException('Record not found', HttpStatus.NOT_FOUND);
    }
  }
}
