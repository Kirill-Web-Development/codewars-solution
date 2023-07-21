//   Complete the function `scramble(str1, str2)` that returns `true` if a portion of `str1` characters can be rearranged to match `str2`, otherwise returns `false`.

// **Notes:**

// - Only lower case letters will be used (a-z). No punctuation or digits will be included.
// - Performance needs to be considered.

// **Решения сортированы по производительности от худшего к лучшему, согласно тестам в кодворс:**


function scramble(str1, str2) {
		// делаем массивы из строк, чтобы итерироваться по ним
    str1 = str1.split('');
    str2 = str2.split('');
		// объявляем переменную, которая будет считать вхождения букв
    let counter = 0
    str2.forEach(letter => {
				// если буква из str1 входит в str2
        if (str1.includes(letter)) {
						// инкремируем переменную
            counter++;
						// самое главное - нужно удалить букву из str2
						// т.к. это будет рушить логику для одинаковых букв
            str1.splice(str1.indexOf(letter), 1)
        }
    });
		// в итоге counter должен быть равным длине str2
    return (counter === str2.length)
 }


 
function scramble(str1, str2) {
    let counter = 0;
		// смысл в том, чтобы сделать объект из строки, где
		// пара [key]: value - это буква: количество её вхождений в слово
		// и потом сравнить два объекта
    function strToObj(str) {
				// делаем из строки объект
        return [...str].reduce((res, curr) => {
            return {
                ...res,
								// если значения для буквы нет, то 1, если 1 уже стоит, то прибавляем
                [curr]: (res[curr] === undefined) ? 1 : res[curr] +=1
            }
        }, {});
    }
    str1Obj = strToObj(str1);
    str2Obj = strToObj(str2);
		// итерируем по объекту, сделанному из 2-й строки
    for (key in str2Obj) {
				// если в первой строке столько же вхождений конкретной буквы
				// или больше, то прибавляем к counter количеств
				// вхождений буквы во вторую строку
        if (str1Obj[key] >= str2Obj[key]) {
            counter += str2Obj[key];
        }
    }
		// проверяем все ли буквы из str2 можно найти в str1
    return counter === str2.length;

}




function scramble(str1, str2) {
  // Функция для подсчета количества каждого символа в строке
	// также делается объект, но без метода reduce
  function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
			// для формирования [буква]: вхождение
			// используется логическое выражение
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }

  // Получаем объекты с количествами символов в каждой строке
  const str1CharCount = countCharacters(str1);
  const str2CharCount = countCharacters(str2);

  // Проверяем, содержатся ли все символы из str2 в str1 и их количество не превышает количество в str1
// логика от обратного, если хотябы одна буква не содержится в str1 или
// входит меньше раз чем в str2, то возвращается false
// а значит счётчик в этой реализации не нужен
  for (let char in str2CharCount) {
    if (!str1CharCount[char] || str1CharCount[char] < str2CharCount[char]) {
      return false;
    }
  }
  return true;
}
