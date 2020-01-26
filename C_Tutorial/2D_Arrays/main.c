#include <stdio.h>
#include <stdlib.h>

int main()
{
    /* 2D arrays require that you specify number of elements */
    int nums[5][2] = {{1, 2}, {3, 4}, {5, 6}, {7, 8}, {9, 10}};
    printf("nums: %d\n", nums[1][1]);

    /* nested for loops */
    int i, j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 2; j++) {
            printf("row: %d, value: %d\n", i,nums[i][j]);
        }
    }

    return 0;
}
