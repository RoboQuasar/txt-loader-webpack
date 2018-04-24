let count = 0;

module.exports = function(result) {
  document.getElementsByName("mainButton")[0].addEventListener('click', () => {
    count += 1;
    console.log(`Количество нажатий: ${count}`);
    console.log(`Из файла прочиталось: ${result}`);

    if(count % 5 === 0) console.log('Какой старательный!');
  });
};
