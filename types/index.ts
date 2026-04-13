export type InstrumentStatus = "Active" | "Legacy" | "Upcoming";

export type Instrument = {
  slug: string;
  name: string;
  status: InstrumentStatus;
  shortDescription: string;
  specs: string;
  pixelCount: string;
  wavelengthRange: string;
  telescopeLocation: string;
  heroImage: string;
  technicalDocumentation: string[];
};

export type PersonCategory =
  | "Faculty & Staff"
  | "Graduate Students"
  | "Postdocs"
  | "Alumni";

export type Person = {
  id: string;
  name: string;
  role: string;
  email: string;
  category: PersonCategory;
  image: string;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

export type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export type PressItem = {
  id: string;
  publisher: string;
  title: string;
  date: string;
  url: string;
};

export type FacilitySection = {
  id: string;
  title: string;
  image: string;
  body: string;
};
