#include <stdio.h>
#include <stdlib.h>

/* function prototypes - declare function signatures */
void sayHi(char name[], int age);
double cube(double num);

int main()
{
    printf("TOP\n");
    sayHi("Justin", 24);
    printf("BOTTOM\n");
    printf("Answer: %f\n", cube(3.0));
    return 0;
}

/* functions require a return type, name, argument with types */
void sayHi(char name[], int age)
{
    printf("Hello %s\n", name);
    printf("You are %d years old\n", age);
}

/* write a function that returns a cube of a number */
double cube(double num)
{
    double result = num * num * num;
    return result;
}
