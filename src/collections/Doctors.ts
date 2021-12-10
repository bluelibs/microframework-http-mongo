import {
  Collection,
  IBundleLinkOptions,
  ObjectId,
} from "@bluelibs/mongo-bundle";
import { Hospital, Hospitals } from "./Hospitals";
import { Patient, Patients } from "./Patients";
import { BloodTest, BloodTests } from "./BloodTest";

export class Doctor {
  constructor(data?: Partial<Doctor>) {
    Object.assign(this, data);
  }

  name: string;
  speciality: string;
  hospital: Hospital;
  hospitalId: ObjectId;
  patients: Patient[] = [];
  bloodTests: BloodTest[] = [];
}

export class Doctors extends Collection<Doctor> {
  static collectionName = "doctors";

  static links: IBundleLinkOptions = {
    hospital: {
      collection: () => Hospitals,
      field: "hospitalId",
    },
    patients: {
      collection: () => Patients,
      inversedBy: "doctor",
    },
    bloodTests: {
      collection: () => BloodTests,
      inversedBy: "doctor",
    },
  };
}
