import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-between items-center mx-10 my-4 ">
				<h1 className="text-3xl text-[#03C988] font-medium tracking-widest">
					Patient
				</h1>
				<div className="flex justify-between space-x-10 text-lg">
					<Link
						to={"/"}
						className="px-2 py-1 border-b-2 border-white hover:border-b-2 hover:border-[#03C988] transition-all ease-in"
					>
						Home
					</Link>
					<Link
						to={"/profile"}
						className="px-2 py-1 border-b-2 border-white hover:border-b-2 hover:border-[#03C988] transition-all ease-in"
					>
						Profile
					</Link>
					<Link
						to={"/profile"}
						className="px-2 py-1 border-b-2 border-white hover:border-b-2 hover:border-[#03C988] transition-all ease-in"
					>
						Requests
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
