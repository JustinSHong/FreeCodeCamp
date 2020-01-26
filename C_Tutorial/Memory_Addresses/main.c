#include <stdio.h>
#include <stdlib.h>

int main()
{
    // values get stored in RAM in specific locations
    // each location has a memory address
    // values are retrieved from their respective addresses
    // C must use these addresses to access values

    int age = 30;
    double gpa = 3.4;
    char grade = 'A';

    // p is the specifier for a memory address
    // p for pointer
    printf("age: %p\n", &age);
    printf("gpa: %p\n", &gpa);
    printf("grade: %p\n", &grade);

    return 0;
}
