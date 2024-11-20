"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyData = [
  {
    // itemId: "ITEM001",
    equipmentName: "EQ001",
    itemName: "Dell Laptop",
    modelId: "MOD001",
    tagId: "TAG001",
    manufactureNo: "MFG123456",
    statusDetails: "Active",
    lineName: "IT Equipment",
    storeName: "Main Store",
    presentFactory: "Factory A",
    licenseNo: "LIC001",
    licenseDate: "2024-01-01",
    rcvNo: "RCV001",
    invoiceNo: "INV001",
    poNo: "PO001",
    supplier: "Dell Inc.",
    ownerFactory: "Factory A",
    vendorName: "Dell Distribution",
    unitPrice: "1200.00",
    currency: "USD",
    physicalLocation: "Floor 2, Room 201",
    ipAddress: "192.168.1.100",
    hostName: "DELL-LAT5420",
    operatingSystem: "Windows 11 Pro",
    provisionedSpace: "512GB",
    usedSpace: "256GB",
    memorySize: "512GB SSD",
    ramDetails: "16GB DDR4",
    cpuModel: "Intel i7-1185G7",
    cpuClock: "3.0GHz",
    ethernetDetails: "1Gbps",
    shipDate: "2023-12-15",
    startDate: "2024-01-01",
    expirationDate: "2027-01-01",
    subnetMask: "255.255.255.0",
    gateway: "192.168.1.1",
    dns: "8.8.8.8",
    platform: "Windows",
    remarks: "Executive laptop",
  },
  {
    // itemId: "ITEM002",
    equipmentName: "EQ002",
    itemName: "HP Server",
    itemVariation: "ProLiant DL380",
    modelId: "MOD002",
    tagId: "TAG002",
    manufactureNo: "MFG789012",
    statusDetails: "Active",
    lineName: "Server Equipment",
    storeName: "Server Room",
    presentFactory: "Factory B",
    licenseNo: "LIC002",
    licenseDate: "2024-02-01",
    rcvNo: "RCV002",
    invoiceNo: "INV002",
    poNo: "PO002",
    supplier: "HP Enterprise",
    ownerFactory: "Factory B",
    vendorName: "HP Distribution",
    unitPrice: "5000.00",
    currency: "USD",
    physicalLocation: "Server Room, Rack 3",
    ipAddress: "192.168.2.100",
    hostName: "HP-SERVER01",
    operatingSystem: "Windows Server 2022",
    provisionedSpace: "2TB",
    usedSpace: "1TB",
    memorySize: "2TB SSD RAID",
    ramDetails: "64GB ECC",
    cpuModel: "Intel Xeon Gold",
    cpuClock: "2.9GHz",
    ethernetDetails: "10Gbps",
    shipDate: "2024-01-15",
    startDate: "2024-02-01",
    expirationDate: "2029-02-01",
    subnetMask: "255.255.255.0",
    gateway: "192.168.2.1",
    dns: "8.8.4.4",
    platform: "Windows Server",
    remarks: "Production database server",
  },
];

const TableView = ({ data = dummyData }) => {
  const columns = [
    { key: "equipmentName", label: "Equipment Name" },
    { key: "itemName", label: "Item Name" },
    { key: "itemVariation", label: "Item Variation" },
    { key: "brandName", label: "Brand Name" },
    { key: "modelName", label: "Model Name" },
    { key: "tagId", label: "Tag ID" },
    { key: "manufactureNo", label: "Manufacture No" },
    { key: "statusDetails", label: "Status Details" },
    { key: "lineName", label: "Line Name" },
    { key: "storeName", label: "Store Name" },
    { key: "presentFactory", label: "Present Factory" },
    { key: "licenseNo", label: "License No" },
    { key: "licenseDate", label: "License Date" },
    { key: "rcvNo", label: "RCV No" },
    { key: "invoiceNo", label: "Invoice No" },
    { key: "poNo", label: "PO No" },
    { key: "supplier", label: "Supplier" },
    { key: "ownerFactory", label: "Owner Factory" },
    { key: "vendorName", label: "Vendor Name" },
    { key: "unitPrice", label: "Unit Price" },
    { key: "currency", label: "Currency" },
    { key: "physicalLocation", label: "Physical Location" },
    { key: "ipAddress", label: "IP Address" },
    { key: "hostName", label: "Host Name" },
    { key: "operatingSystem", label: "Operating System" },
    { key: "provisionedSpace", label: "Provisioned Space" },
    { key: "usedSpace", label: "Used Space" },
    { key: "memorySize", label: "Memory Size" },
    { key: "ramDetails", label: "RAM Details" },
    { key: "cpuModel", label: "CPU Model" },
    { key: "cpuClock", label: "CPU Clock" },
    { key: "ethernetDetails", label: "Ethernet Details" },
    { key: "shipDate", label: "Ship Date" },
    { key: "startDate", label: "Start Date" },
    { key: "expirationDate", label: "Expiration Date" },
    { key: "subnetMask", label: "Subnet Mask" },
    { key: "gateway", label: "Gateway" },
    { key: "dns", label: "DNS" },
    { key: "platform", label: "Platform" },
    { key: "remarks", label: "Remarks" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="bg-gray-100 px-4 py-3 whitespace-nowrap"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell
                    key={`${rowIndex}-${column.key}`}
                    className="px-4 py-3 whitespace-nowrap"
                  >
                    {row[column.key] || "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableView;
