export interface BusinessType {
  id: number;
  name: string;
  logo: string;
  ageOfOwner: number;
  genderOfOwner: "Male" | "Female" | "Other";
  businessAddress: string;
  contactDetails: string;
  coreProductOrService: string;
  description: string;
  disabilityInclusion: "Yes" | "No";
  registrationStatus: string;
  revenueBracket: string;
  sector: number;
  yearsInOperation: number;
  workforceNumber: number;
  workforceGenderDistribution: {
    male: number;
    female: number;
  };
  socialMediaLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface SectorType {
  id: number;
  title: string;
}