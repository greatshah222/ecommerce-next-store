"use client";
import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";

interface NavbarActionsProps {}

const NavbarActions = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button className="flex items-center rounded-full  px-4 py-2 bg-black">
				<ShoppingBag color="white" size={20} />

				<span className="ml-2 text-sm font-semibold text-white">0</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
