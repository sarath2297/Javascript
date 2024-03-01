//string methods

// prog to check whether the given number is a mobile number or not
num = '97470869417'
console.log(num.length==10?'Its a mobile number':'Its not a mobile number');

// prog to check whether given string is an email or not
email = 'sarath2297@gmail.com'
console.log(email.endsWith('@gmail.com')?'It is an email':'Its not an email');

// prog to check if the given string starts with letter 'q'
str = 'qwerty'
console.log(str.startsWith('q') || str.startsWith('Q')?'Yes, it starts with q':'No, it do not start with q');
console.log(str.toUpperCase());