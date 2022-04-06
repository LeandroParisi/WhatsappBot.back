const t = 'postgres://lrxwbbzntgqnqq:1501ef37022652ea88ca9d1287e7cb01bcd77f398865a14ec44bce81f4d746cb@ec2-52-3-60-53.compute-1.amazonaws.com:5432/d3d8hadeu9a3vo'

console.log(t.split('//')[1].split(':')[0]) // username
console.log(t.split(':')[2].split('@')[0]) // password
console.log(t.split('@')[1].split('/')[1]) // database
console.log(t.split('@')[1].split('/')[0].split(':')[0]) // host
