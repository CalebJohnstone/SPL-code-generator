# SPL-code-generator
Web page interface to generate segments of SPL code, to speed up the creation of test files for the COS 341: Compiler Construction practicals

Google Drive of helpful resources (my link, not my actual drive I use, which is also on the main COS WhatsApp group): https://drive.google.com/drive/folders/12ajkm9PwQ0QVw02XkXzqF34gfuoRd06y?usp=sharing

Feel free to fork and make your own improvements. This initial version works but improvements can be made to make the interaction smoother and common operations such as subtraction by 1 (eg: x = x - 1) can be added as buttons. If you figure out some interesting additional features, let me know :)

Example of usage: (I can maybe record myself doing this)

Target File:

x = 0;

proc t{
	input(apple);
	if(not and(and(eq(a, b), (w < e)), (dt > d))){
		read
	}
	
	for(i = 0; i < j; i = add(i, 1)){
		while(eq(a, b)){
			x = add(v, sub(d, mult(f, mult(f, 4))));
			for(s = 0; s < w; s = add(s, 1)){
				p=0
			}
		}
	}
}

Steps: **turn on "last line in block" to avoid extra semi-colons when you are clicking ENTER aftera semi-colon automatically inserted for you**

NOTE: if you just manually enter code on the right hand side when clicking enter the semi-colon is automatically appended to the end of the line for you unless it is the last line in the current block of code (indicated by having "last line in block" turned on).

- enter x and 0 next to VAR=VALUE
- click VAR=VALUE
- follow step in with **'s around it above
- enter t next to proc ID{PROG}
- click proc ID{PROG}
- enter apple next to input(VAR)
- place cursor in desired spot (1 indent into proc t on the first line) -> this will apply whenever you are just about to insert a statement so it will not be explicitly stated from now one, but it is implied. Some indentation will have to be manually fixed by you - these are marked as TODOs in the JS file
- click input(VAR)
- click not BOOL with no input
- click and(BOOL,BOOL) with no input
- click and(BOOL,BOOL) with no input
- create eq(a,b) using eq(x,x) button and the input boxes
- do similar for (w < e) and (dt > d), read (use CALL ID)
- for loop with i and j
- while loop with no input
- create eq(a,b)
- VAR=VALUE: only first box has x and 2nd one is empty, click button
- add, sub and mult work in same way for adding layers as and, or and not do
- s and w for loop
- p and 0 for VAR=VALUE

Now to show you the enter and tab acutally work when you manually enter int the text area, this does not work when you try to insert code in the middle and not append to the end, that is were the semicolon placement and indentation go off:

Target file:

x = 0;
smvsdmv = 2;
write = 3;

if(eq(a,b))then{
	p=0;
	a=1
}

- make sure "last line in block" is off and you ahve refreshed the page
- type x = 0
- enter
- type smvsdmv = 2
- enter
- type write = 3
- enter
- turn "last line in block" on to avoid semi-colon by itself on open line
- turn "last line in block" off
- type if(eq(a,b))then{
- enter, indentation automatically done for you :P
- type p=0
- enter
- type a=1
- turn "last line in block" on
- enter
- indentation and closing brace automatically done for you :P

If anything is unclear, try fiddle with it to see how it works.

Hope this helps to speed up your test case making to find those pesky bugs we all love.
