import { Club } from "../models/Club";
import clubsMock from "./mockData/Clubs";

export default function useClubApi() {
  async function getClubs(): Promise<Club[]> {
    return clubsMock.map((c) => new Club(c));
  }

  return { getClubs };
}
