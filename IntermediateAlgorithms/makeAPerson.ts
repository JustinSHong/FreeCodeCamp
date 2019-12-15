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
    setFirstName: (fn: string) => string;
    setLastName: (ln: string) => string;
    setFullName: (name: string) => string;
}

class Person implements IPerson {
    constructor(public firstAndLast: string) {
        this.firstAndLast = firstAndLast
    }

    getFirstName() {
        const firstName = this.firstAndLast.split(' ')[0]
        return firstName
    }

    setFirstName() {
        return ''
    }

    getLastName() {
        return ''
    }

    setLastName() {
        return ''
    }

    getFullName() {
        return this.firstAndLast
    }

    setFullName() {
        return ''
    }
}

const bob = new Person('Bob Ross')
bob.getFirstName() // Bob
bob.getLastName() // Ross
bob.getFullName() // Bob Ross
