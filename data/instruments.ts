import { Instrument } from "@/types";

export const instruments: Instrument[] = [
  {
    slug: "arcons",
    name: "ARCONS",
    status: "Legacy",
    shortDescription:
      "The ARray Camera for Optical to Near-IR Spectrophotometry pioneered on-sky MKID astronomy.",
    specs: "Optical-NIR MKID camera with time-resolved photon counting",
    pixelCount: "2,024 pixels",
    wavelengthRange: "0.4-1.1 um",
    telescopeLocation: "Palomar Observatory",
    heroImage: "https://placehold.co/1600x600/0f172a/e2e8f0?text=ARCONS",
    technicalDocumentation: [
      "ARCONS established the first large-format MKID camera for astronomy and demonstrated integrated photon counting with intrinsic energy resolution.",
      "The instrument architecture combined superconducting detector arrays, cryogenic optics, and low-noise microwave readout electronics.",
      "Operational campaigns informed detector uniformity, system calibration methods, and next-generation instrument scaling."
    ]
  },
  {
    slug: "darkness",
    name: "DARKNESS",
    status: "Active",
    shortDescription:
      "A high-contrast MKID integral-field camera for direct exoplanet imaging and speckle suppression.",
    specs: "High-contrast imaging spectrophotometer for adaptive optics systems",
    pixelCount: "10,000 pixels",
    wavelengthRange: "0.8-1.4 um",
    telescopeLocation: "Palomar Observatory",
    heroImage: "https://placehold.co/1600x600/111827/e5e7eb?text=DARKNESS",
    technicalDocumentation: [
      "DARKNESS is optimized for high-contrast coronagraphy and wavefront control in extreme adaptive optics environments.",
      "The camera provides microsecond timing and photon-by-photon energy tagging that support real-time speckle statistics and discrimination.",
      "Data products support exoplanet characterization, circumstellar disk studies, and advanced post-processing pipelines."
    ]
  },
  {
    slug: "mec",
    name: "MEC",
    status: "Active",
    shortDescription:
      "The MKID Exoplanet Camera expands direct imaging capabilities through precise photon statistics.",
    specs: "High-speed MKID camera integrated with coronagraphic optics",
    pixelCount: "20,440 pixels",
    wavelengthRange: "0.8-1.4 um",
    telescopeLocation: "Subaru Telescope",
    heroImage: "https://placehold.co/1600x600/1e293b/f8fafc?text=MEC",
    technicalDocumentation: [
      "MEC integrates MKID focal planes into high-contrast observing modes for exoplanet direct imaging and disk science.",
      "The platform supports rapid cadence observations for focal-plane wavefront sensing and correction strategy development.",
      "Instrument control software includes synchronized timing, calibration workflows, and science-ready data reduction interfaces."
    ]
  },
  {
    slug: "xkid",
    name: "XKID",
    status: "Upcoming",
    shortDescription:
      "A next-generation X-ray/optical MKID concept for high-throughput photon spectroscopy.",
    specs: "Multi-band MKID platform targeting expanded spectral coverage",
    pixelCount: "30,000+ pixels",
    wavelengthRange: "0.2-2.0 um (target)",
    telescopeLocation: "Deployment in planning",
    heroImage: "https://placehold.co/1600x600/0b1120/e2e8f0?text=XKID",
    technicalDocumentation: [
      "XKID extends MKID architecture toward broader wavelength sensitivity and larger multiplexed readout topologies.",
      "Current development focuses on detector fabrication repeatability, cryogenic packaging, and system-level stability.",
      "Commissioning plans prioritize end-to-end spectral calibration and high-efficiency observing modes."
    ]
  },
  {
    slug: "mec-prime",
    name: "MEC Prime",
    status: "Upcoming",
    shortDescription:
      "A redesigned MEC architecture with expanded array formats and improved optical throughput.",
    specs: "Next-generation exoplanet camera with enhanced sensitivity",
    pixelCount: "50,000+ pixels",
    wavelengthRange: "0.7-1.6 um (target)",
    telescopeLocation: "Site integration underway",
    heroImage: "https://placehold.co/1600x600/172554/e2e8f0?text=MEC+Prime",
    technicalDocumentation: [
      "MEC Prime builds on MEC lessons with upgraded cryostat design, improved detector packaging, and lower readout noise.",
      "The instrument roadmap includes robust calibration channels and improved on-sky operational efficiency.",
      "Science priorities include high-contrast characterization of young giant exoplanets and circumstellar environments."
    ]
  },
  {
    slug: "momos",
    name: "MOMOS",
    status: "Upcoming",
    shortDescription:
      "A modular MKID observatory module targeting flexible deployment across astrophysical programs.",
    specs: "Modular optical MKID spectrophotometer",
    pixelCount: "12,000 pixels",
    wavelengthRange: "0.4-1.5 um",
    telescopeLocation: "Multi-site compatibility",
    heroImage: "https://placehold.co/1600x600/1f2937/f1f5f9?text=MOMOS",
    technicalDocumentation: [
      "MOMOS is designed as a transportable, modular platform for rapid commissioning across multiple observatory environments.",
      "Subsystem interfaces support configurable optics, detector modules, and readout topologies for science-specific campaigns.",
      "Development priorities emphasize reliability, maintainability, and reproducible calibration in diverse observing conditions."
    ]
  }
];
