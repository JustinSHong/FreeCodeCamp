#include <stdio.h>
#include <stdlib.h>

int main()
{
    // create a pointer to a physical file on our machine
    // fopen([file_name], file_mode)
    // r - read
    // w - write (create or write over an existing file)
    // a - append (add information to file)
    FILE *fpointer = fopen("employees.txt", "a");

    // write to a file - similar to printf()
    // fprintf(fpointer, "Jim, Salesman\nPam, Receptionist\nOscar, Accounting");
    fprintf(fpointer, "\nKelly, Customer Service");

    // close file - remove file from RAM/ save changes
    fclose(fpointer);
    return 0;
}