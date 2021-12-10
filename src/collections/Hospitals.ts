import { Collection, IBundleLinkOptions } from "@bluelibs/mongo-bundle";
import { BloodTest } from "./BloodTest";
import { Doctor, Doctors } from "./Doctors";
import { Patient, Patients } from "./Patients";

export class Hospital {
  constructor(data?: Partial<Hospital>) {
    Object.assign(this, data);
  }

  name: string;
  location: string;
  doctors: Doctor[] = [];
  patients: Patient[] = [];
  bloodTests: BloodTest[] = [];
}

export class Hospitals extends Collection<Hospital> {
  static collectionName = "hospitals";

  static links: IBundleLinkOptions = {
    doctors: {
      collection: () => Doctors,
      inversedBy: "hospital",
    },
    patients: {
      collection: () => Patients,
      inversedBy: "hospital",
    },
    bloodTests: {
      collection: () => Patients,
      inversedBy: "hospital",
    },
  };
}
