// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { PrismaService } from 'src/prisma.service';
// import { JwtService } from '@nestjs/jwt';

// @Module({
//   providers: [UserService, PrismaService, JwtService],
//   controllers: [UserController],
// })
// export class UserModule {}
// vendor/vendor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
