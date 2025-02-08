export type EventData = {
  id: string;
  emailSubject?: string | undefined;
  customerName?: string | undefined;
  description?: string | undefined;
  packageType?: string;
  guestEmailList?: string[] | undefined;
  file?: File | null;
  dateTime?: string | null;
  place: string;
  guestEmail: string;
};
