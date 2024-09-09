export interface Event {
    id: number;
    type: "online" | "locate"
    title: string;
    description?: string;
    date: Date;
    link?: string;
    location?: string;
    isPassed: boolean;
}