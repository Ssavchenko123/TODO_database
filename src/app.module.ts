import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModule } from './TODO/todo.module';
import { Task } from './TODO/todo.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('DB_HOST'),
        name: configService.get('DB_NAME'),
        dialect: configService.get('DB_DIALECT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        port: Number(configService.get('DB_PORT')),
        models: [Task],
      }),
    }),
    TodoModule,
  ],
})
export class AppModule {}
