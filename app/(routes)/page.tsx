import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const Home = async () => {
	const billboard = await getBillboard("5a2dbabc-8aec-48a7-b198-23af1c397041");
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default Home;
