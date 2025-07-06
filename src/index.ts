// function reverse(str:string) : string {
//     return str.split('').reverse().join('');
// }

// console.log(reverse('hello'))

function split(target: any, property: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        const [arg] = args
        const argSplitted = arg.split('')
        originalMethod.apply(this, [argSplitted])
    }
}

function reverse(target: any, property: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        const [arg] = args
        const argReversed = arg.reverse()
        originalMethod.apply(this, [argReversed])
    }
}

function join(char: string) {
    return function (target: any, property: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function(...args: any[]) {
            const [arg] = args
            const argJoined = arg.join(char)
            originalMethod.apply(this, [argJoined])
        }
    }
}

class StringManager {
    @split
    @reverse
    @join('_')
    print(str:string) {
        console.log(str)
    }
}
const stringManager = new StringManager()
stringManager.print('hello')