
#include "ima.hpp"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
    float a = 0, b = 0, h = 0;
    while (1)
    {
        printf("Enter base1 length: \n");
        scanf("%f", &a);
        
        printf("Enter base2 length: \n");
        scanf("%f", &b);
        
        printf("Enter height: \n");
        scanf("%f", &h);
        
        printf("Area of trapezoid is %f \n", (a + b) * h / 2);
        return 0;
               
    }
    }