var x = document.getElementById("openh");
var y= document.getElementById("openus");
var z = document.getElementById("opens");
function dropdown(){

if (x.style.display!=='block'){
    x.style.display='block';
    y.style.display='none'
    z.style.display='none'
} 
else{
    x.style.display='none'
}
}
function dropdownus(){
   
    if (y.style.display!=='block'){
        y.style.display='block';
        x.style.display='none'
        z.style.display='none'
    } else{
        y.style.display='none'
   }
}
function dds(){
        
        if (z.style.display!=='block'){
            z.style.display='block';
            x.style.display='none'
            y.style.display='none'
        } else{
            z.style.display='none'
        }
}
var l = document.getElementById('logino')
var p = document.getElementById('main')
function pagelogin(){
        l.style.display='block';
        p.style.opacity =0.5;
}

function closelogin(){
    l.style.display='none';
    p.style.opacity =1;
}

var a = document.getElementById('tr')
var b = document.getElementById('ri')
var c = document.getElementById('ma')

function showimg(){
    if(a.style.display!=='block'){
        a.style.display='block';
        b.style.display='none'
        c.style.display='none'
    }
}
function showimg2(){
    if(b.style.display!=='block'){
        b.style.display='block';
        a.style.display='none'
        c.style.display='none'
    } else{
        b.style.display='none'
    }
}
function showimg3(){
    if(c.style.display!=='block'){
        c.style.display='block';
        b.style.display='none'
        a.style.display='none'
    } else{
        c.style.display='none'
    }
}

var cof = document.getElementById('cf')
var cold = document.getElementById('cd')
var faf = document.getElementById('fafo')
var tea = document.getElementById('te')
var all = document.getElementById('te','fafo','cd','cf')

function colddrink(){
    if(cold.style.display!=='flex'){
        cold.style.display='flex';
        cof.style.display='none'
        faf.style.display='none'
        tea.style.display='none'
    }
}

function coff(){
    if(cof.style.display!=='flex'){
        cof.style.display='flex';
        cold.style.display='none'
        faf.style.display='none'
        tea.style.display='none'
    }
}

function fastfo(){
    if(faf.style.display!=='flex'){
        faf.style.display='flex';
        cold.style.display='none'
        cof.style.display='none'
        tea.style.display='none'
    }
}

function te(){
    if(tea.style.display!=='flex'){
        tea.style.display='flex';
        cold.style.display='none'
        faf.style.display='none'
        cof.style.display='none'
    }
}
function showall(){
    tea.style.display='flex';
    cold.style.display='flex;'
    faf.style.display='flex';
    cof.style.display='flex';
    // flex-flow: WebTransport;
}