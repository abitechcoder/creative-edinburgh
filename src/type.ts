export type Member = {
  id: number;
  title: string;
  description: string;
  description2?: string;
  image: string;
  link: string;
  date: string | number;
};
export interface UniqueEventsProps {
  title: string;
  description: string[];
  imageSrc: string;
  altText: string;
}

export interface VisionMissionProps {
  imageSrc: string;
  title?: string;
  text: string;
  text2?: string;
  text3?: string;
  isImageLeft: boolean;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  responsibilities: string[];
}
