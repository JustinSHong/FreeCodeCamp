// Check if a string (first argument, str) ends with
// the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method
// But for the purpose of this challenge, we would like you to use
// one of the JavaScript substring methods instead.

// use str.endsWith()
export const confirmEnding = (str: string, target: string): boolean => {
    return str.endsWith(target)
}

// use str.substr()
export const confirmEnding2 = (str: string, target: string): boolean => {
    const subStr = str.substr(-target.length)
    return subStr === target
}

// use str.substring()
export const confirmEnding3 = (str: string, target: string): boolean => {
    const subStr = str.substring(str.length, str.length - target.length)
    return subStr === target
}

// use slice()
export const confirmEnding4 = (str: string, target: string): boolean => {
    const subStr = str.slice(-target.length)
    return subStr === target
}

// test cases
confirmEnding('Bastian', 'n') // true
confirmEnding('Connor', 'n') // false
confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
) // false
confirmEnding('He has to give me a new name', 'name') // true
confirmEnding('Open sesame', 'same') // true
confirmEnding('Open sesame', 'pen') // false
confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
) // false

confirmEnding2('Bastian', 'n') // true
confirmEnding2('Connor', 'n') // false
confirmEnding2(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
) // false
confirmEnding2('He has to give me a new name', 'name') // true
confirmEnding2('Open sesame', 'same') // true
confirmEnding2('Open sesame', 'pen') // false
confirmEnding2(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
) // false

confirmEnding3('Bastian', 'n') // true
confirmEnding3('Connor', 'n') // false
confirmEnding3(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
) // false
confirmEnding3('He has to give me a new name', 'name') // true
confirmEnding3('Open sesame', 'same') // true
confirmEnding3('Open sesame', 'pen') // false
confirmEnding3(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
) // false

confirmEnding4('Bastian', 'n') // true
confirmEnding4('Connor', 'n') // false
confirmEnding4(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
) // false
confirmEnding4('He has to give me a new name', 'name') // true
confirmEnding4('Open sesame', 'same') // true
confirmEnding4('Open sesame', 'pen') // false
confirmEnding4(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
) // false
