import { Module } from '@nestjs/common';
import { PassesController } from './passes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pass } from './passes.entity';
import { PassesService } from './passes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pass])],
  controllers: [PassesController],
  providers: [PassesService],
})
export class PassesModule {}
