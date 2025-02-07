import React from "react";
import CreateEventForm from "@/features/create-package/components/CreateEventForm";
import HomePageContainer from "@/app/layout";

const CreateEventPage: React.FC = () => {
  return (
    <HomePageContainer>
      <CreateEventForm /> {/* Pass props to your form */}
    </HomePageContainer>
  );
};

export default CreateEventPage;
