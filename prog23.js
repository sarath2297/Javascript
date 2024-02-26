// prog to display the numbers whose exponential is in the range of 8 to 36
// here the user can input the value(power)
// power = 2  // 

power = 1
i = 1
val = 0
while(val<=36) 
{
    val = i**power
    if(val>=8 && val<=36)
    {
        console.log(i);
    }
    i++
}
