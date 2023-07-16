import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const Home = async () => {
	const billboard = await getBillboard("5a2dbabc-8aec-48a7-b198-23af1c397041");

	const products = await getProducts({ isFeatured: true });
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />

				<div className="flex flex-col gap-y-8 px-4 sm:px-6lg:px-8 ">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default Home;
