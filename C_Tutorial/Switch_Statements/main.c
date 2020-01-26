#include <stdio.h>
#include <stdlib.h>

int main()
{
    char grade = 'C';

    switch(grade)
    {
        case 'A':
            printf("YOU DID GREAT!\n");
            break;
        case 'B':
            printf("YOU DID ALRIGHT\n");
            break;
        case 'C':
            printf("YOU DID POORLY\n");
            break;
        case 'D':
            printf("YOU DID VERY BAD\n");
            break;
        case 'F':
            printf("YOU FAILED\n");
            break;
        default:
            printf("INVALID GRADE\n");
            break;
    }

    return 0;
}
