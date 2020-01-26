#include <stdio.h>
#include <stdlib.h>

int main()
{
    int luckyNumbers[] = {1, 2, 3, 4, 5, 6};
    luckyNumbers[2] = 99;
    printf("%d\n", luckyNumbers[2]);

    /* sometimes you don't want to add els to an array right away*/
    /* you must declare how many items you want in an arr*/
    int luckyNumbers2[10];
    luckyNumbers2[0] = 90;
    luckyNumbers2[1] = 80;
    printf("%d\n", luckyNumbers2[0]);

    /* strings are just arrays of chars */
    char phrase[] = "Array";
    printf("%c\n", phrase[1]);
    return 0;
}
