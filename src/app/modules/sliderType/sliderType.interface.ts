export interface ISliderType {
    name: string;          // e.g., "hero", "banner"
    description?: string;  // optional description
    isActive?: boolean;
    iconUrl?:string;
    createdAt?: Date;
    updatedAt?: Date;
}
