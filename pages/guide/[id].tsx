import GuidePageComponent from "@/components/pages/GuidePageComponent";
import { useRouter } from "next/router";

export default function Guide() {
	const router = useRouter();
	const { id } = router.query;
	return <GuidePageComponent id={id as string} />;
}
