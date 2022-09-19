import React from "react"
import Drawer from "../drawer/Drawer"
import Header from "../header/Header"
import { useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
	const mediaMatchesMaxWidth700 = useMediaQuery("(max-width: 700px)");

	return (
		<>
			<Header />
			<Outlet/>
			{mediaMatchesMaxWidth700 && <Drawer />}
		</>
	);
};

export default AppLayout;
