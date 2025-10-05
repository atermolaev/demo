/**
 * При работе функции JSON.stringify замечен баг 
 * при конфертации больших массивов(2,5 млн элементов)
 * преобразование таких массивов происходит некорректно. 
 * Для этого потребовалось доработать эту функцию.
 */

// Функция для превращения в строку объектов с большими массивами
const jsonStringifyForBigImage = (obj) => {
    const jsonStr = JSON.stringify(obj, function replacer(key, value) {
      if (value instanceof Uint8Array) {
        const arrBody = Array.from(value)
          .map((byte, index) => `"${index}":${byte}`)
          .join(",");
  
        // Добавит якоря, для кавычек, перед объектом в джейсоне, чтобы их можно было отследить и убрать.
        return `###{${arrBody}}###`;
      }
      return value;
    });
  
    // Удаление слэшей перед кавычками в объекте картинки, и удаляет кавычки в начале объекта и в конце.
    const jsonStrCurrent = jsonStr
      .replace(/\\"/g, '"')
      .replace(/"###/g, "")
      .replace(/###"/g, "");
    return jsonStrCurrent;
  };