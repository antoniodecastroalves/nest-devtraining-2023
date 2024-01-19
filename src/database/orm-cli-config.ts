import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1705612803344 } from './../migrations/1705612803344-CreateCoursesTable';
import { CreateTagsTable1705617261348 } from './../migrations/1705617261348-CreateTagsTable';
import { CreateCoursesTagsTable1705695852261 } from './../migrations/1705695852261-CreateCoursesTagsTable';


export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705612803344, 
    CreateTagsTable1705617261348, 
    CreateCoursesTagsTable1705695852261],
})

