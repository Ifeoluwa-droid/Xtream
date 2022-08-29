import React from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import { useMediaQuery } from "@mui/material";

const AppLayout = () => {
	const mediaMatchesMaxWidth700 = useMediaQuery("(max-width: 700px)");

	return (
		<>
			<Header />
			{mediaMatchesMaxWidth700 && <Drawer />}
		</>
	);
};

export default AppLayout;
