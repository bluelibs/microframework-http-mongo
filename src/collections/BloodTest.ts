import {
  Collection,
  IBundleLinkOptions,
  ObjectId,
} from "@bluelibs/mongo-bundle";
import { Doctor, Doctors } from "./Doctors";
import { Hospital, Hospitals } from "./Hospitals";
import { Patient, Patients } from "./Patients";

export class BloodTest {
  constructor(data?: Partial<BloodTest>) {
    Object.assign(this, data);
  }

  glucose: string;
  cholesterol: string;
  iron: string;

  doctorId: ObjectId;
  doctor: Doctor;
  hospitalId: ObjectId;
  hospital: Hospital;
  patientId: ObjectId;
  patient: Patient;
}

export class BloodTests extends Collection<BloodTest> {
  static collectionName = "bloodTests";

  static links: IBundleLinkOptions = {
    doctor: {
      collection: () => Doctors,
      field: "doctorId",
    },
    hospital: {
      collection: () => Hospitals,
      field: "hospitalId",
    },
    patient: {
      collection: () => Patients,
      field: "patientId",
    },
  };
}
