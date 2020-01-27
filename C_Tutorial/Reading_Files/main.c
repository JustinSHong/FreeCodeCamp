#include <stdio.h>
#include <stdlib.h>

int main()
{
    // read data from a file
    char line[255];
    FILE *fpointer = fopen("employees.txt", "r");

    // read file line by line and store data somewhere
    // also moves pointer along after each read
    fgets(line, 255, fpointer); // first line
    printf("1st Employee: %s", line);
    fgets(line, 255, fpointer); // second line
    printf("2nd Employee: %s", line);
    fclose(fpointer);

    return 0;
}