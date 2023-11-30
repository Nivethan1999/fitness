import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export async function createPersonalTrainer(
    prevState:any,
    formData: FormData,
  ) {
    const url = "https://afefitness2023.azurewebsites.net/api/Users";
    const session = await getServerSession(authOptions);
    const newPersonalTrainer = {
      userId: 0,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      accountType: "PersonalTrainer",
    };
  
    try {
      await axios.post(url, newPersonalTrainer, {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      revalidateTag("clients");
      return { message: "Personal Trainer created successfully", success: true };
    } catch (error) {
      return { message: `Failed with error: ${error}`, success: false };
    }
  }