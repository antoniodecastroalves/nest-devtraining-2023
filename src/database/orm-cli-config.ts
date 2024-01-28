import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { CreateCoursesTable1705612803344 } from './../migrations/1705612803344-CreateCoursesTable'
import { CreateTagsTable1705617261348 } from './../migrations/1705617261348-CreateTagsTable'
import { CreateCoursesTagsTable1705695852261 } from './../migrations/1705695852261-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1705701961514 } from 'src/migrations/1705701961514-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1705961908561 } from 'src/migrations/1705961908561-AddTagsIdToCoursesTagsTable'
import { Course } from 'src/courses/entities/courses.entity'
import { Tag } from 'src/courses/entities/tags.entity'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
}

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705612803344,
    CreateTagsTable1705617261348,
    CreateCoursesTagsTable1705695852261,
    AddCoursesIdToCoursesTagsTable1705701961514,
    AddTagsIdToCoursesTagsTable1705961908561,
  ],
})
