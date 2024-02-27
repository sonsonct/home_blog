import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
