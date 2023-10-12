import { AritcleSummaryEntity } from "../entity";
import { getAppDataSource } from "../data-source";

async function getRepository() {
  return (await getAppDataSource()).getRepository(AritcleSummaryEntity);
}

export async function search() {
  const repo = await getRepository();

  const data = await repo.find();
  
  return data;
}