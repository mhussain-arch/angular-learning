// This is how our tickets should look like
export interface Ticket {
    id: string;
    title: string;
    request: string;
    status: 'open' | 'closed';
};