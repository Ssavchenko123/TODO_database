import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('DB_HOST'),
        name: configService.get('DB_NAME'),
        dialect: configService.get('DB_DIALECT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        models: [],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
