#include <stdio.h>
#include <stdlib.h>

int main()
{
    /* working with variables and print f*/
    char characterName[] = "Tom";
    int characterAge = 75;

    printf("There once was a man named %s\n", characterName);
    printf("he was %d years old.\n", characterAge);

    characterAge = 30;

    printf("He really liked the name %s.\n", characterName);
    printf("but did not like being %d.\n", characterAge);

    /* basic data types */
    /* int age = 40; */
    /* double gpa = 3.7; */
    char grade = 'A';
    char phrase[] = "Giraffe Academy";

    printf("Hello \n World\n");
    printf("Hello \" World\n");

    int favNum = 90;
    int favChar = 'I';

    /* Format specifiers for printf */
    printf("Format Specifiers allow you to print different data\n");
    printf("My favorite %s is %d and %f", "number", favNum, 987.88);
    printf("My favorite character is %c", favChar);

    /* Working with numbers - ints and floating points */
    printf("%f\n", 8.9 + 4.6);
    printf("operations with floating pt numbers and ints result in a floating point num\n");
    printf("%f\n", 5 + 4.5);
    printf("%s %d\n", "returns an int" , 5/4);
    printf("%s %f\n", "returns a float", 5/4.0);
    printf("%s\n", "using built in math funcs");
    printf("%f\n", pow(2, 3));
    printf("%f\n", sqrt(9));
    printf("%f\n", ceil(9.87));
    printf("%f\n", floor(34.44));

    /* Constants - can't be modified */
    const int NUM = 5;
    printf("%d\n", NUM);

    /* Getting user input */
    /* int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old\n", age);

    double gpa;
    printf("Enter your gpa: ");
    scanf("%lf", &gpa);
    printf("You have a %f gpa\n", gpa);

    char letter_grade;
    printf("Enter your grade: ");
    scanf("%c", &letter_grade);
    printf("You have a grade of %c", letter_grade); */

    char name[20]; /* you can specify how large a string can be */
    printf("Enter your name: ");
    /* scanf("%s", name); grabs characters up to the first space */
    fgets(name, 20, stdin); /* grabs entire line of text from user and prints a new line*/
    printf("Your name is %s asdfadsf", name);

    return 0;
}
