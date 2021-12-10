import {
  Collection,
  IBundleLinkOptions,
  ObjectId,
} from "@bluelibs/mongo-bundle";
import { Doctor, Doctors } from "./Doctors";
import { BloodTest, BloodTests } from "./BloodTest";
import { Hospital, Hospitals } from "./Hospitals";

export class Patient {
  constructor(data?: Partial<Patient>) {
    Object.assign(this, data);
  }

  name: string;
  patientIdentifier: string;
  location: string;

  // Linking Data
  doctorId: ObjectId;
  doctor: Doctor;
  hospitalId: ObjectId;
  hospital: Hospital;

  bloodTests: BloodTest[] = [];
}

export class Patients extends Collection<Patient> {
  static collectionName = "patients";

  static links: IBundleLinkOptions = {
    doctor: {
      collection: () => Doctors,
      field: "doctorId",
    },
    hospital: {
      collection: () => Hospitals,
      field: "hospitalId",
    },
    bloodTests: {
      collection: () => BloodTests,
      inversedBy: "patient",
    },
  };
}
