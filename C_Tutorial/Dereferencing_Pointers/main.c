#include <stdio.h>
#include <stdlib.h>

// dereferencing - go to memory address and grab the information stored their

int main()
{

    int age = 30;
    int *pAge = &age;

    // we need to obtain the value stored at the memory address of age
    printf("memory address of age: %p\n", pAge);
    // *pAge is no longer a memory address - it has the type of the value stored there
    // age is an integer so *pAge is of type int
    printf("dereferencing age: %d\n", *pAge);
    // alternatively
    printf("dereferencing age directly: %d\n", *&age);
    printf("memory address of age &*&age: %p\n", &*&age);
    return 0;
}