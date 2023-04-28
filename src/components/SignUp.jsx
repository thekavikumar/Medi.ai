import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const options = [
    { value: "hospital", label: "Hospital" },
    { value: "patient", label: "Patient" },
  ];
  const [userType, setUserType] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirmation, setPasswordConfirmation] = React.useState("");
  const { signUpUser, currentUser } = useAuth();

  const handleChange = (options) => {
    setUserType(options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: name,
      email: email,
      phone: phone,
      userType: userType.value,
      password: password,
    };
    console.log(formData);

    if (email === "" || password === "" || phone === "" || name === "") {
      toast.error("Please fill all the fields");
      setLoading(false);
      return;
    }

    if (password !== password_confirmation) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    signUpUser(email, password, formData);
  };

  return (
    <div className="flex bg-slate-50 p-20 items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full md:max-w-md">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-center md:text-4xl font-bold text-gray-800">
            Sign Up
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              id="name"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="userType">Type Of User</label>
            <Select
              value={userType}
              options={options}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="password_confirmation"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              id="password_confirmation"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              id="phone"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex items-center justify-evenly gap-4 w-full">
            <button
              type="submit"
              className="bg-[#03C988] w-full text-white rounded-md p-2 hover:text-gray-900 border-2 border-[#03C988]  hover:bg-white"
            >
              {loading && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className={`inline w-4  h-4 mr-3  animate-spin`}
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              Sign Up
            </button>
            <Link to={"/"} className=" w-full">
              <button className=" w-full text-gray-900 rounded-md p-2 hover:text-white border-2 border-[#03C988]  hover:bg-[#03C988]">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}

export default SignUp;
