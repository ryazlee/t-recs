import UserProfilePageComponent from "@/components/pages/UserProfilePageComponent";
import { useRouter } from "next/router";

export default function ProfilePage() {
	const router = useRouter();
	const { id } = router.query;
	return <UserProfilePageComponent id={id as string} />;
}
