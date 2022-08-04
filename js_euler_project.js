const number = {
    num : 10000000000000000000,
    y: 1,
    set N_limit(N_limit) { this.num = N_limit},
    euler : function (){ 
        let x = this.num;
        var sub = [];
        var ans;
        var i;
        for ( i = 1; i <= x; i++){
            sub.push(i);
        }
        for (i = 0; i < (sub.length + 1); i++){
            let x = sub[i];
            let num = 1;
            var arr = [];
            for (i = 1; i <= x; i++){
                arr.push(num = num * 1/i);
             }
        };
        
        ans = arr.reduce(myFunction);
    function myFunction(total,value){
         return  total + value;
    }
    return (ans + 1);
},
pieX : function() {
    let x = this.num;
    var sub = [];
    var ans;
    var i;
    for ( i = 1; i <= x; i++){
        sub.push(i);
    }
    for (i = 0; i < (sub.length + 1); i++){
        let x = sub[i];
        let num = 1;
        var arr = [];
        for (i = 1; i <= x; i++){
            arr.push(num = num * Math.log(Math.PI)/i);
         }
    };
    
    ans = arr.reduce(myFunction);
function myFunction(total,value){
     return  total + value;
}
return (ans + 1);
},
    eulerX : function (y) {  
        let x = this.num;
        var sub = [];
        var ans;
        var i;
        for ( i = 1; i <= x; i++){
            sub.push(i);
        }
        for (i = 0; i < (sub.length + 1); i++){
            let x = sub[i];
            let num = 1;
            var arr = [];
            for (i = 1; i <= x; i++){
                arr.push(num = num * 1/i);
             }
        };
        
        ans = arr.reduce(myFunction);
    function myFunction(total,value){
         return  total + value;
    }
    return (ans + 1)** y;
},
};
Number.prototype.round = function(n) {
    const d = Math.pow(10,n);
    return Math.round((this + Number.EPSILON) * d) /d;
}
number.N_limit = 9000;
console.log(number.euler().round(100))

