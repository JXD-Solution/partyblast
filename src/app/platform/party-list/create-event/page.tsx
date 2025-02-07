// app/platform/party-list/create-event/page.tsx
import React from "react";
import CreateEventForm from "@/features/create-package/components/CreateEventForm";
import HomePageContainer from "@/app/layout";

const CreateEventPage: React.FC = () => {
  return <CreateEventForm isCreatingEvent={true} />;
};

export default CreateEventPage;
