import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..','client')}
    })
  ],
  import {ServerStaticModule } from '@nestjs/server-satatic';
  import {join} from 'patch';
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
