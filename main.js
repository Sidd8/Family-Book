var images=[
"https://mail.google.com/mail/u/0?ui=2&ik=f33d25ea78&attid=0.1&permmsgid=msg-a:r7173412356803650091&th=175e9abb065b190f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9P1_3s_-FoX4EifjlBkPm9KRcf1jdzXX6c2o7cR8p9v4jx2PwTh-arIhow50n3lIdcCRPgTBxjNt_90kavkCb67edyAK91sQkA0bgZGqLcbHOe5UMn-_evDtM&disp=emb&realattid=ii_khrby9bd0",
"https://mail.google.com/mail/u/0?ui=2&ik=f33d25ea78&attid=0.7&permmsgid=msg-a:r5408138329171125141&th=175ea1a229b390e9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_XcTq9sdEUUUFKBUq1oKRHLJ-vgQWJPneB0qufxWvay8bFoIY8T4tJezLZ5jmyQ8iCJpUDm6Ebvdv6xzFlhfb-fpFPJWYL7ryAdGOuiUOtG3aq8ZTrvP5ngh0&disp=emb&realattid=ii_khrhdu4l6",
"https://mail.google.com/mail/u/0?ui=2&ik=f33d25ea78&attid=0.3&permmsgid=msg-a:r7173412356803650091&th=175e9abb065b190f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8YhdVD7n8y0-IwADTf3GJ5vOVer5eewphDq_71DYJbGWXdY6wfp4MXP6wlk0OfvtmcQVOeUvWIuSrZOTTVRGRd936m87QXb497C3LLBl233hLevQnKTaEH66o&disp=emb&realattid=ii_khrcgx252",
"https://mail.google.com/mail/u/0?ui=2&ik=f33d25ea78&attid=0.2&permmsgid=msg-a:r7173412356803650091&th=175e9abb065b190f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8SfZ57h4BMgl4m9UIPl7GzCXKMThrk1gbFvG7cO65YsnNK93_xQ8XNm-o69lSz-PXDZ5jXHDvzPWV4qAVy9dgjFry2bN1-J7ptl-azKZ_7II4gUgm61AzpfqI&disp=emb&realattid=ii_khrccx431",
"https://mail.google.com/mail/u/0?ui=2&ik=f33d25ea78&attid=0.5&permmsgid=msg-a:r7173412356803650091&th=175e9abb065b190f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8vE7dBcakkta1kFY_poaoaSYlKRL_IpoZMqWrO7Y-fDvyigHAH3bohr-Cq9odkvNjjnLo7efDMAf28r2E7CsmpNlrOPNcJC7doQu_0zVsDnlTbaa1j4OzMkB8&disp=emb&realattid=ii_khrcq88p4"
];
var names=["Sreekumar(My dad)","Sandhya(My mom)","Sreedhar(My grandpa)","Udaysree(My grandma)","Siddharth(me)"]

var i=0;
function next(){
if (i==4){
    i=0;
}
    document.getElementById("img").src=images[i];
    document.getElementById("Text").innerHTML = names[i];
    i=i+1;
}