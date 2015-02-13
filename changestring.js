var string = "Thisisgiberish";
print(string);

for (var i = 4; i <= string.length; i += 3) {
	if (i < 11){
		print(string[i]);
	}
}

string = string.toUpperCase();
print(string);

