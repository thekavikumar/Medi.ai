import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./Navbar";

const Profile = () => {
	const { currentUser, getData, userData } = useAuth();

	React.useEffect(() => {
		getData();
	}, []);
	const [userDat, setUserDat] = React.useState([]);
	React.useEffect(() => {
		if (userData) {
			setUserDat(userData);
		}
	});

	const handleLogout = () => {
		auth
			.signOut()
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="">
			<Navbar />
			<div className="mt-24 ">
				<div className="flex justify-around  p-11 border-2 border-[#03C988] mx-10">
					<img
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
						alt=""
						className="h-36 w-36 rounded-full self-start"
					/>

					<div className=" space-y-12 ">
						<p>Email : {currentUser.email}</p>
						<p>Phone Number : {userDat.phone}</p>

						<button
							onClick={handleLogout}
							className="px-4 py-3 w-full bg-[#03C988]    rounded-md text-white hover:bg-white hover:text-black border-2 border-[#03C988]"
						>
							LogOut
						</button>
					</div>
				</div>
				<div>
					<h1 className="mt-24 mb-4 font-medium text-2xl mx-10 ">Records</h1>
					<hr className="border-2 border-[#03C988] mx-10 mb-16" />
					<div className="grid grid-cols-3 px-16 gap-10 itme">
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt=""
							className="h-36 w-36 rounded-full  mx-auto"
						/>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt=""
							className="h-36 w-36 rounded-full  mx-auto"
						/>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt=""
							className="h-36 w-36 rounded-full mx-auto"
						/>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt=""
							className="h-36 w-36 rounded-full mx-auto"
						/>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt=""
							className="h-36 w-36 rounded-full mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
