export default (items) => Math.round(items.map((item) => item.value||0)
                               .map(parseFloat)
                               .filter(x => !isNaN(x))
                               .reduce((x, y) => x + y, 0) * 100) / 100;
