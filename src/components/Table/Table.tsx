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
  data: Record<string, string | number | undefined>[];
  caption?: string;
}

export default function DynamicTable({ data, caption }: DynamicTableProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      {caption && <TableCaption>{caption}</TableCaption>}
      <Table className="w-full border border-gray-200 shadow-sm rounded-lg">

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
                    "font-medium"
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
