import { orbitalPeriod } from '../IntermediateAlgorithms/mapTheDebris'

describe('it should return an element\'s oribtal period', () => {
	const testCases = [
		[
			[{ name: 'sputnik', avgAlt: 35873.5553 }],
			[{ name: 'sputnik', orbitalPeriod: 86400 }]
		],
		[
			[
				{ name: 'iss', avgAlt: 413.6 },
				{ name: 'hubble', avgAlt: 556.7 },
				{ name: 'moon', avgAlt: 378632.553 }
			],
			[
				{ name: 'iss', orbitalPeriod: 5557 },
				{ name: 'hubble', orbitalPeriod: 5734 },
				{ name: 'moon', orbitalPeriod: 2377399 }
			]
		]
	]

	describe.each(testCases)('find oribital periods', (a, b) => {
		it(`should take ${a} and return ${b}`, () => {
			const result = orbitalPeriod(a as any)

			expect(result).toStrictEqual(b as any)
		})
	})
})
