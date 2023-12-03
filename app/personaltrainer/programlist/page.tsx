

import WorkoutProgramList from "@/components/WorkoutProgramList";
import CreateWorkoutProgram from "@/components/CreateProgram";
// import CreateWorkoutProgram from "@/components/CreateWorkoutProgram";
import AddExercise from "@/components/AddExercise";
// import {
//   checkSession,
//   getAllClients,
//   getAllExercises,
//   getTrainerWorkoutPrograms,
// } from "@/server/actions";
import {
  checkSession,
  getAllClients,
  getAllExercises,
  getTrainerWorkoutPrograms,
} from "@/services/TrainerService";

export default async function WorkoutProgramsPage() {
  const session = await checkSession();
  const workoutPrograms = await getTrainerWorkoutPrograms();
  const exercises = await getAllExercises();
  const clients = await getAllClients();

  return (
    <main className="display:flex min-h-screen flex flex-col items-center justify-between">
      <div className="w-full p-4">
        <div className="bg-gray-200 p-6 shadow-2xl border-4 border-gray-100-300 rounded-t-2xl mb-12">
          <h2 className="text-4xl text-center text-gray-800 pb-8">
            {session?.name}
            {"'s"} Workout programs
          </h2>
          <WorkoutProgramList workoutPrograms={workoutPrograms.data} />
        </div>
      </div>
    </main>
  );
}
