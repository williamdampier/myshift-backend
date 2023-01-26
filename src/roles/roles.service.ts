import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { CreateRoleDTO } from './dto/create-role.dto';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDTO): Promise<Role> {
    const existingRole = await this.getRoleByValue(dto.value);

    if (existingRole) {
      throw new HttpException('Role exists', HttpStatus.BAD_REQUEST);
    }
    const role = await this.roleRepository.create(dto);
    return role;
  }
  async getRoleByValue(value: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }
}
