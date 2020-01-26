#include <stdio.h>
#include <stdlib.h>

/* continually execute code until a condition is false */

int main()
{
    /*
    int index = 1;
    while(index <= 5) {
        printf("integer: %d\n", index);
        index++;
    }
    */

    int index = 1;
    do {
        /* do something at least once before checking against the condition */
        printf("integer: %d\n", index);
        index++;
    } while (index <= 5);

    return 0;
}
