import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
=======
import { CoursesModule } from './courses/courses.module';

@Module({
>>>>>>> feat-introduction
  imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule {}
>>>>>>> feat-introduction
