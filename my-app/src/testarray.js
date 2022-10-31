const data1 = [100,200,300,400,500]

for(let i = 0 ;i<data1.length;i++){
    if (data1[i]>=200) break
     console.log(`index of ${i} = ${data1[i]}`)
}

console.log("-------------")

let sum = 0
data1.forEach(e =>{ ///เขียนเบรคในรูปนี้ไม่ได้
    sum=e*2
    console.log(`sum = ${sum}`)
});

console.log("-------------")

for (const e of data1 ){
    if(e>=300) break
    console.log(`${e}`);
}

