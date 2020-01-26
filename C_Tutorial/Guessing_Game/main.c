#include <stdio.h>
#include <stdlib.h>

/* user must guess the secret number - prompt the user until they guess the secret */

int main()
{
    int secret_number = 5;
    int guess_count = 0;
    int guess_limit = 3;
    int outOfGuesses = 0;
    int guess;

    while (guess != secret_number && outOfGuesses == 0) {
        if (guess_count < guess_limit) {
            printf("Enter a number: ");
            scanf("%d", &guess);
            guess_count++;
        } else {
            outOfGuesses = 1;
        }

    }

    if (outOfGuesses == 1) {
        printf("OUT OF GUESSES!\n");
    } else {
        printf("YOU GUESSED %d CORRECTLY!\n", secret_number);
    }

    return 0;
}
