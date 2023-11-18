import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Users {
  id:Number,
  name: String,
  username: String,
  gander: String,
  discription: String,
}

// const Users = async (): Promise<Users[]> => {
//   const result = await fetch("http://localhost:4000/users");
//   return result.json();
// };

// async function users(): Promise<Users[]> {
//   const result = await fetch("localhost:4000/users");
//   return result.json();
// }

export default async function Home() {
  // const users = await Users();
  // console.log(users);
  return (
    <main className="">
    
    </main>
  );
}
