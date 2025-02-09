import EventManagement from "@/features/event-management/components/EventManagement";
import { mockRow } from "@/mock/page";

const Page = () => {
  return <EventManagement eventData={mockRow} />;
};

export default Page;
