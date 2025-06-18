

	function secondHighest(arr) {
		// Convert all elements to numbers (prompt returns strings)
		arr = arr.map(Number);

		// Remove duplicates
		let uniqueArr = [...new Set(arr)];

		// If not enough distinct elements, return -Infinity
		if (uniqueArr.length < 2) return -Infinity;

		// Sort in descending order and return second element
		uniqueArr.sort((a, b) => b - a);
		return uniqueArr[1];
	}

	function Main() {
		var n = prompt("Enter the number of elements");
		var arr = [];
		for (var i = 0; i < n; i++) {
			arr[i] = prompt("Enter element " + (i + 1));
		}
		alert(secondHighest(arr));
	}
	Main();

