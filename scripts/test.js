// global variables and constants
var NumberColors = 6;
var NumberItems = 4;
var MAX_TRY = 3; //10
var theColorSet;
// classes
/// Set of colors
var ColorSet = (function () {
    function ColorSet(arr) {
        this.color = [];
        var isArr = typeof arr !== "undefined";
        for (var i = 0; i < NumberItems; i++) {
            if (isArr && i < arr.length) {
                this.color.push(arr[i]);
            }
            else {
                this.color.push(0);
            }
        }
    }
    ;
    ColorSet.prototype.colors = function () {
        return this.color;
    };
    ;
    ColorSet.ThinkOf = function () {
        var arr = [];
        for (var i = 1; i <= NumberItems; i++) {
            arr.push(RandomInt(1, NumberColors));
        }
        return new ColorSet(arr);
    };
    ;
    /// Количество угаданных цветов
    ColorSet.prototype.Coincidences = function (cs) {
        var result = 0;
        if (this.colors().length != cs.colors().length)
            return -1; // TODO: Бросить исключение
        for (var i = 0; i < this.colors().length; i++) {
            if (this.color[i] == cs.colors()[i])
                result++;
        }
        return result;
    };
    return ColorSet;
}());
// functions
/// Ramdom int >=min & <=max
var RandomInt = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
theColorSet = ColorSet.ThinkOf();
console.log("theColorSet=", theColorSet);
