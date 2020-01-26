#include <stdio.h>
#include <stdlib.h>

// a pointer is a memory address - physical location of a value in RAM
// pointers are a data type - just like an int, char, float
int main()
{

    int age = 30;
    double gpa = 3.4;
    char grade = 'A';

    // you can store a pointer in a pointer variable
    // p[value you are storing]
    // this requires you to know the address of the value you are storing
    // note the type of the pointer variable is the type of the value being stored
    int *pAge = &age;
    double *pGpa = &gpa;
    char *pGrade = &grade;

    printf("age address: %d\n", *pAge);
    printf("gpa address: %f\n", *pGpa);
    printf("grade address: %c\n", *pGrade);

    return 0;
}