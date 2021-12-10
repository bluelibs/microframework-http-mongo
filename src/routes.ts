import { RouteType } from "@bluelibs/http-bundle";
import { BloodTest, BloodTests } from "./collections/BloodTest";
import { Doctor, Doctors } from "./collections/Doctors";
import { Hospital, Hospitals } from "./collections/Hospitals";
import { Patient, Patients } from "./collections/Patients";
import { FixtureService } from "./services/FixtureService";

export const routes: RouteType[] = [
  {
    path: "/",
    type: "get",
    handler: (container, req, res) => {
      res.end("Home");
    },
  },
  {
    path: "/doctors/list",
    type: "get",
    handler: async (container, req, res) => {
      const doctors = container.get(Doctors);

      const result = await doctors.query({
        // You can specify each field individually (name: 1), or use $all: true, to just dump all the data from the collection
        $all: true,
        hospital: {
          $all: true,
        },
        patients: {
          $all: true,
          bloodTests: {
            $all: true,
          },
        },
      });

      res.json(result);
    },
  },
  {
    path: "/fixtures",
    type: "get",
    handler: async (container, req, res) => {
      const fixtureService = container.get(FixtureService);
      await fixtureService.run();

      res.end("Fixtures run successfully");
    },
  },
];
