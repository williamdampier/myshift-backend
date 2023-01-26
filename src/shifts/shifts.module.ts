import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shift } from './shifts.model';
import { User } from 'src/users/user.model';

@Module({
  controllers: [ShiftsController],
  providers: [ShiftsService],
  imports: [JwtModule, SequelizeModule.forFeature([User, Shift])],
})
export class ShiftsModule {}
