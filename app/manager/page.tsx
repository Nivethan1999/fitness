import { checkSession } from "@/services/TrainerService";
import CreatePersonalTrainerForm from "./CreatePersonalTrainer";

export default async function ManagerPage() {
  const session = await checkSession();
  return <CreatePersonalTrainerForm />;
}
