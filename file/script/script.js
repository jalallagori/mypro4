let bookname,booktype,booknum;
let stuname,stufamily,stunum,stuborn,stusex,stumajor;
let osname,osfamily,osborn,ossex,osmajor;
/*
class bo{
    constructor(name,type,num){
        this.name=name
        this.type=type
        this.num=num
    }
}
class stu{
    constructor(name,family,num,born,sex,major){
        this.name=name
        this.family=family
        this.num=num
        this.born=born
        this.sex=sex
        this.major=major

    }
}
class ost{
    constructor(name,family,born,sex,major){
        this.name=name
        this.family=family
        this.born=born
        this.sex=sex
        this.major=major

    }
}
*/
let booklistname=[];
let ostnamelist=[];
let stunamelist=[];

localStorage.setItem('booksname', booklistname);
localStorage.setItem('ostsname', ostnamelist);
localStorage.setItem('stusname', stunamelist);

function bookfun1() {
    let ff3=document.querySelector('select[name="booktypeselect"]');
    bookname=document.book.booknameitem.value;
    booktype=ff3.value;
    booknum=document.book.booknumitem.value;

    bookfullname=`${bookname},`;
    //stunamelist=localStorage.getItem('booksname');
    localStorage.removeItem('booksname');
    booklistname+=bookfullname;
    alpha1=booklistname;
    localStorage.setItem('booksname', booklistname);
    localStorage.setItem('booksname1', alpha1);

    book1=[bookname,booktype,booknum]
    localStorage.setItem(bookname, book1);

    document.book.booknameitem.value="";
    ff3.value="عملی";
    document.book.booknumitem.value="";

    booklistname=localStorage.getItem('booksname1').split(",");
    let mybooktable=document.getElementById("mybooktable");
    mybooktable.innerHTML=`<tr><th>حذف</th><th>تعداد واحد</th><th>نوع درس</th><th>نام درس</th></tr>`;
    for(bb of booklistname){
        if(bb!=""){
            let z=localStorage.getItem(bb).split(",");
            mybooktable.innerHTML+=`<tr class="${z[0]}"><td class="delitem">X</td><td>${z[2]}</td><td>${z[1]}</td><td>${z[0]}</td><tr>`;
        }
    }
    return false
}

function studentfun1() {
    let stufullname;
    let ff2=document.querySelector('select[name="stuselect1"]');
    stuname=document.student.stunameitem.value;
    stufamily=document.student.stufamilyitem.value;
    stunum=document.student.stunumitem.value;
    stuborn=document.student.stubornitem.value;
    sx=stuborn;
    stuborn=1401-stuborn;
    stusex=ff2.value;
    stumajor=document.student.stumajoritem.value;
    stunum=sx+stunum;

    stufullname=`${stuname}${stufamily},`;
    stufullname2=`${stuname}${stufamily}`;
    //stunamelist=localStorage.getItem('stusname');
    localStorage.removeItem('stusname');
    stunamelist=stunamelist+stufullname;
    alpha2=stunamelist;
    localStorage.setItem('stusname', stunamelist);
    localStorage.setItem('stusname1', alpha2);

    stu1=[stuname,stufamily,stunum,stumajor,stusex,stuborn];
    localStorage.setItem(stufullname2, stu1);
   
    document.student.stunameitem.value="";
    document.student.stufamilyitem.value="";
    document.student.stunumitem.value="";
    document.student.stubornitem.value="";
    ff2.value="مرد";
    document.student.stumajoritem.value="";

    stunamelist=localStorage.getItem('stusname1').split(",");
    let mystutable=document.getElementById("mystutable");
    mystutable.innerHTML=`<tr><th>حذف</th><th>سن</th><th>جنسیت</th><th>رشته</th><th>شماره دانشجویی</th><th>فامیلی دانشجو</th><th>نام دانشجو</th></tr>`;
    for(ss of stunamelist){
        if(ss!=""){
            let y=localStorage.getItem(ss).split(",");
         let xx2=`<tr  class="${y[0]}${y[1]}"><td class="delitem" onClick="rf(this)">X</td><td>${y[5]}</td><td>${y[4]}</td><td>${y[3]}</td><td>${y[2]}</td><td>${y[1]}</td><td>${y[0]}</td><tr>`
         mystutable.innerHTML+=xx2;
        }
    }

    return false
}

function ostadfun1() {
    let osfullname;
    let ff1=document.querySelector('select[name="osselect1"]');
    osname=document.ostad.osnameitem.value;
    osfamily=document.ostad.osfamilyitem.value;
    osborn=document.ostad.osbornitem.value;
    osborn=1401-osborn;
    ossex=ff1.value;
    osmajor=document.ostad.osmajoritem.value;

    osfullname=`${osname}${osfamily},`;
    osfullname2=`${osname}${osfamily}`;
    //ostnamelist=localStorage.getItem('ostsname');
    localStorage.removeItem('ostsname');
    ostnamelist+=osfullname;
alpha3=ostnamelist;
    localStorage.setItem('ostsname', ostnamelist);
    localStorage.setItem('ostsname1', alpha3);


    os1=[osname,osfamily,osmajor,ossex,osborn];
    localStorage.setItem(osfullname2, os1);

    document.ostad.osnameitem.value="";
    document.ostad.osfamilyitem.value="";
    document.ostad.osbornitem.value="";
    ff1.value="مرد";
    document.ostad.osmajoritem.value="";
   
    ostnamelist=localStorage.getItem('ostsname1').split(",");
    let myostable=document.getElementById("myostable");
    myostable.innerHTML=`<tr><th>حذف</th><th>سن</th><th>جنسیت</th><th>شاخه علمی</th><th>فامیلی استاد</th><th>نام استاد</th></tr>`
    for(oo of ostnamelist){
        if(oo!=""){
            let x=localStorage.getItem(oo).split(",");
            myostable.innerHTML+=`<tr class="${x[0]}${x[1]}"><td class="delitem" onClick="rf(this)">X</td><td>${x[4]}</td><td>${x[3]}</td><td>${x[2]}</td><td>${x[1]}</td><td>${x[0]}</td><tr>`
        }
    }

    return false
}

let tol;
let tsl;
let tbl;
/*
function ostable() {
    ostnamelist=localStorage.getItem('ostsname');
    ostnamelist2=ostnamelist.split(",");
    let myostable=document.getElementById("myostable");
    myostable.innerHTML=`<tr><th>شاخه علمی</th><th>سن</th><th>جنسیت</th><th>فامیلی استاد</th><th>نام استاد</th></tr>`
    //console.log(ostnamelist2)
    for(oo of ostnamelist2){
        if(oo!=""){
            let x=localStorage.getItem(oo);
            let ositems=x.split(",");
            let xx1=`<tr><td>${ositems[4]}</td><td>${ositems[3]}</td><td>${ositems[2]}</td><td>${ositems[1]}</td><td>${ositems[0]}</td><tr>`
            myostable.innerHTML+=xx1;
        }
    }
}

function stutable() {
    stunamelist=localStorage.getItem('stusname');
    stunamelist2=stunamelist.split(",");
    let mystutable=document.getElementById("mystutable");
    mystutable.innerHTML=`<tr><th>رشته</th><th>جنسیت</th><th>سن</th><th>شماره دانشجویی</th><th>فامیلی دانشجو</th><th>نام دانشجو</th></tr>`;

    for(ss of stunamelist2){
      
        if(ss!=""){
            let y=localStorage.getItem(ss);
            let stuitems=y.split(",");
         let xx2=`<tr><td>${stuitems[5]}</td><td>${stuitems[4]}</td><td>${stuitems[3]}</td><td>${stuitems[2]}</td><td>${stuitems[1]}</td><td>${stuitems[0]}</td><tr>`
         mystutable.innerHTML+=xx2;
        }
    }
}

function botable() {
    booklistname=localStorage.getItem('booksname');
    booklistname2=booklistname.split(",");
    let mybooktable=document.getElementById("mybooktable");
    mybooktable.innerHTML=`<tr><th>تعداد واحد</th><th>نوع درس</th><th>نام درس</th></tr>`;
    for(bb of booklistname2){
        if(bb!=""){
            let z=localStorage.getItem(bb);
            let booksitems=z.split(",");
            let xx3=`<tr><td>${booksitems[2]}</td><td>${booksitems[1]}</td><td>${booksitems[0]}</td><tr>`
            mybooktable.innerHTML+=xx3;
        }
    }


}

*/

function whyme() {
    if(localStorage.getItem('booksname1')!=null){
    booklistname=localStorage.getItem('booksname1').split(",");
    }
    let mybooktable=document.getElementById("mybooktable");
    mybooktable.innerHTML=`<tr><th>حذف</th><th>تعداد واحد</th><th>نوع درس</th><th>نام درس</th></tr>`;
    for(bb of booklistname){
        if(bb!=""){
            if(localStorage.getItem(bb)!=null){
                let z=localStorage.getItem(bb).split(",");
                mybooktable.innerHTML+=`<tr class="${z[0]}"><td class="delitem" onClick="rf(this)">X</td><td>${z[2]}</td><td>${z[1]}</td><td>${z[0]}</td><tr>`;
           
            }
        
        }
    }
    if(localStorage.getItem('stusname1')!=null){
    stunamelist=localStorage.getItem('stusname1').split(",");
    }
    let mystutable=document.getElementById("mystutable");
    mystutable.innerHTML=`<tr><th>حذف</th><th>سن</th><th>جنسیت</th><th>رشته</th><th>شماره دانشجویی</th><th>فامیلی دانشجو</th><th>نام دانشجو</th></tr>`;
    for(ss of stunamelist){
        if(ss!=""){
            if(localStorage.getItem(ss)!=null){
                let y=localStorage.getItem(ss).split(",");
                mystutable.innerHTML+=`<tr class="${y[0]}${y[1]}"><td class="delitem" onClick="rf(this)">X</td><td>${y[5]}</td><td>${y[4]}</td><td>${y[3]}</td><td>${y[2]}</td><td>${y[1]}</td><td>${y[0]}</td><tr>`
            
            }
          
        }
    }
    if(localStorage.getItem('ostsname1')!=null){
    ostnamelist=localStorage.getItem('ostsname1').split(",");
    }
    let myostable=document.getElementById("myostable");
    myostable.innerHTML=`<tr><th>حذف</th><th>سن</th><th>جنسیت</th><th>شاخه علمی</th><th>فامیلی استاد</th><th>نام استاد</th></tr>`
    for(oo of ostnamelist){
        if(oo!=""){
            if(localStorage.getItem(oo)!=null){
                let x=localStorage.getItem(oo).split(",");
                myostable.innerHTML+=`<tr class="${x[0]}${x[1]}"><td class="delitem" onClick="rf(this)">X</td><td>${x[4]}</td><td>${x[3]}</td><td>${x[2]}</td><td>${x[1]}</td><td>${x[0]}</td><tr>`
          
            }
         
        }
    }
    
}
function whyme1() {
    booklistname=localStorage.getItem('booksname1').split(",");
    let mybooktable=document.getElementById("mybooktable");
    mybooktable.innerHTML=`<tr><th>تعداد واحد</th><th>نوع درس</th><th>نام درس</th></tr>`;
    for(bb of booklistname){
        if(bb!=""){
            if(localStorage.getItem(bb)!=null){
            let z=localStorage.getItem(bb).split(",");
            mybooktable.innerHTML+=`<tr><td>${z[2]}</td><td>${z[1]}</td><td>${z[0]}</td><tr>`;
            }
        }
    }
    stunamelist=localStorage.getItem('stusname1').split(",");
    let mystutable=document.getElementById("mystutable");
    mystutable.innerHTML=`<tr><th>سن</th><th>جنسیت</th><th>رشته</th><th>شماره دانشجویی</th><th>فامیلی دانشجو</th><th>نام دانشجو</th></tr>`;
    for(ss of stunamelist){
        if(ss!=""){
            if(localStorage.getItem(ss)!=null){
                let y=localStorage.getItem(ss).split(",");
                mystutable.innerHTML+=`<tr><td>${y[5]}</td><td>${y[4]}</td><td>${y[3]}</td><td>${y[2]}</td><td>${y[1]}</td><td>${y[0]}</td><tr>`
            
            }
         
        }
    }
}
function whyme2() {
    booklistname=localStorage.getItem('booksname1').split(",");
    let mybooktable=document.getElementById("mybooktable");
    mybooktable.innerHTML=`<tr><th>تعداد واحد</th><th>نوع درس</th><th>نام درس</th></tr>`;
    for(bb of booklistname){
        if(bb!=""){
            if(localStorage.getItem(bb)!=null){
                let z=localStorage.getItem(bb).split(",");
                mybooktable.innerHTML+=`<tr><td>${z[2]}</td><td>${z[1]}</td><td>${z[0]}</td><tr>`;
          
            }
  
        }
    }
    ostnamelist=localStorage.getItem('ostsname1').split(",");
    let myostable=document.getElementById("myostable");
    myostable.innerHTML=`<tr><th>سن</th><th>جنسیت</th><th>شاخه علمی</th><th>فامیلی استاد</th><th>نام استاد</th></tr>`
    for(oo of ostnamelist){
        if(oo!=""){
            if(localStorage.getItem(oo)!=null){
            let x=localStorage.getItem(oo).split(",");
            myostable.innerHTML+=`<tr><td>${x[4]}</td><td>${x[3]}</td><td>${x[2]}</td><td>${x[1]}</td><td>${x[0]}</td><tr>`
        }
        }
    }
}


function rf(z) {
    
    zz = z.parentNode;

    localStorage.removeItem(zz.className);
    zz.remove();
}