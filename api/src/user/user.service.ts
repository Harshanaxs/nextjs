import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly vendorRepository: Repository<User>,
  ) {}
  async create(dto: CreateUserDto) {
    const user = await this.vendorRepository.findOne({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('email duplicated');

    const newUser = await this.vendorRepository.create({
        ...dto,
        password: await hash(dto.password, 10),
      
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findByEmail(email: string) {
    return await this.vendorRepository.findOne({
      where: {
        email: email,
      },
    });
  }
  async findById(id: number) {
    return await this.vendorRepository.findOne({
      where: {
        vendor_id: id,
      },
    });
  }
}
