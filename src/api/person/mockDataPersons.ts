import { PersonEntity } from "../../model";

export const persons: PersonEntity[] = [
  {
    ssn: 123,
    name: "Mstf",
    lastName: "ASAN",
    scoring: ["o", "o", "o", "o", "t", "o", "o", "t", "t", "o", "o", "t", "o", "o", "t"]
  },
  {
    ssn: 212,
    name: "Mert",
    lastName: "SIRIM",
    scoring: ["o", "o", "t", "o", "o", "t", "o", "o", "o", "o", "t", "t", "o", "o", "t"]
  },
  {
    ssn: 422,
    name: "Ali",
    lastName: "KOLSARICI",
    scoring: ["o", "o", "t", "o", "o", "t", "o", "o", "o", "o", "t", "t", "o", "o", "t"]
  }
];
