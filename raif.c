#include <stdio.h>
#include <ctype.h>

struct arrChar
{
    char *arr;
    int size, index;
};

void initialize(struct arrChar *array);
int create(struct arrChar *array);
int redundantParenthesis(struct arrChar *array);
char delete(struct arrChar *array, int ind);
int checkPreced(char c);

int main()
{
    struct arrChar array;
    initialize(&array);
    create(&array);
    redundantParenthesis(&array);
}

void initialize(struct arrChar *array)
{
    int s;
    printf("Enter the size the of the array: ");
    scanf("%d", &s);
    array->size = s;
    array->index = -1;
    array->arr = (char *)malloc(array->size * sizeof(int));
}

int create(struct arrChar *array)
{
    if (array->index == array->size - 1)
    {
        printf("List is full\n");
        return -1;
    }
    else
    {
        for (int i = 0; i < array->size; i++)
        {
            printf("%d :", i + 1);
            array->index++;
            scanf("%c", &array->arr[array->index]);
        }
    }
}

char delete(struct arrChar *array, int ind)
{
    for (int i = ind; i < array->size; i++)
    {
        array->arr[i] = array->arr[i + 1];
    }
}

int redundantParenthesis(struct arrChar *array)
{
    int arrIndexAphaNumeric[array->size]; // all stores AphaNumeric
    int arrIndexparenthesis[array->size]; // all stores parenthesis
    int arrIndexoperator[array->size];    // all stores operator
    struct arrChar finalArray;
    finalArray.index = -1;
    finalArray.size = array->size;
    finalArray.arr = (char *)malloc(finalArray.size * sizeof(int));
    int i = 0;
    for (i = 0; i < array->size; i++)
    {
        arrIndexAphaNumeric[i] = 0;
        arrIndexparenthesis[i] = 0;
        arrIndexoperator[i] = 0;
    }
    i = 0;
    while (i != array->size)
    {
        if (array->arr[0] == '(')
        {
            delete (&array, 0);
            delete (&array, array->size);
        }
        else
        {
            if (isalnum(array->arr[i]))
                arrIndexAphaNumeric[i] = i;
            else if (array->arr[i] == '(' || array->arr[i] == ')')
                arrIndexparenthesis[i] = i;
            else
                arrIndexoperator[i] = i;
        }
        i++;
    }
    i = 0;
    while (i != array->size)
    {
        if (arrIndexparenthesis[i] != 0)
        {
            int targetLeft = i;
            int j = targetLeft;
            int pre1, pre2;
            if(array->arr[--j] == '+' ||array->arr[--j] == '-' ||array->arr[--j] == '*' ||array->arr[--j] == '/'){
                pre2 = checkPreced(array->arr[--j]);
            }
            else{
                pre2 = 2; // default multiple opertor precedence
            }
            while (array->arr[j] != ')')
            {
                if (j == arrIndexoperator[j])
                {
                    pre1 = checkPreced(array->arr[j]);
                }
                j++;
            }
            int targetRight = j;
        }
        i++;
    }
}

int checkPreced(char c){
    switch (c)
    {
    case '+':
        return 1;
        break;
    case '-':
        return 1;
        break;
    case '*':
        return 2;
        break;
    case '/':
        return 2;
        break;
    
    default:
        break;
    }
}