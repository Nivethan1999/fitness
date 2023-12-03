import { checkSession } from "@/services/TrainerService";
import CreatePersonalTrainerForm from "../../components/CreatePersonalTrainer";

export default async function ManagerPage() {
  const session = await checkSession();
  return (
    <main className="flex items-center">
      <CreatePersonalTrainerForm />;
    </main>
    
  ) 
}

