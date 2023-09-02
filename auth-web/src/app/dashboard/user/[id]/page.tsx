import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Profile } from "@/components/profile";
import { Backend_URL } from "@/lib/Constants";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const response = await fetch(Backend_URL + `/user/${props.params.id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  // console.log({ response });
  const user = await response.json();

  return (
    <div className="m-2 border rounded shadow overflow-hidden">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">
        User Profile
      </div>
      <Profile name={user.name} email={user.email} />
    </div>
  );
};

export default ProfilePage;
