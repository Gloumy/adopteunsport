import { Club } from "../models/Club";

export default function useClubApi() {
  async function getClubs(): Promise<Club[]> {
    const club1 = new Club({
      nom: "RAC Saint-Mard",
      latitude: 49.55,
      longitude: 5.52,
    });
    const club2 = new Club({
      nom: "Tennis Club Saint-Mard",
      latitude: 49.551,
      longitude: 5.521,
    });

    return [club1, club2];
  }

  return { getClubs };
}
