export type Availability = {
  [day: string]: { start: string; end: string } | "Closed";
};

export interface IService {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

export interface IReview {
  id: number;
  reviewerName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface IProfessional {
  id: number;
  name: string;
  imageUrl: any; // Since this is an imported image, you may need to use ImageSourcePropexport Type if using React Native
  rating: number;
  price: string;
  role: string;
  reviews: number;
  bookmarked: boolean;
  status: string;
  tags: string[];
  about: string;
  phoneNumber: string;
  email: string;
  address: string;
  availability: Availability;
  services: IService[];
  reviewsData: IReview[];
}
