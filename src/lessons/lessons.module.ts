import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '../shared/database/database.constant';
import { LessonDatabaseName, LessonSchema, LessonsEntity } from './lessons.schema';

@Module({
  providers: [LessonsService, LessonsResolver],
  imports:[MongooseModule.forFeature(
    [
      {
        name: LessonsEntity.name,
        schema: LessonSchema,
        collection: LessonDatabaseName,
      },
    ],
    DATABASE_CONNECTION_NAME
  )]
})
export class LessonsModule {}
