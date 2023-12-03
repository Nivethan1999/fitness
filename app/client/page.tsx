import WorkoutProgramList from "@/components/WorkoutProgramList";
import { getClientWorkoutPrograms} from "@/services/ClientService";
import { checkSession } from "@/services/TrainerService";
import { redirect } from "next/navigation";
import Layout from "../layout";

export default async function ClientPage() {
  const workoutPrograms = await getClientWorkoutPrograms();
  const session = await checkSession();
  if (session?.role?.toLowerCase() !== "client") {
    redirect("/");
  }
  return (
    <Layout>
    <main className="px-4 flex min-h-screen flex-col items-center justify-between">
      <div className="w-full py-4">
        <div className="bg-gray-200 shadow-2xl border-4 border-gray-100-300 rounded-t-2xl mb-12">
          <h2 className="text-4xl text-center text-gray-800 py-8">
            {session?.name}
            {"'"}s Workout programs
          </h2>
          <WorkoutProgramList workoutPrograms={workoutPrograms.data} />
        </div>
      </div>
    </main>
    </Layout>
  );
}