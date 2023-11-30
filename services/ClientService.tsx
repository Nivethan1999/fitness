import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import WorkoutProgram from "@/models/WorkoutProgram";
export async function getClientWorkoutPrograms() {
    try {
      const session = await getServerSession(authOptions);
      const userId = session?.user?.id;
      const url =
        "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/client/" +
        userId;
      const response = await fetch(url, {
        next: { tags: ["clientWorkoutPrograms"] },
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      const data: WorkoutProgram[] = await response.json();
      return { data };
    } catch (error) {
      return { error: Error };
    }
  }
  