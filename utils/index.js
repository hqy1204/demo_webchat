var isSelected = function(activeNames, item) {
        return activeNames.indexOf(item.name) != -1 ? true : false;
    }
    // 千分位格式
var formatAmount = function(amount) {
        if (amount) {
            var reg = getRegExp('(\d)(?=(\d{3})+$)', 'g');
            var tempArr = amount.toString().split('.');
            var int = tempArr[0];
            var dec = tempArr[1];
            return dec ? int.replace(reg, '$1,') + '.' + dec : int.replace(reg, '$1,')
        } else {
            return amount
        }

    }
    // 格式化万元单位
var formatToWan = function(amount) {
        if (amount) {
            var tempArr = amount.toString().split('.');
            var int = tempArr[0];
            var dec = tempArr[1];
            return int / 10000
        } else {
            return amount
        }

    }
    // 格式化数字
var formatNum = function(amount) {
    if (amount) {
        var tempArr = amount.toString().split('.');
        var int = tempArr[0];
        var dec = tempArr[1];
        return int == 0 ? 0 : dec ? int + '.' + dec : int
    } else {
        return amount
    }

}
module.exports = {

    isSelected: isSelected,
    formatAmount: formatAmount,
    formatToWan: formatToWan,
    formatNum: formatNum,

}