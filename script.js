var final = document.getElementById('final');
var table = document.getElementById('table');

var op1 = null , operator = null , op2 = null, bool = true;

table.addEventListener('click', function(e) {
    var t = e.target.textContent;
    // console.log(t);
    if(t=='AC'){
        final.innerText = "";
        op1 = null;
        op2 = null;
        operator = null;
    }
    else if(t=='+' || t=='-' || t=='*' || t=='/'){
        operator = t;
        op1 = parseFloat(final.innerText);
        final.innerText = "";
    }
    else if(t=='%'){
      var val = parseFloat(final.innerText);
      final.innerText = val/100;
    }
    else if(t=='+/-'){
      if(bool == true){
        final.innerText = '-' + final.innerText;
        bool = false;
      }
      else
      {
        var str = final.innerText;
        str = str.substring(1);
        final.innerText = str;
        bool = true;
      }
    }
    else if(t=='='){
      op2 = parseFloat(final.innerText);
      var res = eval(op1 + " "+operator+" "+ op2);
      final.innerText = res;
    }
    else if(t=='.'){
      if(final.innerText.length && !final.innerText.includes('.')){
        final.innerText += '.';
      }
    }
    else{
      final.innerText += t;
    }

});


// keyboard handling
document.addEventListener('keypress', function(e) {
    var t = e.key;
    if(t=='+' || t=='-' || t=='*' || t=='/'){
        operator = t;
        op1 = parseFloat(final.innerText);
        final.innerText = "";
    }
    else if(t=='%'){
      var val = parseFloat(final.innerText);
      final.innerText = val/100;
}
    else if(t=='='){
      op2 = parseFloat(final.innerText);
      var res = eval(op1 + " "+operator+" "+ op2);
      final.innerText = res;
    }
    else if(t>='0' && t<='9'){
      final.innerText += t;
    }
    else{
      return;
    }

});
