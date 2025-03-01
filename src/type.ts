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
export interface CreativeCirclesProps {
  imageSrc: string;
  title: string;
  description: string;
  description2?: string;
    reverse?: boolean;
    hasToggle?: boolean;
    toggleTitle?: string;
    toggleContent?: string;
    toggleLinkText?: string;
    toggleLinkHref?: string;
}
export interface SponsorCardProps {
  imageSrc: string;
  title: string;
  price?: string;
  benefits: string[];
  buttonText: string;
  heading?: string;
  heading2?: string;
  additionalBenefits?: string[];
}

