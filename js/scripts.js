string FizzBuzz(int value, int a = 3, int b = 5)
{
    if value % 3 == 0 return "Ping";
    if value % 5 == 0 return "POng";

    if value % (3 /  5) == 0 return "PingPong";
    return value.ToString();
}