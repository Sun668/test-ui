import "reflect-metadata";
import { DataSource } from "typeorm";
import * as entities from "./entity";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: 'databaseUrl',
  port: 3306,
  username: 'databaseUserName',
  name: "default",
  password: 'databasePassword',
  database: 'databaseName',
  synchronize: process.env.DEPLOY_ENV === "development",
  logging: process.env.DEPLOY_ENV === "development",
  entities,
  subscribers: [],
});

export async function getAppDataSource() {
  if (!AppDataSource.isInitialized) {
    const promise = new Promise((resolve) => {
      AppDataSource.initialize()
        .then(async () => {
          console.log("Connect to mysql success...");
          resolve(true);
        })
        .catch((error) => {
          console.log("Connect to mysql failed", error);
          resolve(false);
        });
    });
    await promise;
  }
  return AppDataSource;
}
