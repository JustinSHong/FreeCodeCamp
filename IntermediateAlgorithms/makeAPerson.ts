// Create a constructor function with the following methods
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

interface IPerson {
  firstAndLast: string;
  getFirstName: () => string;
  getLastName: () => string;
  getFullName: () => string;
  setFirstName: (fn: string) => void;
  setLastName: (ln: string) => void;
  setFullName: (name: string) => void;
}

export class Person implements IPerson {
	constructor(public firstAndLast: string) {
		this.firstAndLast = firstAndLast
	}

	getFirstName() {
		const firstName = this.firstAndLast.split(' ')[0]
		return firstName
	}

	setFirstName(fn: string) {
		const names = this.firstAndLast.split(' ')
		this.firstAndLast = `${fn} ${names[1]}`
	}

	getLastName() {
		const lastName = this.firstAndLast.split(' ')[1]
		return lastName
	}

	setLastName(ln: string) {
		const names = this.firstAndLast.split(' ')
		this.firstAndLast = `${names[0]} ${ln}`
	}

	getFullName() {
		return this.firstAndLast
	}

	setFullName(name: string) {
		this.firstAndLast = name
	}
}

const bob = new Person('Bob Ross')
bob.getFirstName() // Bob
bob.getLastName() // Ross
bob.getFullName() // Bob Ross

bob.setFullName('A B')
bob.getFullName() // A B
bob.setFirstName('BOB')
bob.getFirstName() // BOB
bob.setLastName('ROSS')
bob.getLastName() // ROSS
