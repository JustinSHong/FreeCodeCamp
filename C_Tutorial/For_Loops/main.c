#include <stdio.h>
#include <stdlib.h>

/* for loops use an indexing variable to keep track of the iterations */

int main()
{
    int lucky_numbers[] = {4, 8, 16, 20, 24, 28, 32, 26, 40};

    for(int i = 0; i < 6; i++) {
        printf("%d\n", lucky_numbers[i] * 2);
    }


    return 0;
}
