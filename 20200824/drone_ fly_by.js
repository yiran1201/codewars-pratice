function flyBy(lamps, drone) {
  if (drone.length >= lamps.length) return 'o'.repeat(lamps.length);
  return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length);
}

console.log(flyBy('xxxxxx', '====T'));
