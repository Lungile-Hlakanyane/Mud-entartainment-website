export interface QuoteFormData {
 name: string;
 email: string;
 phone: string;
 company: string;
 eventType: string;
 eventDate: string;
 venue: string;
 guests: number | null;
 services: string[];
 message: string;
}