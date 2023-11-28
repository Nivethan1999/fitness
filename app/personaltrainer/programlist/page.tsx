import WorkoutProgramList from "@/components/WorkoutProgramList";
import CreateWorkoutProgram from "@/components/CreateProgram";
// import AddExercise from "@/components/AddExercise";
import {
//   checkSession,
  getAllClients,
  getAllExercises,
  getTrainerWorkoutPrograms,
} from "@/services/TrainerService";

export default async function WorkoutProgramsPage() {
//   const session = await checkSession();
  const workoutPrograms = await getTrainerWorkoutPrograms();
//   const exercises = await getAllExercises();
//   const clients = await getAllClients();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="w-full max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      {/* {session?.name} */}
      {"'s"} Workout programs
    </h2>
    <WorkoutProgramList workoutPrograms={workoutPrograms.data} />
  </div>
</main>

  );
}