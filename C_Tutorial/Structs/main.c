#include <stdio.h>
#include <stdlib.h>

/* data structure that allows you to store multiple data types*/
/* use structs to model real world entities - like interfaces or templates */
/* structs are custom data types that you define */
/* use them to create instances of an entity you defined */
struct Student {
    char name[50];
    char major[50];
    int age;
    double gpa;
};

int main()
{
    struct Student student1; /* init an instance of Student struct */
    student1.age = 22;
    student1.gpa = 3.2;
    strcpy(student1.name, "Jim");
    strcpy(student1.major, "Business");

    printf("Student age: %d\n", student1.age);
    printf("Student gpa: %f\n", student1.gpa);
    printf("Student name: %s\n", student1.name);
    printf("Student major: %s\n\n", student1.major);

    struct Student student2;
    student2.age = 33;
    student2.gpa = 2.9;
    strcpy(student2.name, "Mark");
    strcpy(student2.major, "Chemistry");

    printf("Student age: %d\n", student2.age);
    printf("Student gpa: %f\n", student2.gpa);
    printf("Student name: %s\n", student2.name);
    printf("Student major: %s\n", student2.major);

    return 0;
}
