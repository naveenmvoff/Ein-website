// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// const Tables = ({ tableData }) => {
//   const headers = Object.keys(tableData[0]);
//   // return (
//   //   <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
//   //     <thead className="bg-gray-100">
//   //       <tr>
//   //         {headers.map((h) => (
//   //           <th
//   //             key={h}
//   //             className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
//   //           >
//   //             {h}
//   //           </th>
//   //         ))}
//   //       </tr>
//   //     </thead>
//   //     <tbody className="bg-white divide-y divide-gray-200">
//   //       {tableData.map((row, i) => (
//   //         <tr
//   //           key={i}
//   //           className={i % 2 === 0 ? "bg-white" : "bg-gray-50"} // alternating row colors
//   //         >
//   //           {headers.map((h) => (
//   //             <td key={h} className="px-6 py-4 text-sm text-gray-600">
//   //               {row[h as keyof typeof row]}
//   //             </td>
//   //           ))}
//   //         </tr>
//   //       ))}
//   //     </tbody>
//   //   </table>
//   // );
//   return (
//     <>
//       <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Invoice</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Method</TableHead>
//             <TableHead className="text-right">Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">INV001</TableCell>
//             <TableCell>Paid</TableCell>
//             <TableCell>Credit Card</TableCell>
//             <TableCell className="text-right">$250.00</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </>
//   );
// };

// export default Tables;

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DynamicTableProps {
  data: Record<string, string | number>[];
  caption?: string;
}

export default function DynamicTable({ data, caption }: DynamicTableProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const headers = Object.keys(data[0]);
console.log("headdd", headers)
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border border-gray-200 shadow-sm rounded-lg">
        {caption && <TableCaption>{caption}</TableCaption>}

        <TableHeader>
          <TableRow>
            {headers.map((h) => (
              <TableHead
                key={h}
                className="font-semibold text-gray-700 capitalize"
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i} className="hover:bg-gray-50 transition-colors">
              {headers.map((h) => (
                <TableCell
                  key={h}
                  className={`${
                    h.toLowerCase().includes("total") &&
                    "text-right font-medium"
                  }`}
                >
                  {row[h]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
