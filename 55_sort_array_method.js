// sort method
// default work on ASCII Method
// char : ascii value

/*
Character    	    ASCII code	 	Character	        ASCII code	 	Character		 ASCII code
!	        	        33	 	        A	     	        65	 	        a	    	    97
“	        	        34	 	        B	     	        66	 	        b	    	    98
#	       	            35	 	        C	     	        67	 	        c	    	    99
$	        	        36	 	        D	     	        68	 	        d	    	    100
%	        	        37	 	        E	     	        69	 	        e	    	    101
&	     	            38	 	        F	     	        70	 	        f	    	    102
‘	      	            39	 	        G	     	        71	 	        g	    	    103
(	        	        40	 	        H	     	        72	 	        h	    	    104
)	        	        41	 	        I	     	        73	 	        i	    	    105
*	    	            42	 	        J	     	        74	 	        j	    	    106
+	        	        43	 	        K	     	        75	 	        k	    	    107
,	 	                44	 	        L	     	        76	 	        l	    	    108
–	  	                45	 	        M	     	        77	 	        m	    	    109
.	  	                46	 	        N	     	        78	 	        n	    	    110
/	 	                47	 	        O	     	        79	 	        o	    	    111
"0"		                48	 	        P	     	        80	 	        p	    	    112
"1"	                    49	 	        Q	     	        81	 	        q	    	    113
"2"	                    50	 	        R	     	        82	 	        r	    	    114
"3"	 	                51	 	        S	    	        83	 	        s	    	    115
"4"		                52	 	        T	     	        84	 	        t	    	    116
"5"		                53	 	        U	     	        85	 	        u	    	    117
"6"	                    54	 	        V	     	        86	 	        v	    	    118
"7"	 	                55	 	        W	     	        87	 	        w	    	    119
"8"	 	                56	 	        X	     	        88	 	        x	    	    120
"9"		                57	 	        Y	     	        89	 	        y	    	    121
:	        	        58	 	        Z	     	        90	 	        z	    	    122
;	      	            59	 	        [	            	91	 	        {	     	    123
<	        	        60	 	        \	   	            92	 	        |	     	    124
=	       	            61	 	        ]	            	93	 	        }	     	    125
>	        	        62	 	        ^	                94	 	        	            126
?	        	        63	 	        _	    	        95	 	 	 	 
@	   	                64	 	        `	     	        96	 	 	 	 
*/

const numbers = [48, 2000, 198, 4000];
// ascii value   52   50    49    52
// 48 will appear last because its 2nd value is 8
numbers.sort();
// expected 48, 198, 2000, 4000
console.log(numbers);              // 198, 2000, 4000, 48, this will be the output because it follow ascii value.
// sort method will modify the original array
// sort method, sort the array not as a number but as a string.

const names = ["Veer", "Kunal", "veer", "kunal", "Vidya", "vidya"];
names.sort();
console.log(names)
// op: ['Kunal', 'Veer', 'Vidya', 'kunal', 'veer', 'vidya']
// check ascii value to understand the output

// This will sort the array in ascending
const num = [64, 60, 44, 200];
num.sort((a, b) => a - b)
num.sort((a, b) => a < b ? -1 : 1)
console.table(num)         // 4, 44, 60, 200


// 4, 60
// a < b ---> if true return -1 else return 1
// 4 < 60 ---> fasle else return true

// 4, 60
// a-b ---> negative ---> then 1st print a,b
// 4 - 60 ---> -56

// 60, 44
// a-b ----> positive ----> then first print b,a
// 60 - 44 ----> 16

// this will sort the array in desending 
const no = num.sort((a, b) => b - a);
console.log(no);

// 4, 60
// b-a ---->  positive ----> then first print b,a
// 60 - 4 ---> 56

// 60, 44
// b-a ----> negative ----> then first print 
// 44 - 60 ---> -16

const amazon = [
    { productid: 1, product: "Mobile", price: 15000 },
    { productid: 2, product: "TV", price: 20000 },
    { productid: 3, product: "Laptop", price: 12000 }
]

const sum = amazon.sort((a, b) => a.price - b.price);
console.table(sum)






