p = [9,10,11,12,20,30,33]
q = [11,20,25,30,33]

ip = 0
iq = 0
flag = false
while(ip<p.length && iq<q.length)
{
    if(p[ip]==q[iq])
    {
      console.log(`${p[ip]}`);
      flag = true
      ip++
      iq++
    }
    else if(p[ip]<q[iq])
    {
        ip++
    }
    else
    {
        iq++
    }
}

!flag && console.log(`No values are equal`);