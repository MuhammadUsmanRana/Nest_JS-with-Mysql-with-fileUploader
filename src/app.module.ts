import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Posts } from './typeorm/entities/Post';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,  
      username: 'root',
      password: '',
      database: 'nestjs_mysql_tutorial',
      entities: [User, Profile, Posts],
      synchronize: true,
    }),
    UsersModule,
  ],  

  controllers: [],
  providers: [],
})
export class AppModule {}
