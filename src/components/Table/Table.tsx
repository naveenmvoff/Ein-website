"use client"
import React from 'react';

interface DynamicTableProps {
  data: Record<string, string | number | undefined>[];
  caption?: string;
  note?: string;
}

const Table = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <table className={`w-full border-collapse ${className}`}>{children}</table>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-[#0086ff] sticky top-0 z-10">
    {children}
  </thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

const TableRow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <tr className={className}>{children}</tr>
);

const TableHead = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <th className={`px-4 py-3 text-center text-sm font-semibold text-white uppercase tracking-wider border border-black ${className}`}>
    {children}
  </th>
);

const TableCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-4 py-3 text-sm text-gray-800 border border-gray-200 ${className}`}>
    {children}
  </td>
);

const TableCaption = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-center py-3 text-gray-600 ${className}`}>
    {children}
  </div>
);

export default function DynamicTable({ data, caption, note }: DynamicTableProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-sm">No data available</p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="w-full mt-10 mb-6 px-4 sm:px-6 lg:px-8">
      {caption && (
        <div className="mb-3 px-2 flex justify-center">
          <h3 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-center">
            {caption}
          </h3>
        </div>
      )}
      
      <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-white">
        <div className="overflow-x-auto overflow-y-auto max-h-[600px] scrollbar-custom">
          <Table className="min-w-full">
            <TableHeader >
              <TableRow>
                {headers.map((h) => (
                  <TableHead key={h} className="whitespace-nowrap text-center">
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((row, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-blue-50 transition-colors"
                >
                  {headers.map((h) => (
                    <TableCell
                      key={h}
                      className={`whitespace-nowrap ${
                        h.toLowerCase().includes("total")
                          ? "font-semibold text-blue-700"
                          : ""
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
      </div>

      {note && (
        <TableCaption className="text-xs text-left px-2 text-gray-500 italic">
          {note}
        </TableCaption>
      )}

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #9ca3af #f3f4f6;
        }
      `}</style>
    </div>
  );
}