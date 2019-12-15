// Create a constructor function with the following methods
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

interface IPerson {
    firstAndLast: string
    getFirstName: () => string
    getLastName: () => string
    getFullName: () => string
    setFirstName: (fn: string) => string
    setLastName: (ln: string) => string
    setFullName: (name: string) => void
}

class Person implements IPerson {
    constructor(public firstAndLast: string) {
        this.firstAndLast = firstAndLast
    }

    getFirstName() {
        const firstName = this.firstAndLast.split(' ')[1]
        return firstName
    }

    setFirstName() {
        return ''
    }

    getLastName() {
        const lastName = this.firstAndLast.split(' ')[1]
        return lastName
    }

    setLastName() {
        return ''
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
