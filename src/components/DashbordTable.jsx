import React from "react";

const DashbordTable = () => {
  const peopleData = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Michael Johnson", email: "michael@example.com" },
    { name: "Emily Brown", email: "emily@example.com" },
    { name: "Daniel Wilson", email: "daniel@example.com" },
    { name: "Sarah Taylor", email: "sarah@example.com" },
    { name: "Matthew Anderson", email: "matthew@example.com" },
    { name: "Jessica Martinez", email: "jessica@example.com" },
    { name: "William Thomas", email: "william@example.com" },
    { name: "Olivia Garcia", email: "olivia@example.com" },
  ];

  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="container mx-auto py-[120px]">
          <table className="min-w-full divide-y divide-gray-200 py-5">
            <thead className="bg-[#E5EDE8] divide-gray-200">
              <tr className="text-black bg-[#E5EDE8] rounded-lg">
                <th className="px-6 py-4 whitespace-nowrap">Name</th>
                <th className="px-6 py-4 whitespace-nowrap">Email</th>
                <th className="px-6 py-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {peopleData.map((person, index) => (
                <tr
                  key={index}
                  className="text-black bg-[#E5EDE8] rounded-lg py-5"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {person.email}
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="bg-bgbtn text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                        Accept
                      </button>
                      <button className="bg-red-600 text-white text-[12px] w-full h-[40px] rounded-lg hover:bg-opacity-[50%] transition-all duration-200">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashbordTable;
