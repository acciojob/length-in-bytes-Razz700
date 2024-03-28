const byteSize = (str) => {
  // write your code here
	let x=new Blob([str]).size

	return x;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
