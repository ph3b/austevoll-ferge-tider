export const timeToFerryLeaves = ferryTimeString => {
  const [hours, minutes] = ferryTimeString.replace("*", "").split(":");
  const ferryTime = new Date();
  ferryTime.setHours(parseInt(hours));
  ferryTime.setMinutes(parseInt(minutes));
  const now = new Date();
  const minutesToFerryLeaves =
    Math.floor(ferryTime / 1000 / 60) - Math.floor(now / 1000 / 60);
  if (minutesToFerryLeaves < 60) return minutesToFerryLeaves + " min";

  return `${Math.floor(minutesToFerryLeaves / 60)}t ${minutesToFerryLeaves %
    60}m`;
};
