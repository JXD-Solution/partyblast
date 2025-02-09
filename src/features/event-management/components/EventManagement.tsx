"use client";
import DataTable from "@/components/DataTable/DataTable";
import { EventData } from "@/features/create-package";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreatePackage from "@/features/create-package/components/CreateEventForm";

type EventManagementProps = {
  eventData: EventData[];
};

const EventManagement = ({ eventData }: EventManagementProps) => {
  const [rowSelection, setRowSelection] = useState<string[]>([]);
  const [isCreateNewEvent, setIsCreateNewEvent] = useState<boolean>(false);

  const columns = [
    { label: "Customer Name", key: "customerName", hidden: false },
    { label: "Package Type", key: "packageType", hidden: false },
    { label: "Date & Time", key: "dateTime", hidden: false },
  ];

  const menuActions = (rowId: string) => [
    {
      label: "View",
      icon: <VisibilityIcon color="primary" />,
      onClick: () => setIsCreateNewEvent(true),
    },
    {
      label: "Edit",
      icon: <EditIcon color="primary" />,
      onClick: () => setIsCreateNewEvent(true),
    },
    {
      label: "Delete",
      icon: <DeleteIcon color="error" />,
      onClick: () => setIsCreateNewEvent(true),
    },
  ];

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search logic
  };

  const handleRefresh = () => {
    console.log("Refreshing data");
    // Implement refresh logic
  };

  return (
    <>
      {!isCreateNewEvent ? (
        <DataTable
          data={eventData}
          columns={columns}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          menuActions={menuActions}
          totalCount={eventData.length}
          filterValue={""}
          title="Event Management"
          handleSearch={handleSearch}
          showAddAction
          handleRefresh={handleRefresh}
        />
      ) : (
        <CreatePackage />
      )}
    </>
  );
};

export default EventManagement;
