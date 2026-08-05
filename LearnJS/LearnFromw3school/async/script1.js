const paymentStatus=false;


const marks=80;


function enroll(){


    console.log("enroll progress ")

    const promise=new Promise(function(resolve,reject){

        setTimeout(function(){
            if (paymentStatus){
                resolve();

            }
            else{
                reject("payment filed");


            }
        },2000);
    });

    return promise;
}


function progress(){
    console.log("Course on progress ....");
    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if (marks>=80)
            {
                resolve();
            }
            else{
                reject("you could not get enough marks to get the certificate")

            }
        },3000)
    });
    return promise
}

function getCertificate(){
    console.log("Preparing your certificate");
    const promise=new Promise(function(resolve)
    {
        setTimeout(function(){
            resolve("congrats! you got the certificate");
        },1000);
    });
    return promise;
}


enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(error)
{
    console.log(error)
})