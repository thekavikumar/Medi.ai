import React from "react";
import PatNav from "../PatNav";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";
import dayjs from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Book() {
  const { getData, userData } = useAuth();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getData();
    if (userData) {
      setData(userData);
    }
  }, []);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [value, setValue] = React.useState(dayjs("2018-01-01T00:00:00.000Z"));
  const [issues, setIssues] = React.useState("");
  //   console.log(value.$d);
  const options = [
    { value: "appolo", label: "Appolo" },
    { value: "amar hospital", label: "Amar Hospital" },
    { value: "government hospital", label: "Government Hospital" },
  ];
  const [hospital, setHospital] = React.useState("");
  const handleChange = (options) => {
    setHospital(options);
  };
  React.useEffect(() => {
    if (data) {
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: name,
      email: email,
      phone: phone,
      hospital: hospital.value,
      issues: issues,
      date: value.$d,
    };
    console.log(formData);
  };
  return (
    <div>
      <PatNav />
      <form
        onSubmit={handleSubmit}
        className="w-full md:max-w-md mx-auto
      mt-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-center md:text-4xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                id="phone"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Hospital</label>
            <Select
              value={hospital}
              options={options}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Select Slot</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                className="border border-gray-300 rounded-md p-2"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Issues Faced</label>
            <textarea
              type="text"
              name="issues"
              value={issues}
              onChange={(e) => setIssues(e.target.value)}
              placeholder="Enter your issues here"
              id="issues"
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
              Book Appointment
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

export default Book;
