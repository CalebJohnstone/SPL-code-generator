function write(insertText){//TODO: cursor moves weirdly when auto print code and then input and ENTER in middle and not at end
    var cursorPos = $('#inputFileText').prop('selectionStart');
    var v = $('#inputFileText').val();
    var textBefore = v.substring(0, cursorPos);
    var textAfter  = v.substring(cursorPos, v.length);
    $('#inputFileText').val(textBefore + insertText + textAfter);
}

function clearText(){
    $('#inputFileText').val('');
}

function halt(){
    write("halt");
    semiColon();
}

function proc(){
    write("proc " + document.getElementById("procName").value + "{\n\t\n}");
    semiColon();
}

function input(){
    write("input(" + document.getElementById("inputVAR").value + ")");
    semiColon();
}

function output(){
    write("output(" + document.getElementById("outputVAR").value + ")");
    semiColon();
}

function call(){
    write(document.getElementById("callID").value);
    semiColon();
}

function assign(){
    write(document.getElementById("VAR").value + " = " + document.getElementById("VALUE").value);
    semiColon();
}

function calc(type){
    write(type + "(" + document.getElementById(type+"1").value + ", " + document.getElementById(type+"2").value + ")");
    semiColon();
}

function add(){
    calc('add');
}

function sub(){
    calc('sub');
}

function mult(){
    calc('mult');
}

function ifStatement(){
    write('if(' + document.getElementById("ifBOOL").value + ')then{\n\t\n}');//TODO: correct indentation
    semiColon();
}

function ifElseStatement(){
    write('if(' + document.getElementById("ifElseBOOL").value + ')then{\n\t\n}else{\n\t\n}');//TODO: correct indentation
    semiColon();
}

function eq(){
    write('eq(' + document.getElementById('eq1').value + ', ' + document.getElementById('eq2').value + ')');
}

function boolVarComp(type, symbol){
    write('(' + document.getElementById('var'+type+'Than1').value + ' '+symbol+' ' + document.getElementById('var'+type+'Than2').value + ')');
}

function varLessThan(){
    boolVarComp('Less', '<');
}

function varGreaterThan(){
    boolVarComp('Greater', '>');
}

function not(){
    write('not ' + document.getElementById('notBOOL').value);
}

function binaryBoolComp(type){
    write(type+'('+document.getElementById(type+'1').value+', '+document.getElementById(type+'2').value+')');
}

function and(){
    binaryBoolComp('and');
}

function or(){
    binaryBoolComp('or');
}

function whileLoop(){
    write('while('+document.getElementById('whileBOOL').value+'){}');//TODO: correct indentation
    semiColon();
}

function forLoop(){
    //assuming VAR1 = 0; VAR1 < VAR2; VAR1 = add(VAR1, 1)
    write('for('+document.getElementById('forVAR1').value+' = 0; '+document.getElementById('forVAR1').value+' < ' +document.getElementById('forVAR2').value+
    '; '+document.getElementById('forVAR1').value+' = add('+document.getElementById('forVAR1').value+', 1)){}');//TODO: correct indentation
    semiColon();
}

function semiColon(){
    if(!document.getElementById("lastLine").checked){
        write(";");
    }

    write("\n");
}

document.getElementById('inputFileText').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // put caret at right position again
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });

document.getElementById('inputFileText').addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        //do not have to remember to put in semi-colons
        if(this.value.charAt(this.value.length-1) !== "{" && this.value.charAt(this.value.length-1) !== '\t' && !document.getElementById("lastLine").checked){
            write(";");
        }

        var currentLine = this.value.substring(this.value.lastIndexOf("\n")+1);

        //count the number of tabs to get the next line to have the correct indentation
        var i=0;
        for(; i<currentLine.length && currentLine.charAt(i) === '\t'; ++i);
        console.log(currentLine);
        console.log('tabs: ' + i);

        if(this.value.charAt(this.value.length-1) === "{"){
            ++i;
        }else if(document.getElementById("lastLine").checked){
            --i;
        }

        //output the indentation for the next line of code
        setTimeout(function(){
            $('#inputFileText').val($('#inputFileText').val()+'\t'.repeat(i) + (document.getElementById("lastLine").checked ? '}' : ''));
        }, 200);
    }
  });
