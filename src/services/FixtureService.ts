import { ContainerInstance, Service } from "@bluelibs/core";
import { BloodTests, BloodTest } from "../collections/BloodTest";
import { Doctors, Doctor } from "../collections/Doctors";
import { Hospitals, Hospital } from "../collections/Hospitals";
import { Patients, Patient } from "../collections/Patients";

@Service()
export class FixtureService {
  constructor(protected readonly container: ContainerInstance) {}

  async run() {
    const hospitals = this.container.get(Hospitals);
    const doctors = this.container.get(Doctors);
    const patients = this.container.get(Patients);
    const bloodTests = this.container.get(BloodTests);

    // clean it up
    for (const coll of [hospitals, doctors, patients, bloodTests]) {
      await coll.deleteMany({});
    }

    const hospital = new Hospital({ name: "Maria Marinne " });

    const doctor = new Doctor({
      name: "Theodor Diaconü",
      speciality: "Coding",
    });

    hospital.doctors.push(doctor);

    hospital.patients.push(
      new Patient({
        name: "Patient 1",
        patientIdentifier: "P1",
        doctor,
        bloodTests: [
          new BloodTest({
            cholesterol: "1ug",
            glucose: "1mg",
            iron: "1mg",
            doctor,
          }),
        ],
      }),
      new Patient({
        name: "Patient 2",
        patientIdentifier: "P2",
        doctor,
        bloodTests: [
          new BloodTest({
            cholesterol: "1ug",
            glucose: "1mg",
            iron: "1mg",
            doctor,
          }),
        ],
      })
    );

    await hospitals.deepSync(hospital);
  }
}
