import EditGuidePageComponent from "@/components/pages/EditGuidePageComponent";
import { useRouter } from "next/router";

export default function EditGuide() {
	const router = useRouter();
	const { id } = router.query;
	return <EditGuidePageComponent id={id as string} />;
}
