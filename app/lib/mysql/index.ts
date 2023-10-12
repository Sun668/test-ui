import { AppDataSource as DataSource } from "./data-source";

DataSource.initialize()
  .then(async () => {
    console.log("Connect to mysql success...");
  })
  .catch((error) => console.log(error));

export const AppDataSource = DataSource;
