// array of object
weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
obj = {}

for(item of weatherData)
{
    district = item.district
    currTemp = item.weather
    if(district in obj)
    {
        oldTemp = obj[district]
        if(oldTemp>currTemp)
        {
            obj[district]=oldTemp
        }
        else
        {
            obj[district]=currTemp
        }

    }
    else
    {
        obj[district]=currTemp
    }
}
console.log(obj);
