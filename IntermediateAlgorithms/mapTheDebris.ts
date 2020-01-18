// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

interface IDebrisAltitudes {
  name: string;
  avgAlt: number;
}

interface IOrbitalPeriods {
  name: string;
  orbitalPeriod: number; // seconds
}

export const orbitalPeriod = (data: IDebrisAltitudes[]): IOrbitalPeriods[] => {
	// prettier-ignore
	const GM = 398600.4418 // standard gravitational parameter
	const earthRadius = 6367.4447 // kilometers

	const result = data.map(d => {
		const orbital: IOrbitalPeriods = { name: '', orbitalPeriod: 0 }
		let a = Math.pow(d.avgAlt + earthRadius, 3)

		orbital.name = d.name
		orbital.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(a / GM)) // see Kepler's 3rd law

		return orbital
	})

	return result
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]) // [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([
	{ name: 'iss', avgAlt: 413.6 },
	{ name: 'hubble', avgAlt: 556.7 },
	{ name: 'moon', avgAlt: 378632.553 }
]) // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
